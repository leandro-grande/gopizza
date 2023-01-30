import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { LinearGradient } from "expo-linear-gradient";



export const Container = styled(LinearGradient).attrs(({theme}) => ({
  colors: theme.COLORS.GRADIENT,
  start: {x: 0, y: 1},
  end: {x: 0.5, y: 0.5}
}))`
  padding: 0 32px;
  flex: 1;
`;

export const PizzaImage = styled.Image`
  margin-top: ${getStatusBarHeight() + 54}px;
  width: 100%;
  height: 384px;
`;

export const Form = styled.View``;

export const Title = styled.Text`
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 32px;

${({theme}) => css`
  color: ${theme.COLORS.TITLE};
  font-family: ${theme.FONTS.TITLE};
`}
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 56px;
  background-color: transparent;
  padding: 0 20px;
  margin-bottom: 16px;

  border-width: 1px;
  border-color: ${({theme}) => theme.COLORS.PRIMARY_100};
  border-radius: 12px;

  color: ${({theme}) => theme.COLORS.TITLE};
  font-family: ${({theme}) => theme.FONTS.TEXT};
  font-size: 14px;
`;

export const ButtonArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  align-self: flex-end;
  
`;

export const ButtonText = styled.Text`
  font-size: 14px;

  ${({theme}) => css`
      color: ${theme.COLORS.TITLE};
      font-family: ${theme.FONTS.TEXT};
    `}
`;

export const Footer = styled.View`
  justify-self: flex-end;
  padding: 16px 0;
`;
