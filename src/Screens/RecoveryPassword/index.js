import React, {useState} from 'react';
import { Input, Box, Text, Button,Link, Spinner,Pressable,FormControl} from "native-base";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Snackbar from 'react-native-snackbar';
import styleRecoveryPassword from "./styles";

export default function ConfirmEmail() {

  const {navigate, goBack} = useNavigation();
  const [loading, setIsLoanding] = useState(false);
  const [isPassword, setIsPassword] = useState(true)

  async function goToSignIn() {
    setIsLoanding(true),
    setTimeout(( )=>{
      navigate('SignIn');
      setIsLoanding(false);
    },2000)
    Snackbar.show({
        text: `Senha alterada com sucesso!`,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#14cf43',
        textColor: '#fff',
      });
  }
  
  async function goToSignUp() {
  navigate('SignUp');
  }

  return (
    <Box style={styleRecoveryPassword.contarinerP}> 
      <Box style={styleRecoveryPassword.boxImage}></Box>

    <Box style={{marginLeft:16,marginRight:16}}>
      <Text style={styleRecoveryPassword.labelInput}>New Password</Text>


    <Box style={styleRecoveryPassword.container}>
    <FormControl>
        <Input
            style={styleRecoveryPassword.input}
            variant="filled"
            placeholder="Type your new password"
            secureTextEntry={isPassword}
            InputLeftElement={<Icon style={{marginLeft:17}}name="lock" size={20} color="#ccc"/>}
            InputRightElement={<Pressable onPress={() => setIsPassword(!isPassword)}>
            {isPassword == true ?
            <Icon style={{marginRight:14}} name="eye-slash" size={20} color="#000" />
            :
            <Icon style={{marginRight:14}} name="eye" size={20} color="#ccc" />
            }
        </Pressable>}
        />
        </FormControl>
    </Box>

    <Link style={styleRecoveryPassword.linkSignIn} 
    href="#" onPress={() => goToSignUp()}> 
    Return and sign in?</Link>
    </Box>

      <Box style={styleRecoveryPassword.boxBotao}>
        <Button 
        onPress={goToSignIn}
        style={styleRecoveryPassword.button}>
        {loading ? (
          <Spinner color={'cyan.500'} />
        ) : (
          <Text style={styleRecoveryPassword.textBotao}>SAVE</Text>
        )}
        </Button>
      </Box>

    </Box>
  );
}
