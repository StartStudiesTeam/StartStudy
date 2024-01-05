import React, {useRef, useState} from 'react';
import {TextInput, View} from 'react-native'
import { Input, Box, Text, Button,Link, Spinner} from "native-base";
import { useNavigation } from '@react-navigation/native';
import styleCodeConfirm from "./styles";


export default function ConfirmEmail() {

  const {navigate, goBack} = useNavigation();
  const [loading, setIsLoanding] = useState(false);

  async function goToSignIn() {
    setIsLoanding(true),
    setTimeout(( )=>{
    navigate('SignIn');
    setIsLoanding(false);
    },2000)
  }
  
  async function goToSignUp() {
  navigate('SignUp');
  }

  const inputRefs = useRef<Array<Text>>>([])

  const handleChange = (text, index) => {
    if (text.length !== 0) {
      return inputRefs?.current[index + 1]?.focus()
      
    }
    return inputRefs?.current[index - 1]?.focus()
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
          maxLength={1}
          autoFocus={true}
        />
       <Input
          style={styleCodeConfirm.input}
          variant="filled"
          placeholder="|"
          type='password'
          keyboardType='numeric'
          maxLength={1}
        />
       <Input
          style={styleCodeConfirm.input}
          variant="filled"
          placeholder="|"
          type='password'
          maxLength={1}
          keyboardType='numeric'
          
        />
       <Input
          style={styleCodeConfirm.input}
          variant="filled"
          placeholder="|"
          type='password'
          keyboardType='numeric'
          maxLength={1}
        />
        <Input
          style={styleCodeConfirm.input}
          variant="filled"
          placeholder="|"
          type='password'
          keyboardType='numeric'
          maxLength={1}
        />
       <Input
          style={styleCodeConfirm.input}
          variant="filled"
          placeholder="|"
          type='password'
          keyboardType='numeric'
          maxLength={1}
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
