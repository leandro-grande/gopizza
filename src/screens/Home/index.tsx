import { Feather } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import firestore from "@react-native-firebase/firestore";
import { useTheme } from "styled-components/native";


import { ProductItem } from "../../components/ProductItem";
import { Search } from "../../components/Search";
import { useAuth } from "../../contexts/useAuth";

import {  Container, 
          Emoji, 
          Greetings, 
          Header, 
          LogoutButton, 
          LogoutIcon, 
          GreetingTitle, 
          MenuHeader, 
          Title, 
          Count, 
          Content, 
          NewProductButton} 
        from "./styles"
import { Loading } from "../../components/Loading";
import { Keyboard, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";

export type Pizza = {
  id: string;
  name: string;
  name_insensitive: string;
  description: string;
  prices_sizes: {
    p: string;
    m: string;
    g: string;
  }
  photo_url: string;
  photo_path: string;
}

export const Home = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [searchPizza, setSearchPizza] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { signOut, user } = useAuth();

  const navigation = useNavigation();
  const theme = useTheme();

  const pizzaQtd = pizzas.length > 1 ? `${pizzas.length} pizzas` : `${pizzas.length} pizza`;


  const fetchPizzas = async (value: string) => {
    setIsLoading(true)

    const formattedValue = value.toLocaleLowerCase().trim();

    firestore()
    .collection('pizzas')
    .orderBy('name_insensitive')
    .startAt(formattedValue)
    .endAt(`${formattedValue}\uf8ff`)
    .get()
    .then((response) => {
      const data = response.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }) as Pizza[];

      setPizzas(data)
    })

    setIsLoading(false);
  }

  const handleSearchPizza = async () => {
    fetchPizzas(searchPizza);
    Keyboard.dismiss();
  }

  const handleClearSearch = async () => {
    setSearchPizza('');
    fetchPizzas('');
    Keyboard.dismiss();
  }

  const handleNavigation = (product: Pizza) => {
    const route = user?.isAdmin ? 'product' : 'order';
    navigation.navigate(route, product);
  }

  useFocusEffect( useCallback(() => {
    fetchPizzas('')
  }, []))

  return (
    <Container>
      <Header>
        <Greetings>
          <Emoji>😄</Emoji>
          <GreetingTitle>Olá, {user?.name}</GreetingTitle>
        </Greetings>
        
        <LogoutButton onPress={signOut}>
          <LogoutIcon>
            <Feather name="log-out" color={theme.COLORS.TITLE} size={24} />
          </LogoutIcon>
        </LogoutButton>
      </Header>
      
      <Content>
        <Search
          value={searchPizza}
          onChangeText={setSearchPizza} 
          onSearch={handleSearchPizza}
          onClearSearch={handleClearSearch} 
        />

        <MenuHeader>
          <Title>Cardápio</Title>
          <Count>{pizzaQtd}</Count>
        </MenuHeader>

        {isLoading ? (
          <Loading />
        ) : (
          <FlatList 
            
            data={pizzas}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <ProductItem 
                data={item} 
                onPress={() => handleNavigation(item)} 
              />
            )}
          />
        )}
        
        { user.isAdmin &&
          <NewProductButton 
            title="Cadastrar pizza" 
            type="primary"
            onPress={() => navigation.navigate('product')} 
          />
        }


      </Content>
    </Container>
  )
}