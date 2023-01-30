import styled, { css } from "styled-components/native";


export const Container = styled.View`
  margin-top: -22px;
  height: 48px;
  border-radius: 16px;
  
  flex-direction: row;
  justify-content: space-between;
`;

export const SearchBar = styled.View`
  flex: 1;
  height: 48px;
  margin-right: 12px;

  background-color: ${({theme}) => theme.COLORS.TITLE};
  border-radius: 16px;

  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  padding: 16px;
  font-size: 14px;

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TEXT};
  `}
  
`;

export const ClearButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: ${({theme}) => theme.COLORS.SUCCESS_900};
  align-items: center;
  justify-content: center;
`;

