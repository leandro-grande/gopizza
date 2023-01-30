import { KeyboardAvoidingView } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  height: 120px;
  padding: ${getStatusBarHeight()}px 24px 0;
  background-color: ${({theme}) => theme.COLORS.PRIMARY_800};
  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  flex: 1;
  font-size: 24px;
  text-align: center;

  ${({theme}) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TITLE};
  `}
`;

export const DeleteButton = styled.TouchableOpacity``;

export const DeleteButtonText = styled.Text`
  font-size: 14px;

  ${({theme}) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const ScrollContain = styled.ScrollView`
  padding: 0 24px;
`;

export const UploadImageArea = styled.View`
  margin-top: 24px;
  padding: 0 16px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const NoneImageView = styled.View`
  height: 160px;
  width: 160px;
  border-radius: 90px;

  background-color: ${({theme}) => theme.COLORS.TITLE};
  border: 1px dashed ${({theme}) => theme.COLORS.SECONDARY_900};

  align-items: center;
  justify-content: center;
`;

export const ImageView = styled.Image`
  height: 160px;
  width: 160px;
  border-radius: 90px;
  align-items: center;
  justify-content: center;
`;

export const NoneImageText = styled.Text`
    text-align: center;
    font-size: 14px;

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const LoadImageButton = styled.TouchableOpacity`
  height: 56px;
  padding: 16px;
  background-color: ${({theme}) => theme.COLORS.PRIMARY_800};
  border-radius: 12px;
  
  align-items: center;
  justify-content: center;
`;

export const LoadImageText = styled.Text`
  font-size: 14px;

  ${({theme}) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const Form = styled.View`
  margin-top: 20px;
`;

export const Legend = styled.Text`
  margin-bottom: 10px;
  font-size: 14px;

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const Description = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DescriptionLegend = styled.Text`
  font-size: 14px;

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const MaxCaracteres = styled.Text`
  font-size: 12px;

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const Input = styled.TextInput`
  width: 100%;
  margin-bottom: 16px;
  padding: 12px 16px;
  background-color: ${({theme}) => theme.COLORS.TITLE};
  border: 1px solid ${({theme}) => theme.COLORS.STROKE};
  border-radius: 12px;
  font-size: 14px;

  ${({theme}) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const Footer = styled.View`
  margin-top: 24px;
  margin-bottom: 8px;
`;

