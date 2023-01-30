import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {  TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { OrderData } from "../../@types/navigation";
import { useOrder } from "../../contexts/useOrder";

import { Container, Content, ProductImage, RemoveButton, Text, Title } from "./styles"

type ProductItemProps =  {
  data: OrderData;
}

export const OrderItem = ({ data, }: ProductItemProps) => {
  const { removeOrderItem, orderCart } = useOrder();

  const navigation = useNavigation();
  const theme = useTheme();

  const handleRemoveOrderItem = () => {
    removeOrderItem(data);
  }

  return (
    <Container>
      <ProductImage 
        source={{ uri: data.image }} 
        resizeMode='contain' 
      />

      <Content>
        <Title>{data.name}</Title>
        <Text>Quantidade: {data.qtd}</Text>
        <Text>Tamanho: {data.size}</Text>
        <Text>Preço: R$ {data.price.toFixed(2)}</Text>
      </Content>

      <RemoveButton onPress={handleRemoveOrderItem}>
        <Feather name="trash-2" color={theme.COLORS.SECONDARY_500} size={24} />
      </RemoveButton>

    </Container>
  )
}