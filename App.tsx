import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect } from "react";
import { StatusBar } from "react-native";

import * as SplashScreen from "expo-splash-screen";
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";

import theme from "./src/theme"
import { Routes } from './src/routes';
import { ContextsProvider } from './src/contexts';

SplashScreen.preventAutoHideAsync();

const App = () => {

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
    Inter_500Medium
  })

  useEffect(() => {
    const loadFonts = async () => {
      if (fontsLoaded) {
        console.log('Fonts loaded');
        await SplashScreen.hideAsync();
      }
    }

    loadFonts();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      <ContextsProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <Routes />
        </GestureHandlerRootView>
      </ContextsProvider>
    </ThemeProvider>
  )
}

export default App;