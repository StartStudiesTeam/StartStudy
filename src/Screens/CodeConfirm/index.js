import React, {useState} from 'react';
import {View} from 'react-native'
import { Input, Box, Text, Button,Link, Spinner} from "native-base";
import { useNavigation } from '@react-navigation/native';
import styleCodeConfirm from "./styles";


export default function ConfirmEmail() {

  const {navigate, goBack} = useNavigation();
  const [loading, setIsLoanding] = useState(false);

  async function goToSignIn() {
    setIsLoanding(true),
    setTimeout(( )=>{
    navigate('RecoveryPassword');
    setIsLoanding(false);
    },2000)
  }
  
  async function goToSignUp() {
  navigate('SignUp');
  }

  return (
    <Box style={styleCodeConfirm.contarinerP}> 
      <Box style={styleCodeConfirm.boxImage}></Box>

    <Box style={{marginLeft:16,marginRight:16}}>
      <Text style={styleCodeConfirm.labelInput}>Code</Text>
  
      <Box style={styleCodeConfirm.container}>
        <Input
          style={styleCodeConfirm.input}
          variant="filled"
          placeholder="|"
          type='password'
          keyboardType='numeric'
        />
       <Input
          style={styleCodeConfirm.input}
          variant="filled"
          placeholder="|"
          type='password'
          keyboardType='numeric'
        />
       <Input
          style={styleCodeConfirm.input}
          variant="filled"
          placeholder="|"
          type='password'
          keyboardType='numeric'
        />
       <Input
          style={styleCodeConfirm.input}
          variant="filled"
          placeholder="|"
          type='password'
          keyboardType='numeric'
        />
        <Input
          style={styleCodeConfirm.input}
          variant="filled"
          placeholder="|"
          type='password'
          keyboardType='numeric'
        />
       <Input
          style={styleCodeConfirm.input}
          variant="filled"
          placeholder="|"
          type='password'
          keyboardType='numeric'
        />
    </Box>
        <Link style={styleCodeConfirm.linkSignIn} href="#" onPress={() => goToSignUp()}> 
        Don't have an account? Register!</Link>
      </Box>

      <Box style={styleCodeConfirm.boxBotao}>
        <Button 
        onPress={goToSignIn}
        style={styleCodeConfirm.button}>
        {loading ? (
          <Spinner color={'cyan.500'} />
        ) : (
          <Text style={styleCodeConfirm.textBotao}>SIGN IN</Text>
        )}
        </Button>
      </Box>

    </Box>
  );
}
