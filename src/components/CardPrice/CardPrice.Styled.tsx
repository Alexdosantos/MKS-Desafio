import { colors } from "@/colors/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 74px;
  height: 26px;
  border-radius: 5px;

  background: ${colors.third};
`;

export const Text = styled.h3`
  font-size: 1rem;
  font-family: Montserrat;
  font-weight: 700;
  color: ${colors.secundary};
`;
