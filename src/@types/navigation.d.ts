import { Pizza } from "../screens/Home";

export type OrderData = {
  image: string,
  name: string,
  qtd: string,
  size: string;
  price: number,
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      signin: undefined;
      signup: undefined;
      home: undefined;
      product: Pizza | undefined;
      order: Pizza;
      cart: undefined;
      orders: undefined;
    }
  }
}