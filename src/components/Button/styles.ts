import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";

type ButtonProps = {
  type: 'primary' | 'secondary';
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: 56px;
  border-radius: 16px;
  background-color: ${({theme, type}) => type === 'primary' ? theme.COLORS.PRIMARY_800 : theme.COLORS.SUCCESS_900 };
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 14px;

  ${({theme}) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.BUTTON_TEXT};
  `}
`;