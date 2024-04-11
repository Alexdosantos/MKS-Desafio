import * as S from "./ButtonProps.Styled";
import Img from "@/assets/shopping-bag.png";
import Image from "next/image";

interface IButtonProps {
  onclick: () => void;
}

const ButtonProps = ({ onclick }: IButtonProps) => {
  return (
    <>
      <S.Button onClick={onclick}>
        <Image src={Img} alt="button" width={12} height={13.5} />
        COMPRAR
      </S.Button>
    </>
  );
};

export default ButtonProps;
