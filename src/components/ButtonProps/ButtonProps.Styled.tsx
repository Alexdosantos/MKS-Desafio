import { colors } from "@/colors/colors";
import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;

  gap: 10px;
  padding: 4%;
  margin-top: 5%;

  align-items: center;
  text-align: center;

  font-family: Montserrat;
  font-weight: 600;
  font-size: 0.8rem;

  border: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  color: ${colors.secundary};
  background: ${colors.primary};

  cursor: pointer;
`;
