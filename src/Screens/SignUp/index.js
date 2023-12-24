import React, { useState } from "react";
import { Input, Box, Text, Button, ScrollView, Link, Pressable } from "native-base";
import { View } from "native-base";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styleSignUp from "./style";

export default function SignUp() {
  const [isPassoword, setIsPassoword] = useState(true)

  const {navigate, goBack} = useNavigation();

  async function irParaTelas() {
  navigate('ConfirmEmail');
  }



  return (
    <Box flex={1} bg="#B6B1B1" alignItems="center" justifyContent="center">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styleSignUp.scrollContainer}>

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
            secureTextEntry={isPassoword}
            placeholder="Create your security Password "
          />

          <Pressable style={styleSignUp.iconEye} onPress={() => setIsPassoword(!isPassoword)}>
            {isPassoword == true ?
                        <Icon name="eye-slash" size={25} color="#000"  />
                        :
                        <Icon name="eye" size={25} color="#000" />
            }
          </Pressable>

          <Box style={styleSignUp.linkSignIn}>
            <Link href="#"><Text style={styleSignUp.linkSignIn} >Já tem conta, fazer login?</Text></Link>
          </Box>
        </Box>

        <Box >
          <Button 
        onPress={irParaTelas}
        
        style={styleSignUp.button}>SIGN UP</Button>
        </Box>

      </ScrollView>
    </Box>
  );
}
