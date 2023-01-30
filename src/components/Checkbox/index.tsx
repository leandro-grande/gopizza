import { TouchableOpacityProps } from "react-native"
import { Check, CheckSelected, Container, Title } from "./styles"

type CheckboxProps = TouchableOpacityProps & {
  selected?: boolean;
  title: string;
}

export const Checkbox = ({ selected = false, title, ...rest }: CheckboxProps) => {
  return (
    <Container
      activeOpacity={0.7} 
      selected={selected} 
      {...rest}
    >
      <Check>
        <CheckSelected selected={selected} />
      </Check>

      <Title>{title}</Title>
    </Container>
  )
}