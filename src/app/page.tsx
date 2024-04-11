"use client";
import { GlobalStyle } from "./globalStyled";
import * as S from "./pageStyled";
import Image from "next/image";
import CardLogo from "@/components/CardLogo/CardLogo";
import CardCountCart from "@/components/CardCountCart/CardCountCart";
import CardProducts from "@/components/CardProducts/CardProducts";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/service/getApi/getApi";
import GifLoading from "@/assets/loading.gif";

import { useShoppingCart } from "@/hook/useShoppingCart/useShoppingCart";

export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

interface ProductResponse extends IProduct {
  count: number;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, addToCart, removeFromCart } = useShoppingCart();

  const { data: products, isLoading } = useQuery<ProductResponse[]>({
    queryKey: ["getProduct"],
    queryFn: async () => getProducts(),
  });

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClickclose = () => {
    setIsOpen(false);
  };

  const handleDeleteFromCart = (productId: number) => {
    removeFromCart(productId);
  };

  return (
    <>
      <GlobalStyle />
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Image src={GifLoading} alt="Product 1" width={150} height={150} />
        </div>
      ) : (
        <>
          <Sidebar 
            isOpen={isOpen}
            onclickClosed={handleClickclose}
            onclickDelete={(productId) => handleDeleteFromCart(productId)}
            mapeamento={cart}
          />
          <S.Head>
            <S.Wrapper>
              <S.DivLogo>
                <CardLogo />
              </S.DivLogo>
              <S.DivCart>
                <S.DivCountCart>
                  <CardCountCart
                    quantityCart={cart.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                    onclick={handleClick}
                  />
                </S.DivCountCart>
              </S.DivCart>
            </S.Wrapper>
          </S.Head>
          <S.SectionProducts>
            {products?.map((product) => (
              <CardProducts
                key={product.id}
                name={product.name}
                urlImage={product.photo} // Usando a URL da imagem
                description={product.description}
                price={product.price}
                onclick={() => addToCart(product)}
              />
            ))}
          </S.SectionProducts>
        </>
      )}
    </>
  );
}
