import React, {useRef, useState} from 'react';
import { Input, Box, Text, Button,Link, Spinner, useToast} from "native-base";
import { useNavigation } from '@react-navigation/native';
import styleCodeConfirm from "./styles";
import api from "../../Services/api";


export default function ConfirmEmail() {

  const {navigate, goBack} = useNavigation();
  const [loading, setIsLoanding] = useState(false);
  const [inputValues, setInputValue] = useState(["", "", "", "", "", ""]);
  const toast = useToast()

  const submitCode = async () => {
    try {
      setIsLoanding(true)
      const response = await api.get('CodeConfirm', {
        token
      });
      toast.show({
        description: `Codigo Confirmado`
      })
      
      const apiToken = response.token;
      for (let index = 0; index < apiToken.length; index++) {
        const currentChar = apiToken.charAt(index);
        setInputValue((prevInputValues) => {
          const newInputValues = [...prevInputValues];
          newInputValues[index] = currentChar;
          return newInputValues;
        });
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      setTimeout(( )=>{
        setIsLoanding(false);
        navigate('HomePage');
      },2000)
    } catch (error) {
      toast.show({
        description: `${error.message}`
      })
      setIsLoanding(false);
    }
  };

  async function goToSignUp() {
  navigate('SignUp');
  }

  let inputComponents = [];
  for (let index = 0; index < inputValues.length; index++) {
  inputComponents.push(
    <Input
      key={index}
      style={styleCodeConfirm.input}
      variant="filled"
      placeholder="|"
      type='password'
      keyboardType='default'
      maxLength={1}
      autoFocus={index === 0}
      value={inputValues[index[0]]}
      onChangeText={(text) =>  {console.log(text);}}
    />
  );
}

  return (
    <Box style={styleCodeConfirm.contarinerP}> 
      <Box style={styleCodeConfirm.boxImage}></Box>

    <Box style={{marginLeft:16,marginRight:16}}>
      <Text style={styleCodeConfirm.labelInput}>Code</Text>
  
      <Box style={styleCodeConfirm.container}>

      <>{inputComponents}</>
        {/* <Input
          
          style={styleCodeConfirm.input}
          variant="filled"
          placeholder="|"
          type='password'
          keyboardType='numeric'
          maxLength={1}
          autoFocus={index === 0}
          onChangeText={(text)=>setInputValue(index,text)}
        />
       <Input

          style={styleCodeConfirm.input}
          variant="filled"
          placeholder="|"
          type='password'
          keyboardType='numeric'
          maxLength={1}
          autoFocus={index === 1}
          onChangeText={(text)=>setInputValue(index,text)}
        />
       <Input

          style={styleCodeConfirm.input}
          variant="filled"
          placeholder="|"
          type='password'
          maxLength={1}
          keyboardType='numeric'
          autoFocus={index === 2}
          onChangeText={(text)=>setInputValue(index,text)}
        />
       <Input

          style={styleCodeConfirm.input}
          variant="filled"
          placeholder="|"
          type='password'
          keyboardType='numeric'
          maxLength={1}
          autoFocus={index === 3}
          onChangeText={(text)=>setInputValue(index,text)}
        />
        <Input

          style={styleCodeConfirm.input}
          variant="filled"
          placeholder="|"
          type='password'
          keyboardType='numeric'
          maxLength={1}
          autoFocus={index === 4}
          onChangeText={(text)=>setInputValue(index,text)}
        />
       <Input

          style={styleCodeConfirm.input}
          variant="filled"
          placeholder="|"
          type='password'
          keyboardType='numeric'
          maxLength={1}
          autoFocus={index === 5}
          onChangeText={(text)=>setInputValue(index,text)}
        /> */}
    </Box>
        <Link style={styleCodeConfirm.linkSignIn} onPress={() => goToSignUp()}> 
        Don't have an account? Register!</Link>
      </Box>

      <Box style={styleCodeConfirm.boxBotao}>
        <Button 
        onPress={submitCode}
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
