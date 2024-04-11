import * as S from "./CardProducts.Styled";
import Image from "next/image";
import CardPrice from "../CardPrice/CardPrice";
import ImgRelogio from "@/assets/apple-watch.png";
import ButtonProps from "../ButtonProps/ButtonProps";

interface ICardProducts {
  urlImage: string;
  name: string;
  price: string;
  description: string;
  onclick: () => void;
}

const CardProducts = ({
  urlImage,
  name,
  price,
  description,
  onclick
}: ICardProducts) => {
  return (
    <S.Container>
      <S.DivImg>
        <Image src={urlImage} alt="" width={111} height={138} />
      </S.DivImg>
      <S.DivTitleAndPrice>
        <S.DivTitle>
          <S.Title>{name}</S.Title>
        </S.DivTitle>
        <S.DivPrice>
          <CardPrice name={price} />
        </S.DivPrice>
      </S.DivTitleAndPrice>
      <S.Description>
        <S.TextDescription>{description}</S.TextDescription>
      </S.Description>
      <div>
        <ButtonProps onclick={onclick}/>
      </div>
    </S.Container>
  );
};

export default CardProducts;
