import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { OrderData } from '../../@types/navigation';

import pizzaImg from "../../assets/4queijos.png"

import {
  Container,
  Image,
  Name,
  Description,
  StatusContainer,
  StatusLabel,
  StatusTypesProps,
} from './styles';

export type OrderProps = {
  id: string;
  order_item: OrderData[]
  status: StatusTypesProps
}

type Props = TouchableOpacityProps & {
  index: number;
  data: OrderProps;
  status: StatusTypesProps;
}

export function OrderCard({ index, data, status, ...rest }: Props) {
  return (
    <Container index={index} {...rest}>
      <Image source={pizzaImg} />

      <Name>Pedido #{index}</Name>


        {data?.order_item.map(item => (
          <Description>
            {item.qtd} - {item.name}
          </Description>
        ))}


      <StatusContainer status={status}>
        <StatusLabel status={status}>{status}</StatusLabel>
      </StatusContainer>
    </Container>
  )
}