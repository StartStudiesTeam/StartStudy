import React, {useRef, useState} from 'react';
import { Image } from 'react-native';
import { Input, Box, Text, Button,Link, Spinner, useToast} from "native-base";
import { useNavigation } from '@react-navigation/native';
import styleCodeConfirm from "./styles";
import api from "../../Services/api";

export default function ConfirmEmail() {

  const {navigate, goBack} = useNavigation();
  const [loading, setIsLoanding] = useState(false);
  const toast = useToast()

  const data = []

  const submitCode = async () => {
    try {
      setIsLoanding(true)
      const token = data.join('')
      await api.post('/mailcheck',{
       token
      });
      toast.show({
        description: `Codigo confirmado`
      })
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
  for (let index = 0; index <= 5; index++) {
  inputComponents.push(
    <Input
      key={index}
      style={styleCodeConfirm.input}
      variant="filled"
      placeholder="|"
      keyboardType='default'
      maxLength={1}
      autoFocus={index === 0}
      onChangeText={(text) =>  {data[index] = text}}
    />
  );
}

  return (
    <Box style={styleCodeConfirm.contarinerP}> 
      
      <Image source={require('../../Assets/BrandTest2.png')}
      style={{width:89, resizeMode:'contain'}}/>

      <Box style={{marginLeft:16,marginRight:16}}>

      <Box style={styleCodeConfirm.boxTexts}>
   
        <Text style={styleCodeConfirm.labelInit}>Você é você mesmo?!</Text>
        <Text style={styleCodeConfirm.labelText}>
        Precisamos confirmar se você recebeu{'\n'} 
        o código no seu e-mail informado!
        </Text>
     
      </Box>



      <Text style={styleCodeConfirm.labelInput}>Code</Text>
  
      <Box style={styleCodeConfirm.container}>

      <>{inputComponents}</>

      </Box>

      <Link style={styleCodeConfirm.linkSignIn} onPress={() => goToSignUp()}> 
        Don't have an account? signup?</Link>
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
