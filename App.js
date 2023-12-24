import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text, Box } from "native-base";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar />
        <Routes/>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}