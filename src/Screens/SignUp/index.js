import React, { useState } from "react";
import { Input, Box, Text, Button, ScrollView, Link, Pressable, FormControl } from "native-base";
import { View } from "native-base";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styleSignUp from "./style";

export default function SignUp() {
  const [isPassword, setIsPassword] = useState(true)

  const {navigate, goBack} = useNavigation();

  async function irParaTelas() {
  navigate('ConfirmEmail');
  }



  return (
    <Box flex={1} bg="#B6B1B1" alignItems="center" justifyContent="center">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styleSignUp.scrollContainer}>

        <Box style={styleSignUp.container}>

        <FormControl>
        <FormControl.Label>Name</FormControl.Label>
        <Input
        backgroundColor="#fff"
        placeholder="Type your name"
        InputLeftElement={<Icon name="user" size={20} color="#ccc"  style={{ marginLeft: 12, marginRight: 12 }} />}
        style={styleSignUp.input} />
        <FormControl.ErrorMessage>
        </FormControl.ErrorMessage>
      </FormControl>

      <FormControl>
        <FormControl.Label>Nick Name</FormControl.Label>
        <Input
        backgroundColor="#fff"
        placeholder="Create a nickname"
        InputLeftElement={<Icon name="user-circle" size={20} color="#ccc"  style={{ marginLeft: 12, marginRight: 12 }} />}
        style={styleSignUp.input} />
        <FormControl.ErrorMessage>
        </FormControl.ErrorMessage>
      </FormControl>

      <FormControl>
        <FormControl.Label>Email</FormControl.Label>
        <Input
        backgroundColor="#fff"
        placeholder="Type your email"
        InputLeftElement={<Icon name="at" size={20} color="#ccc"  style={{ marginLeft: 12, marginRight: 12 }} />}
        style={styleSignUp.input} />
        <FormControl.ErrorMessage>
        </FormControl.ErrorMessage>
      </FormControl>

      <FormControl>
        <FormControl.Label>Phone number</FormControl.Label>
        <Input
        backgroundColor="#fff"
        placeholder="Typer your phone number"
        InputLeftElement={<Icon name="phone" size={20} color="#ccc"  style={{ marginLeft: 12, marginRight: 12 }} />}
        style={styleSignUp.input} />
        <FormControl.ErrorMessage>
        </FormControl.ErrorMessage>
      </FormControl>

      <FormControl>
        <FormControl.Label>Password</FormControl.Label>
        <Input
        backgroundColor="#fff"
        placeholder="Create your security password"
        InputLeftElement={<Icon name="lock" size={20} color="#ccc"  style={{ marginLeft: 12, marginRight: 12 }} />}
        style={styleSignUp.input} 
        secureTextEntry={isPassword}/>
        <FormControl.ErrorMessage>
        </FormControl.ErrorMessage>
      </FormControl>
          <Pressable style={styleSignUp.iconEye} onPress={() => setIsPassword(!isPassword)}>
            {isPassword == true ?
                        <Icon name="eye-slash" size={25} color="#ccc"  />
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
