import { useCallback, useState } from "react";
import { Alert, KeyboardAvoidingView, Platform } from "react-native";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native"

import { OrderData } from "../../@types/navigation";

import { BackButton } from "../../components/BackButton"
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { Pizza } from "../Home";

import { useOrder } from "../../contexts/useOrder";

import {  CheckboxArea, 
          Contain, 
          Container, 
          Footer, 
          Header, 
          Legend, 
          ProductImg, 
          QuantityInput, 
          Title, 
          Total} 
        from "./styles"

        
export const Order = () => {
  const [sizeSelected, setSizeSelected] = useState('')
  const [pizzaQtd , setPizzaQtd] = useState('0');

  const { addToOrderCart, orderCart } = useOrder();
  const route = useRoute();
  const pizzaData = route.params as Pizza;

  const navigation = useNavigation();

  const totalCount = Number(pizzaQtd) * (Number(pizzaData?.prices_sizes[sizeSelected]) | 0);

  const handleOrder = () => {

    if (totalCount == 0) {
      return Alert.alert('Ops', 'Selecione um tamanho e quantidade.')
    }

    const pizzaAlreadyExists = orderCart.findIndex(order => order.name === pizzaData.name);
    
    if (pizzaAlreadyExists !== -1 ) {
      return Alert.alert('Ops', 'Está pizza já existe no carrinho')
    }

    const data: OrderData = {
      image: pizzaData.photo_url,
      name: pizzaData.name,
      qtd: pizzaQtd,
      size: sizeSelected,
      price: totalCount
    }

    addToOrderCart(data);

    navigation.navigate('cart');
  }

  useFocusEffect( useCallback (() => {
    setPizzaQtd('');
    setSizeSelected('');
  }, []));

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position' }  >
      <Container>
        <Header>
            <BackButton onPress={() => navigation.goBack()}/>
        </Header>

        <ProductImg 
          source={{ uri: pizzaData?.photo_url }} 
          resizeMode="contain" 
        />

        <Contain>
          <Title>{pizzaData?.name}</Title>
          
          <Legend>Selecione um tamanho</Legend>
          <CheckboxArea>
            <Checkbox 
              title="Pequena"
              selected={sizeSelected === 'p'}
              onPress={() => setSizeSelected('p')} 
            />
            <Checkbox 
              title="Média" 
              selected={sizeSelected === 'm'}
              onPress={() => setSizeSelected('m')} 
            />
            <Checkbox 
              title="Grande" 
              selected={sizeSelected === 'g'}
              onPress={() => setSizeSelected('g')} 
            />
          </CheckboxArea>

          <Legend>Quantidade</Legend>
          <QuantityInput 
            textAlign="center"
            keyboardType="numeric"
            onChangeText={setPizzaQtd}
          />

          <Total>Total: R$ {totalCount}</Total>

          {  }
          <Footer>
            <Button 
              title="Adicionar ao pedido" 
              type="secondary" 
              onPress={handleOrder}
            />
          </Footer>
        </Contain>
      </Container>
    </KeyboardAvoidingView>
  )
}