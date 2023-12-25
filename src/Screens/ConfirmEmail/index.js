import React from 'react';
import { Input, Box, Text, Button,Link } from "native-base";
import { useNavigation } from '@react-navigation/native';
import styleConfirmEmail from "./styles";


export default function ConfirmEmail() {

  const {navigate, goBack} = useNavigation();

  async function goToScreen() {
  navigate('CodeConfirm');
  }

  return (
    <Box flex={1} bg="#B6B1B1" alignItems="center" justifyContent="center"> 

      <Box style={styleConfirmEmail.boxImage}>
      </Box>

      <Box style={styleConfirmEmail.container}>
  
        <Text style={styleConfirmEmail.labelInput}>Email or Nickname</Text>
        
        <Input
          style={styleConfirmEmail.input}
          variant="filled"
          placeholder="@ Type your e-mail or nickname"
        />

        <Box style={styleConfirmEmail.linkSignIn}>
        <Link style={styleConfirmEmail.linkSignIn} href="#" onPress={() => goToSignUp()}> 
        Don't have an account? Register!</Link>
        </Box>
      </Box>

      <Box style={styleConfirmEmail.botao}>
        <Button 
        onPress={goToScreen}
        style={styleConfirmEmail.button}>SEND</Button>
      </Box>

    </Box>
  );
}
