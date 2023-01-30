import { useNavigation } from "@react-navigation/native"
import { Alert, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import firestore from "@react-native-firebase/firestore";
import { useTheme } from "styled-components/native";

import { BackButton } from "../../components/BackButton"
import { Button } from "../../components/Button";
import { OrderItem } from "../../components/OrderItem";
import { useOrder } from "../../contexts/useOrder";

import { AddButton, Container, EmptyCart, EmptyCartText, Footer, Header, Title, Total } from "./styles"


export const Cart = () => {
  const { orderCart, cleanOrderCart } = useOrder();

  const theme = useTheme();

  const totalPrice = orderCart.reduce((acc, order) => {
    acc = Number(order.qtd) * order.price

    return acc;
  }, 0);
  
  const navigation = useNavigation();

  const handleOrder = async() => {
    firestore()
    .collection('orders')
    .add({
      order_item: orderCart,
      status: 'Preparando',
      createdAt: new Date
    })
    .then(() => {
      cleanOrderCart();
      Alert.alert('Pedido', 'Seu pedido está em preparação')
    })

  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.navigate('home')} />
        <Title>Pedido</Title>
        <AddButton onPress={() => navigation.navigate('home')}>
          <Feather name="plus" size={24} color={theme.COLORS.TITLE} />
        </AddButton>
      </Header>
      
      { orderCart.length > 0 ? (
        <FlatList
          data={orderCart}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <OrderItem data={item} />
        )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 40,
            paddingHorizontal: 24,
        }}
            />
      ) : (
        <EmptyCart>
          <EmptyCartText>
            Não há produtos no carrinho
          </EmptyCartText>
        </EmptyCart>
        ) 
      }
      
      { orderCart.length > 0 &&
         <>
          <Total>Total: R$ {totalPrice.toFixed(2)}</Total>
          <Footer>
            <Button 
              onPress={handleOrder}
              title="Fechar pedido" 
              type="secondary" 
            />
          </Footer>
        </>
      }
    </Container>
  )
}