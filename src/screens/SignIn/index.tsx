import { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import heroImg from "../../assets/hero.png"
import { useTheme } from "styled-components/native"
import { Button as ButtonAction } from "../../components/Button";

import {  Container, 
          Footer, 
          Button, 
          ButtonText, 
          Form, 
          Input, 
          PizzaImage, 
          Title, 
          ButtonArea
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/useAuth";


export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, isLogging, forgotPassword } = useAuth();
  const theme = useTheme();
  const navigation = useNavigation();

  const handleSignIn = () => {
    signIn(email, password);
  }

  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
        <PizzaImage source={heroImg} resizeMode="contain" />

        <Form>
          <Title>Login</Title>

          <Input 
            placeholder="E-mail"
            placeholderTextColor={theme.COLORS.BACKGROUND}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setEmail}
          />

          <Input 
            placeholder="Senha"
            placeholderTextColor={theme.COLORS.BACKGROUND}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={setPassword}
          />

          <ButtonArea>
            <Button 
              activeOpacity={0.7}
              onPress={() => navigation.navigate('signup')}
            >
              <ButtonText>
                Novo Usuário
              </ButtonText>
            </Button>

            <Button 
              activeOpacity={0.7}
              onPress={() => forgotPassword(email)}
            >
              <ButtonText>
                Esqueci minha senha
              </ButtonText>
            </Button>
          </ButtonArea>

          <Footer>
            <ButtonAction 
              type="primary" 
              title="Entrar"
              isLoading={isLogging}
              onPress={handleSignIn}
            />
          </Footer>
          
        </Form>
        </KeyboardAvoidingView>
      </Container>

  )
}