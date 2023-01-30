import { BorderlessButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  padding-bottom: 24px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.COLORS.SHAPE};
`;


export const ProductImage = styled.Image`
  height: 104px;
  width: 104px;
  border-radius: 52px;
  margin-right: 16px;
`;

export const Content = styled.View`
  margin-left: 24px;
`;

export const Title = styled.Text`
  font-size: 20px;

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TITLE};
  `}
`;

export const Text = styled.Text`
  font-size: 12px;
  margin-top: 3px;

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_500};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const RemoveButton = styled(BorderlessButton)`
  margin-left: auto;
  margin-right: 6px;
  padding: 2px;
`;