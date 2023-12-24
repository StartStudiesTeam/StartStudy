import React from 'react';
import { Input, Box, Text, Button } from "native-base";
import { useNavigation } from '@react-navigation/native';
import styleConfirmEmail from "./styles";


export default function ConfirmEmail() {

  const {navigate, goBack} = useNavigation();

  async function irParaTelas() {
  navigate('SignUp');
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
          <Text style={styleConfirmEmail.linkSignIn}>Already have an account, log in?</Text>
        </Box>
      </Box>

      <Box style={styleConfirmEmail.botao}>
        <Button 
        onPress={irParaTelas}
        style={styleConfirmEmail.button}>SEND</Button>
      </Box>

    </Box>
  );
}
