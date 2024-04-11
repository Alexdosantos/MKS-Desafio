import { colors } from "@/colors/colors";
import { color } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  
  margin: 5% 0 10% 0;
  width: 218px;
  height: 350px;
  
 
`;

export const DivImg = styled.div`
  align-items: center;
  text-align: center;
  width: 100%;
  height: 140px;
  padding: 5% 0 5% 0;

 
`;

export const DivTitleAndPrice = styled.div`
  display: flex;
  width: 89%;
  margin: 0 auto;

  align-items: center;
  height: 60px;
  
`;

export const DivTitle = styled.div`
  width: 65%;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-family: Montserrat;
  font-weight: 400;
`;

export const DivPrice = styled.div`
  width: 35%;
`;

export const Description = styled.div`
  width: 89%;
  height: 90px;
  margin: 0 auto;
  margin-top: 3%;

  align-items: center;
  
`;

export const TextDescription = styled.p`
  font-size: 0.8rem;
  font-family: Montserrat;
  font-weight: 300;
  padding: 0 2% 0 0;
  color: ${colors.third};
`;
