import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useAuth } from '../../contexts/useAuth';

import { ItemSeparator } from '../../components/ItemSeparator';
import { OrderCard, OrderProps } from '../../components/OrderCard';
import { Container, Header, Title } from './styles';
import { Loading } from '../../components/Loading';

export function Orders() {
  const [orders, setOrders] = useState<OrderProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();

  function handlePizzaDelivered(id: string) {
    Alert.alert('Pedido', 'Confirmar que a pizza foi entregue?', [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => {
          firestore().collection('orders').doc(id).update({
            status: 'Entregue'
          });
        }
      }
    ]);
  }

  useEffect(() => {
    setIsLoading(true);

    const subscribe = firestore()
      .collection('orders')
      .orderBy('createdAt')
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as OrderProps[];

        setOrders(data);
        console.log(data[0].order_item);
      });
      
      setIsLoading(false);

    return () => subscribe();
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <Header>
        <Title>Pedidos feitos</Title>
      </Header>
      
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <OrderCard
            index={index}
            data={item}
            status={item.status}
            disabled={item.status === 'Entregue'}
            onPress={() => handlePizzaDelivered(item.id)}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ItemSeparator />}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 125 }}
      />
    </Container>
  )
}
