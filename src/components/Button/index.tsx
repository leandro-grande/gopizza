import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { Loading } from "../Loading";
import { Container, Title } from "./styles"

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type: 'primary' | 'secondary';
  isLoading?: boolean;
}

export const Button = ({ title, type, isLoading = false, ...rest }: ButtonProps) => {
  return (
    <Container type={type} activeOpacity={0.8} {...rest}>
      <Title>
        { isLoading ? <Loading /> : title }
      </Title>
    </Container>
  )
}