import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { Container } from "./styles"
import { TouchableOpacityProps } from "react-native";

export const BackButton = ({ ...rest }: TouchableOpacityProps) => {
  const { COLORS } = useTheme();

  return (
    <Container activeOpacity={0.6} {...rest}>
      <Feather name="chevron-left" color={COLORS.BACKGROUND} size={16} />
    </Container>
  )
}