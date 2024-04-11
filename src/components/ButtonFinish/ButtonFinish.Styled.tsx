import { colors } from "@/colors/colors";
import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 5%;
  font-family: Montserrat;
  font-size: 1.7rem;
  font-weight: 700;
  border: none;
  color: ${colors.secundary};
  background: ${colors.sixth};
  cursor: pointer;
`;
