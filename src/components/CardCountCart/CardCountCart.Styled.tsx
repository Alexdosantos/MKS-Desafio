import { colors } from "@/colors/colors";
import styled from "styled-components";

export const DivCountCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2% 0 0;
  width: 95px;
  height: 45px;
  gap: 15%;
  border-radius: 5px;
  border: none;
  background: ${colors.secundary};

  cursor: pointer;
`;

export const NumberCountCart = styled.h3`
  width: 13px;
  height: 22px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 18px;
  height: 22px;
`;
