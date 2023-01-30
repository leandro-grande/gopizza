import { createContext, ReactNode, useContext, useState } from "react";
import { OrderData } from "../@types/navigation";

type OrderProviderProps = {
  children: ReactNode;
}

type OrderContextData = {
  addToOrderCart: (order: OrderData) => void;
  removeOrderItem: (order: OrderData) => void;
  cleanOrderCart: () => void;
  orderCart: OrderData[];
}

const OrderContext = createContext({} as OrderContextData);

export const OrderContextProvider = ({ children }: OrderProviderProps) => {
  const [orderCart, setOrderCart] = useState<OrderData[]>([]);

  const addToOrderCart = (order: OrderData) => {
    setOrderCart(value => [...value, order]);
  }

  const removeOrderItem = (order: OrderData) => {
    const orders = orderCart.filter(item => item.name !== order.name);

    setOrderCart(orders);
  }

  const cleanOrderCart = () => {
    setOrderCart([]);
  }

  return (
    <OrderContext.Provider value={{ addToOrderCart, removeOrderItem, cleanOrderCart, orderCart }}>
      {children}
    </OrderContext.Provider>
  )
}

export const useOrder = () => {
  const context = useContext(OrderContext);

  return context;
}