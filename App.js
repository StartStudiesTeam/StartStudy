import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/Routes';
import {StatusBar} from 'react-native';
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#B6B1B1" alignItems="center" justifyContent="center">
        <SignUp />
        <StatusBar style="auto" />
      </Box>
    </NativeBaseProvider>
  );
}
