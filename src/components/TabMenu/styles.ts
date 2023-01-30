import styled, { css } from "styled-components/native";

type Props = {
  color: string;
}

export const Container = styled.View`
  align-items: center;

`;

export const Title = styled.Text<Props>`
  font-size: 18px;

  ${({theme, color}) => css`
    color: ${color};
    font-family: ${theme.FONTS.TITLE};
  `}
`;