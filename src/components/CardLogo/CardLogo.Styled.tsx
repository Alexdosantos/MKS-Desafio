import { colors } from "@/colors/colors";
import styled from "styled-components";

export const DivLogo = styled.div`
  display: flex;

  align-items: center;
  gap: 5%;
  width: 100%;
`;

export const TextLogo = styled.h1`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 2.5rem;
  color: ${colors.secundary};
`;

export const TextLogoSystem = styled.h4`
  font-family: Montserrat;
  font-weight: 300;
  font-size: 1.25rem;
  color: ${colors.secundary};
`;
