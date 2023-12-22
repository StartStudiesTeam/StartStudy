import { StatusBar } from "expo-status-bar";
import React from "react";
import { NativeBaseProvider, Text, Box } from "native-base";
import SignUp from "./src/Screens/SignUp";

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