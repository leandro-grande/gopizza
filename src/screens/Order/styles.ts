import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  height: 204px;
  padding: ${ getStatusBarHeight() + 24 }px 24px 0;
  background-color: ${({theme}) => theme.COLORS.PRIMARY_800};
`;

export const ProductImg = styled.Image`
  margin-top: -110px;  
  height: 240px;
  width: 240px;
  border-radius: 120px;
  align-self: center;
`;

export const Contain = styled.View`
  margin-top: 24px;
  padding: 0 24px;
`;

export const Title = styled.Text`
  align-self: center;
  font-size: 32px;

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TITLE};
  `}
`;

export const Legend = styled.Text`
  margin-top: 46px;
  font-size: 14px;

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const CheckboxArea = styled.View`
  margin-top: 16px;
  flex-direction: row;
`;

export const QuantityInput = styled.TextInput`
  height: 56px;
  width: 102px;
  padding: 12px 16px;
  margin-top: 8px;

  border-radius: 12px;
  font-size: 14px;
  

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TEXT};
    background-color: ${theme.COLORS.TITLE};
    border: 1px solid ${theme.COLORS.STROKE};
  `}
`;

export const Total = styled.Text`  
  margin-top: 24px;
  align-self: flex-end;
  font-size: 16px;

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const Footer = styled.View`
  margin-top: 16px;
`;
