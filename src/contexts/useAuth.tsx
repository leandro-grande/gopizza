import { createContext, ReactNode, useContext, useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";

type AuthProviderProps = {
  children: ReactNode;
}

type User = {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  isLogging: boolean;
  user: User | null;
}

const AuthContext = createContext({} as AuthContextData);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLogging, setIsLogging] = useState(false);


  const signIn = async (email: string, password: string) => {
    if (!email || !password) {
      return Alert.alert('Ops', 'Informe o e-mail e senha.')
    }

    setIsLogging(true);

    auth()
    .signInWithEmailAndPassword(email, password)
    .then((value) => {
      firestore()
      .collection('users')
      .doc(value.user.uid)
      .get()
      .then((profile) => {
        const { name, email, isAdmin } = profile.data() as User;

        if (profile.exists) {
          const userData = {
            id: value.user.uid,
            name,
            email,
            isAdmin,
          }

          setUser(userData)
        }
      })
    })
    .catch(() => {
      Alert.alert('Ops', 'Erro ao tentar fazer login, tente novamente.')
    })
    .finally(() => setIsLogging(false));
  }

  const signOut = async () => {
    await auth().signOut();
    setUser(null);
  }

  const forgotPassword = async (email: string) => {
    if (!email) {
      return Alert.alert('Ops', 'Informe o e-mail para redefinir a senha.')
    }

    auth()
    .sendPasswordResetEmail(email)
    .then(() => Alert.alert('Redefinir senha', 'Enviamos um link para seu email para redefinir sua senha.'))
    .catch(() => Alert.alert('Ops', 'Não foi possível enviar o e-mail para redefinir sua senha.'))
  }


  return (
    <AuthContext.Provider value={{ signIn, signOut, forgotPassword, user, isLogging }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}