import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import Routes from './src/Routes';
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
  Ubuntu_600SemiBold,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic
} from "@expo-google-fonts/ubuntu";
import AppLoading from "expo-app-loading";

export default function App() {

  const [isFontLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_600SemiBold,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,

  });

  if (!isFontLoaded) {
    <AppLoading />
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MenuTabBottomNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
