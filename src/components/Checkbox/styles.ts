import styled, { css } from "styled-components/native";

type Props = {
  selected: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  flex: 1;
  height: 82px;
  margin-right: 8px;

  border: 1px solid ${({theme, selected}) => selected ?
    theme.COLORS.SUCCESS_900 : theme.COLORS.SHAPE  };
  border-radius: 8px;  
  background-color: ${({theme}) => theme.COLORS.TITLE};
  padding: 14px 12px;
`;

export const Check = styled.View`
  height: 20px;
  width: 20px;
  background-color: ${({theme}) => theme.COLORS.TITLE};
  border: 1px solid ${({theme}) => theme.COLORS.SECONDARY_900};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const CheckSelected = styled.View<Props>`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background-color: ${({theme, selected}) => selected ? theme.COLORS.SUCCESS_900 : 'transparent'};
`;

export const Title = styled.Text`
  margin-top: 16px;
  font-size: 14px;

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TITLE};
  `}
`;