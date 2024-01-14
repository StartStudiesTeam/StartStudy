import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Input, Box, Text, Button, ScrollView, Link, Pressable, FormControl,Spinner } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../Services/api'
import * as yup from 'yup'
import { Formik } from "formik";
import styleSignUp from "./style";

export default function SignUp() {
  const [isPassword, setIsPassword] = useState(true)
  const { navigate, goBack } = useNavigation();
  const [loading, setIsLoanding] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setIsLoanding(true)
      const response = await api.post('SignUp', {
        name: values.name,
        nick_name: values.nick_name,
        email: values.email,
        password: values.password,
        phone_number: values.phone_number,
      });
      console.log('Resposta da API:', response);
      setTimeout(( )=>{
        setIsLoanding(false);
        navigate('SignIn');
      },2000)
      //return response; // Retornando os dados para onde a função foi chamada, se necessário.
    } catch (error) {
      console.error('Erro ao registrar usuário:', error.message);
      setIsLoanding(false);
    }
  };

  async function goToScreen() {
    navigate('SignIn');
    }

  return (
    <Box flex={1} bg="#B6B1B1" alignItems="center" justifyContent="center">
      <Formik
        initialValues={{ name: '', nick_name: '', email: '', phone_number: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={yup.object().shape({
          name: yup
            .string()
            .required('The name is mandatory'),
          nick_name: yup
            .string()
            .required('nick_name is required')
            .min(5, 'nick_name must have at least 5 characters')
            .max(15, 'nick_name must have a maximum of 15 characters'),
          email: yup
            .string()
            .email('Invalid email address format')
            .required('Email is required'),
          phone_number: yup
            .string()
            .min(11, 'The telephone number must have at least 11 digits')
            .required('A phone number is required'),
          password: yup
            .string()
            .min(8, 'Password should be at least 8 chars long.')
            .required('Password is required'),
        })}
      >
        {({ handleChange, handleSubmit, setFieldTouched, touched, isValid, errors, values }) => (

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styleSignUp.scrollContainer}>
            <Box style={styleSignUp.container}>
              <FormControl isInvalid={touched.name && !isValid}>
                <FormControl.Label>Name</FormControl.Label>
                <Input
                  value={values.name}
                  onChangeText={(text) => {
                    handleChange('name')(text.replace(/[^a-zA-Z ]/g, ''))
                    setFieldTouched('name', true)
                  }}
                  onBlur={() => setFieldTouched('name')}
                  backgroundColor="#fff"
                  placeholder="Type your name"
                  InputLeftElement={<Icon name="user" size={20} color="#ccc" style={{ marginLeft: 12, marginRight: 12 }} />}
                  style={styleSignUp.input} />
                {touched.name && errors.name &&
                  <FormControl.ErrorMessage>
                    <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.name}</Text>
                  </FormControl.ErrorMessage>
                }
              </FormControl>

              <FormControl isInvalid={touched.nick_name && !isValid}>
                <FormControl.Label>Nick Name</FormControl.Label>
                <Input
                  onChangeText={(text) => {
                    handleChange('nick_name')(text);
                    setFieldTouched('nick_name', true)
                  }}
                  value={values.nick_name}
                  onBlur={() => setFieldTouched('nick_name')}
                  backgroundColor="#fff"
                  placeholder="Create a nickname"
                  InputLeftElement={<Icon name="user-circle" size={20} color="#ccc" style={{ marginLeft: 12, marginRight: 12 }} />}
                  style={styleSignUp.input} />
                {touched.nickName && errors.nickName &&
                  <FormControl.ErrorMessage>
                    <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.nickName}</Text>
                  </FormControl.ErrorMessage>
                }
              </FormControl>

              <FormControl isInvalid={touched.email && !isValid}>
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  value={values.email}
                  onChangeText={(text) => {
                    handleChange('email')(text)
                    setFieldTouched('email', true)
                  }}
                  onBlur={() => setFieldTouched('email')}
                  backgroundColor="#fff"
                  placeholder="Type your email"
                  InputLeftElement={<Icon name="at" size={20} color="#ccc" style={{ marginLeft: 12, marginRight: 12 }} />}
                  style={styleSignUp.input} />
                {touched.email && errors.email &&
                  <FormControl.ErrorMessage>
                    <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
                  </FormControl.ErrorMessage>
                }
              </FormControl>

              <FormControl isInvalid={touched.phone_number && !isValid}>
                <FormControl.Label>Phone number</FormControl.Label>
                <Input
                  onChangeText={(text) => {
                    handleChange('phone_number')(text.replace(/\D/g, '').slice(0, 11))
                    setFieldTouched('phone_number', true)
                  }}
                  value={values.phone_number}
                  onBlur={() => setFieldTouched('phone_number')}
                  backgroundColor="#fff"
                  placeholder="Typer your phone number"
                  InputLeftElement={<Icon name="phone" size={20} color="#ccc" style={{ marginLeft: 12, marginRight: 12 }} />}
                  style={styleSignUp.input} />
                {touched.phone && errors.phone &&
                  <FormControl.ErrorMessage>
                    <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.phone}</Text>
                  </FormControl.ErrorMessage>
                }
              </FormControl>

              <FormControl isInvalid={touched.password && !isValid}>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  onChangeText={(text) => {
                    handleChange('password')(text)
                    setFieldTouched('password', true)
                  }}
                  value={values.password}
                  onBlur={() => setFieldTouched('password')}
                  backgroundColor="#fff"
                  placeholder="Create your security password"
                  InputLeftElement={<Icon name="lock" size={20} color="#ccc" style={{ marginLeft: 12, marginRight: 12 }} />}
                  style={styleSignUp.input}
                  secureTextEntry={isPassword}
                  InputRightElement={
                    <Pressable onPress={() => setIsPassword(!isPassword)}>
                      <Icon name={isPassword ? "eye" : "eye-slash"} size={20} color="#ccc" style={{ marginLeft: 12, marginRight: 12 }} />
                    </Pressable>} />
                {touched.password && errors.password &&
                  <FormControl.ErrorMessage>
                    <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
                  </FormControl.ErrorMessage>
                }
              </FormControl>

              <Box style={styleSignUp.linkSignIn}>
                <Link href="#" onPress={goToScreen}><Text style={styleSignUp.linkSignIn} >Já tem conta, fazer login?</Text></Link>
              </Box>
            </Box>

            <Box >
              <Button onPress={() => handleSubmit()} 
              style={styleSignUp.button}
              >{loading ? (
                <Spinner color={'cyan.500'} />
              ) : (
                <Text>SIGN UP</Text>
              )}</Button>
            </Box>
          </ScrollView>
        )}
      </Formik>
    </Box>
  );
}
