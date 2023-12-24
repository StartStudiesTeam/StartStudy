import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/Routes';
import {StatusBar} from 'react-native';
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
        <StatusBar backgroundColor="#131313" />
        <Routes />
    </NavigationContainer>
    </NativeBaseProvider>
  );
}
