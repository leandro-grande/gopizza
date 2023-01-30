import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 56px;
  margin-bottom: 8px;
  background-color: ${({theme}) => theme.COLORS.TITLE};
  border-radius: 16px;
  border: 1px solid ${({theme}) => theme.COLORS.STROKE};

  flex-direction: row;
  overflow: hidden;
`;

export const PlaceHolder = styled.View`
  height: 56px;
  width: 56px;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.View`
  height: 56px;
  width: 100%;
  border-left-width: 1px;
  border-left-color: ${({theme}) => theme.COLORS.STROKE};

  flex-direction: row;
`;

export const PriceLegend = styled.Text`
  font-size: 14px;

  ${({theme}) => css`
  color: ${theme.COLORS.SECONDARY_900};
  font-family: ${theme.FONTS.TEXT};
  `}
`;

export const InputPrice = styled.TextInput`
  height: 56px;
  width: 100%;
  margin-left: -12px;
  font-size: 14px;

  ${({theme}) => css`
  color: ${theme.COLORS.SECONDARY_900};
  font-family: ${theme.FONTS.TEXT};
  `}
`;