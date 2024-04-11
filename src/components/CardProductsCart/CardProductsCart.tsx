import * as S from "./CardProductsCart.Styled";
import Image from "next/image";
import ImgClose from "@/assets/Close_cart.png";

interface CardProductsCartProps {
  photo: string;
  name: string;
  quantity: number;
  onclickDelete: () => void;
  totalProductPrice: string;
  handleDecreaseQuantity: () => void;
  handleIncreaseQuantity: () => void;
}

const CardProductsCart = ({
  photo,
  name,
  quantity,
  onclickDelete,
  totalProductPrice,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
}: CardProductsCartProps) => {
  return (
    <S.Container
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50, transition: { duration: 5.2 } }}
      transition={{ duration: 0.2 }}
    >
      <S.ButtonClose onClick={onclickDelete}>
        <Image src={ImgClose} alt="Close" width={20} height={20} />
      </S.ButtonClose>
      <S.DivImag>
        <Image src={photo} alt="image" width={48} height={57} />
      </S.DivImag>
      <S.DivItitle>
        <S.TitleProduct>{name}</S.TitleProduct>
      </S.DivItitle>

      <S.DivQuantity>
        <S.TextQuantity>Qtd:</S.TextQuantity>
        <S.DivButtons>
          <S.ButtonDescending onClick={handleDecreaseQuantity}>
            -
          </S.ButtonDescending>
          <S.NumberQuantity>{quantity}</S.NumberQuantity>
          <S.ButtonGrowing onClick={handleIncreaseQuantity}>+</S.ButtonGrowing>
        </S.DivButtons>
      </S.DivQuantity>
      <S.DivCartTotal>
        <S.TitleCartTotal>{totalProductPrice}</S.TitleCartTotal>
      </S.DivCartTotal>
    </S.Container>
  );
};

export default CardProductsCart;
