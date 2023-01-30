import { Feather } from "@expo/vector-icons";
import {  TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Pizza } from "../../screens/Home";

import { Container, Content, Description, Header, ProductImage, Title } from "./styles"

type ProductItemProps = TouchableOpacityProps & {
  data: Pizza;
}

export const ProductItem = ({ data, ...rest }: ProductItemProps) => {

  const theme = useTheme();

  return (
    <Container activeOpacity={0.5} {...rest}>
      
      <ProductImage 
        source={{ uri: data.photo_url }} 
        resizeMode='contain' 
      />

      <Content>
        <Header> 
          <Title>{data.name}</Title>
          <Feather name="chevron-right" color={theme.COLORS.SECONDARY_900} size={16} />
        </Header> 

        <Description>
          {data.description}
        </Description>
      </Content>
    </Container>
  )
}