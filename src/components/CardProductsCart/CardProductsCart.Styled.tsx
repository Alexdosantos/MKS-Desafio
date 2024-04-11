import { colors } from "@/colors/colors";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: relative;
  display: flex;
  width: 379px;
  height: 95px;
  margin: 0 auto;
  margin-top: 5%;
  margin-bottom: 5%;
  border-radius: 10px;
  background: ${colors.secundary};
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: -4px;
  top: -5px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const DivImag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 30%;

  height: 95px;
`;

export const DivItitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 35%;
`;

export const TitleProduct = styled.h2`
  font-size: 1rem;
  font-family: Montserrat;
  font-weight: 400;
`;

export const DivQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 5%;

  width: 30%;
`;

export const TextQuantity = styled.h4`
  font-family: Montserrat;
  font-size: 0.5rem;
  font-weight: 400;
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  justify-content: space-evenly;

  width: 70px;
  height: 29px;
  border: 1px solid ${colors.fourth};
  border-radius: 5px;
  background: ${colors.secundary};
`;

export const ButtonDescending = styled.button`
  align-items: center;
  text-align: center;
  width: 35%;
  font-size: 1rem;
  font-family: Montserrat;
  font-weight: 400;
  background: transparent;

  border: none;
  border-right: 1px solid ${colors.fourth};
  cursor: pointer;
`;

export const NumberQuantity = styled.h4`
  width: 30%;
  text-align: center;
  font-size: 1rem;
  font-family: Montserrat;
  font-weight: 400;
`;

export const ButtonGrowing = styled.button`
  font-size: 1rem;
  font-family: Montserrat;
  font-weight: 400;
  width: 35%;

  background: transparent;
  border: none;
  border-left: 1px solid ${colors.fourth};
  cursor: pointer;
`;

export const DivCartTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 25%;
`;

export const TitleCartTotal = styled.h4`
  padding: 0 10% 0 0;
  font-size: 1rem;
  font-family: Montserrat;
  font-weight: 700;
`;
