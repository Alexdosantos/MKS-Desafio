import { colors } from "@/colors/colors";
import styled from "styled-components";

export const Head = styled.section`
  width: 100%;

  background: ${colors.primary};
`;

export const Wrapper = styled.div`
  display: flex;

  padding: 1% 0 1% 0;
  justify-content: space-between;
`;
export const DivLogo = styled.div`
  width: 30%;
  padding: 0 0 0 3%;
`;

export const DivCart = styled.div`
  padding: 0 5% 0 0;
`;

export const DivCountCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2% 0 0;
  width: 95px;
  height: 45px;
  gap: 15%;
  border-radius: 5px;
  background: ${colors.secundary};
`;

export const SectionProducts = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
 
  margin: 0 auto;
  margin-top: 3%;
  width: 76.1%;
  @media (width >= 1468px) {
    width: 55%;
  }

  @media (width <= 768px) {
    justify-content: center;
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;
