import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MenuTabBottomNavigator from './src/Components/MenuTabBottomNavigator';
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic
} from "@expo-google-fonts/ubuntu";
import AppLoading from "expo-app-loading";
import SplashScreen from 'expo-splash-screen';

import Routes from './src/Routes';

export default function App() {
  const [isFontLoaded, error] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  });

  if (!isFontLoaded) {
    return <AppLoading />;
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
