
import { Container, Title } from "./styles"

type TabMenuProps = {
  color: string;
  title: string;
}

export const TabMenu = ({ color, title }: TabMenuProps) => {
  return (
    <Container>
      <Title color={color}>{title}</Title>
    </Container>
  )
}