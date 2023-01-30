import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  width: 100%;
  height: 120px;
  background-color: ${({theme}) => theme.COLORS.PRIMARY_800};
  flex-direction: row;
  padding: ${getStatusBarHeight() + 20}px 24px 16px;
  align-items: center;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 24px;

  ${({theme}) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TITLE};
  `}
`;

export const AddButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 12px;
  background-color: ${({theme}) => theme.COLORS.PRIMARY_900};
  align-items: center;
  justify-content: center;
`;

export const Total = styled.Text`
  align-self: flex-end;
  margin-right: 24px;
  margin-bottom: 32px;
  font-size: 20px;

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const Footer = styled.View`
  padding: 0 24px;
  margin-bottom: 24px;
`;

export const EmptyCart = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyCartText = styled.Text`
  font-size: 24px;

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TITLE};
  `}
`;