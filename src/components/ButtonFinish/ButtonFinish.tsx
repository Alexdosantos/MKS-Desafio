import * as S from "./ButtonFinish.Styled";

interface IButtonFinish {
  name: string;
}

const ButtonFinish = ({ name }: IButtonFinish) => {
  return (
    <>
      <S.Button>{name}</S.Button>
    </>
  );
};

export default ButtonFinish;
