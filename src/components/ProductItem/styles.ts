import styled, { css } from "styled-components/native";


export const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductImage = styled.Image`
  height: 104px;
  width: 104px;
  border-radius: 52px;
  margin-right: 16px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.COLORS.SHAPE};
`;

export const Title = styled.Text`
  font-size: 20px;

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TITLE};
  `}
`;

export const Description = styled.Text`
  width: 80%;
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_500};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

