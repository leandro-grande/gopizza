import { BorderlessButton } from "react-native-gesture-handler";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";
import { Button } from "../../components/Button";


export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  width: 100%;  
  padding: ${getStatusBarHeight() + 24}px 24px 58px;
  background-color: ${({theme}) => theme.COLORS.PRIMARY_800};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`;

export const Greetings = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Emoji = styled.Text`
  font-size: 24px;
  margin-right: 12px;
`;

export const GreetingTitle = styled.Text`
  font-size: 20px;

  ${({theme}) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TITLE};

  `}
`;

export const LogoutButton = styled(BorderlessButton)`
`;

export const LogoutIcon = styled.View``;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const MenuHeader = styled.View`
  margin: 24px 0;
  flex-direction: row;
  justify-content: space-between;

  padding-bottom: 22px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.COLORS.SHAPE}
`;


export const Title = styled.Text`
  font-size: 20px;

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TITLE};
  `}
`;

export const Count = styled.Text`
  font-size: 14px;

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const NewProductButton = styled(Button)`
  margin-bottom: ${getBottomSpace() + 24}px;
`;