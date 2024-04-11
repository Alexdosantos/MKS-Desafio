import * as S from "./Sidebar.Styled";
import Image from "next/image";
import ImgClosed from "@/assets/Close_cart.png";
import CardProductsCart from "../CardProductsCart/CardProductsCart";
import ButtonFinish from "../ButtonFinish/ButtonFinish";
import { IProduct } from "@/app/page";
import { useState } from "react";

interface ISidebar {
  isOpen: boolean;
  onclickClosed: () => void;
  onclickDelete: (id: number) => void;
  mapeamento: IProduct[];
}

const Sidebar = ({
  isOpen,
  onclickClosed,
  mapeamento,
  onclickDelete,
}: ISidebar) => {
  const [quantities, setQuantities] = useState<{ [id: number]: number }>(
    mapeamento.reduce((acc: { [id: number]: number }, curr: IProduct) => {
      acc[curr.id] = 1;
      return acc;
    }, {})
  );

  const handleIncreaseQuantity = (id: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const handleDecreaseQuantity = (id: number) => {
    if (quantities[id] > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1,
      }));
    }
  };

  const calculateTotal = (): number => {
    return mapeamento.reduce(
      (total, product) =>
        total + parseFloat(product.price) * (quantities[product.id] || 1),
      0
    );
  };

  return isOpen ? (
    <S.Container
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50, transition: { duration: 5.2 } }}
      transition={{ duration: 0.2 }}
      data-testid="sidebar"
    >
      <S.DivTitleAndClosed>
        <S.Title>
          Carrinho <br /> de compras
        </S.Title>
        <S.ButtonClosed
          onClick={onclickClosed}
          className="close-button"
          data-testid="close-button"
        >
          <Image
            src={ImgClosed}
            alt="Close"
            width={38}
            height={38}
            className="close-image"
          />
        </S.ButtonClosed>
      </S.DivTitleAndClosed>
      <S.DivCardsCarts>
        {mapeamento.map((item) => (
          <CardProductsCart
            key={item.id}
            name={item.name}
            photo={item.photo}
            quantity={quantities[item.id] || 1}
            onclickDelete={() => onclickDelete(item.id)}
            totalProductPrice={(
              parseFloat(item.price) * (quantities[item.id] || 1)
            ).toFixed(2)}
            handleDecreaseQuantity={() => handleDecreaseQuantity(item.id)}
            handleIncreaseQuantity={() => handleIncreaseQuantity(item.id)}
          />
        ))}
      </S.DivCardsCarts>

      <S.DivTotalCards>
        <S.TextTotalCart>Total</S.TextTotalCart>
        <S.NumberTotalCart>R${calculateTotal().toFixed(2)}</S.NumberTotalCart>
      </S.DivTotalCards>
      <S.DivButtonfinish>
        <ButtonFinish name="Finalizar Compra" />
      </S.DivButtonfinish>
    </S.Container>
  ) : null;
};

export default Sidebar;
