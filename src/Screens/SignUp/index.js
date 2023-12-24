import React from "react";
import { Input, Box, Text, Button, TouchableOpacity } from "native-base";
import { View } from "native-base";
import { useNavigation } from '@react-navigation/native';
import styleSignUp from "./style";

export default function SignUp() {

  const {navigate, goBack} = useNavigation();

  async function irParaTelas() {
  navigate('ConfirmEmail');
  }



  return (
    <Box flex={1} bg="#B6B1B1" alignItems="center" justifyContent="center">
      <Box style={styleSignUp.container}>
        <Text style={styleSignUp.labelInput}>Name</Text>
        <Input
          style={styleSignUp.input}
          variant="filled"
          placeholder="Type your Name"
        />

        <Text style={styleSignUp.labelInput}>Nick Name</Text>
        <Input
          style={styleSignUp.input}
          variant="filled"
          placeholder="Create a Nickname"
        />

        <Text style={styleSignUp.labelInput}>Email</Text>
        <Input
          style={styleSignUp.input}
          variant="filled"
          placeholder="Type your email"
        />

        <Text style={styleSignUp.labelInput}>Phone Number</Text>
        <Input
          style={styleSignUp.input}
          variant="filled"
          placeholder="Type your phone number"
        />

        <Text style={styleSignUp.labelInput}>Password</Text>
        <Input
          style={styleSignUp.input}
          variant="filled"
          secureTextEntry={true}
          placeholder="Create your security Password "
        />

        

        <Box style={styleSignUp.linkSignIn}>
          <Text style={styleSignUp.linkSignIn}>Já tem conta, fazer login?</Text>
        </Box>
      </Box>

      <Box >
        <Button 
        onPress={irParaTelas}
        
        style={styleSignUp.button}>SIGN UP</Button>
      </Box>
    </Box>
  );
}
