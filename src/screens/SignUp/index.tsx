import { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore";

import heroImg from "../../assets/hero.png"
import { useTheme } from "styled-components/native"
import { Button } from "../../components/Button";

import {  BackButton, Container, 
          Footer, 
          Form, 
          Input, 
          PizzaImage, 
          Title 
} from "./styles";
import { useNavigation } from "@react-navigation/native";


export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogging, setIsLogging] = useState(false);

  const theme = useTheme();
  const navigation = useNavigation();

  const handleSignUp = () => {
    if (!name || !email || !password) {
      return Alert.alert('Ops', 'Informe os campos Nome, Email e Password.')
    }

    setIsLogging(true);

    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(value => {
      firestore()
      .collection('users')
      .doc(value.user.uid)
      .set({
        id: value.user.uid,
        email,
        name,
        isAdmin: false,
      })
      .then(() => {
        navigation.navigate('signin')
      })
      .catch(() => {
        Alert.alert('Ops', 'Ocorreu um erro ao criar o usuário, tente novamente.')
      })
      .finally(() => setIsLogging(false))
    })

  }

  return (
      <Container>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>

        <BackButton onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" color={theme.COLORS.TITLE} size={24} />
        </BackButton>

        <PizzaImage source={heroImg} resizeMode="contain" />

        <Form>
          <Title>Cadastrar</Title>

          <Input 
            placeholder="Nome"
            placeholderTextColor={theme.COLORS.BACKGROUND}
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={setName}
          />

          <Input 
            placeholder="E-mail"
            placeholderTextColor={theme.COLORS.BACKGROUND}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
          />

          <Input 
            placeholder="Senha"
            placeholderTextColor={theme.COLORS.BACKGROUND}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={setPassword}
          />

          <Footer>
            <Button 
              type="primary" 
              title="Cadastrar"
              isLoading={isLogging}
              onPress={handleSignUp}
            />
          </Footer>
        </Form>
        </KeyboardAvoidingView>
      </Container>

  )
}