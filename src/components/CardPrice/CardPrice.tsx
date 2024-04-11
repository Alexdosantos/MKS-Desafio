import * as S from "./CardPrice.Styled";

interface ICardPrice {
  name: string;
}

const CardPrice = ({ name }: ICardPrice) => {
  return (
    <S.Container>
      <S.Text>{name}</S.Text>
    </S.Container>
  );
};

export default CardPrice;
