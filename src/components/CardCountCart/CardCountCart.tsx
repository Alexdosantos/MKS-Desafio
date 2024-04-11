import * as S from "./CardCountCart.Styled";
import Image from "next/image";
import ImgCart from "@/assets/cart.png";

interface ICardCountCart {
  onclick: () => void;
  quantityCart: number
}

const CardCountCart = ({ onclick ,quantityCart}: ICardCountCart) => {
  return (
    <>
      <S.DivCountCart onClick={onclick}>
        <Image src={ImgCart} alt="image" width={19} height={18} />
        <S.NumberCountCart>{quantityCart}</S.NumberCountCart>
      </S.DivCountCart>
    </>
  );
};

export default CardCountCart;
