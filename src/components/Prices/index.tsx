import { useState } from "react";
import { TextInputProps } from "react-native";
import { Container, InputPrice, PlaceHolder, Price, PriceLegend } from "./styles"

type PricesProps = TextInputProps & {
  size: string;
}

export const Prices = ({ size, ...rest }: PricesProps) => {

  return (
    <Container>
      <PlaceHolder>
        <PriceLegend>{size}</PriceLegend>
      </PlaceHolder>

      <Price>
        <PlaceHolder>
          <PriceLegend>R$</PriceLegend>
        </PlaceHolder>
        <InputPrice
          keyboardType="numeric" 
          {...rest}
        />
      </Price>
  </Container>
  )
}