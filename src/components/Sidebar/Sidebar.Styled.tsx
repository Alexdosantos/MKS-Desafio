import { colors } from "@/colors/colors";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: relative;
  position: fixed;
  right: 0;
  width: 486px;
  height: 100vh;
  background: ${colors.primary};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

  @media (width <= 768px) {
    width: 100%;
  }
`;

export const DivTitleAndClosed = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1% 0 0 0;
  padding: 0 8% 0 8%;
`;

export const DitTitle = styled.div`
  width: 39%;
  height: 76px;
`;

export const Title = styled.h3`
  padding: 2% 0 0 0;
  font-family: Montserrat;
  font-size: 1.6rem;

  color: ${colors.secundary};
`;

export const ButtonClosed = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const DivCardsCarts = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;

  overflow: auto;
`;

export const DivTotalCards = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  bottom: 100px;

  width: 100%;
`;

export const TextTotalCart = styled.h2`
  font-family: Montserrat;
  font-size: 1.7rem;
  font-weight: 700;
  color: ${colors.secundary};
`;

export const NumberTotalCart = styled.h2`
  font-family: Montserrat;
  font-size: 1.7rem;
  font-weight: 700;
  color: ${colors.secundary};
`;
export const DivButtonfinish = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
