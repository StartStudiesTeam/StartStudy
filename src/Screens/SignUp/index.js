import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Input, Box, Text, Button, ScrollView, Link, Pressable, FormControl } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as yup from 'yup'
import { Formik } from "formik";
import styleSignUp from "./style";

export default function SignUp() {
  const [isPassword, setIsPassword] = useState(true)
  const { navigate, goBack } = useNavigation();

  async function irParaTelas() {
    navigate('ConfirmEmail');
  }

  return (
    <Box flex={1} bg="#B6B1B1" alignItems="center" justifyContent="center">
      <Formik
        initialValues={{ name: '', nickName: '', email: '', phone: '', password: '' }}
        onSubmit={values => console.log('Valores do formulario', values)}
        validationSchema={yup.object().shape({
          name: yup
            .string()
            .required('The name is mandatory'),
          nickName: yup
            .string()
            .required('Nick name is required')
            .min(5, 'Nick name must have at least 5 characters')
            .max(15, 'Nick name must have a maximum of 15 characters'),
          email: yup
            .string()
            .email('Invalid email address format')
            .required('Email is required'),
          phone: yup
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

              <FormControl isInvalid={touched.nickName && !isValid}>
                <FormControl.Label>Nick Name</FormControl.Label>
                <Input
                  value={values.nickName}
                  onChangeText={(text) => {
                    handleChange('nickName')(text);
                    setFieldTouched('nickName', true)
                  }}
                  onBlur={() => setFieldTouched('nickName')}
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

              <FormControl isInvalid={touched.phone && !isValid}>
                <FormControl.Label>Phone number</FormControl.Label>
                <Input
                  value={values.phone}
                  onChangeText={(text) => {
                    handleChange('phone')(text.replace(/\D/g, '').slice(0, 11))
                    setFieldTouched('phone', true)
                  }}
                  onBlur={() => setFieldTouched('phone')}
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
                  value={values.password}
                  onChangeText={(text) => {
                    handleChange('password')(text)
                    setFieldTouched('password', true)
                  }}
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
                <Link href="#"><Text style={styleSignUp.linkSignIn} >Já tem conta, fazer login?</Text></Link>
              </Box>
            </Box>

            <Box >
              <Button onPress={() => { irParaTelas(); handleSubmit(); }} style={styleSignUp.button}>SIGN UP</Button>
            </Box>
          </ScrollView>
        )}
      </Formik>
    </Box>
  );
}
