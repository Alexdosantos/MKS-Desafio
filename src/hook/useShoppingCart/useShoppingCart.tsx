import { useState } from "react";
import { IProduct } from "@/app/page";

export interface ICartItem extends IProduct {
  quantity: number;
}

export const useShoppingCart = () => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  const addToCart = (product: IProduct) => {
    // Verifica se o produto já está no carrinho
    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      // Se o produto já estiver no carrinho, você pode fazer algo aqui, como exibir uma mensagem de erro ou apenas ignorar a adição
      console.log("Produto já está no carrinho.");
    } else {
      // Produto não está no carrinho, então adicione-o
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return { cart, addToCart, removeFromCart };
};
