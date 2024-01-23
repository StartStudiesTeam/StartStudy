import React, {useState} from 'react';
import { Input, Box, Text, Button,Link, Spinner,Pressable,FormControl} from "native-base";
import { useNavigation } from '@react-navigation/native';
import { Formik } from "formik";
import * as yup from 'yup'
import Icon from 'react-native-vector-icons/FontAwesome';
import styleRecoveryPassword from "./styles";
import api from "../../Services/api";


export default function ConfirmEmail() {

  const {navigate, goBack} = useNavigation();
  const [loading, setIsLoanding] = useState(false);
  const [isPassword, setIsPassword] = useState(true)

  
  async function goToSignIn() {
  navigate('SignIn');
  }

  
  return (
    <Box style={styleRecoveryPassword.contarinerP}>
      <Formik
          initialValues={{newPassword: ''}}
          validationSchema={yup.object().shape({
            newPassword: yup
              .string()
              .min(8, 'Password should be at least 8 chars long.')
              .required('Password is required'),
          })}
      >
        {({ handleChange, handleSubmit, setFieldTouched, touched, isValid, errors, values }) =>(
          <Box style={styleRecoveryPassword.contarinerP}>
            <Box style={styleRecoveryPassword.boxImage}></Box>
            <Box >
              <FormControl isInvalid={!isValid} style={styleRecoveryPassword.container}>
                <FormControl.Label style={styleRecoveryPassword.labelInput}>New Password</FormControl.Label>
                <Input
                  style={styleRecoveryPassword.input}
                  value={values.newPassword}
                  onChangeText={(text) => {
                    handleChange('newPassword')(text)
                    setFieldTouched('newPassword', true)
                  }}
                  onBlur={() => setFieldTouched('newPassword')}
                  variant='filled'
                  placeholder='Type your new Password'
                  secureTextEntry={isPassword}
                  InputLeftElement={<Icon style={{marginLeft:17}}name="lock" size={20} color="#ccc"/>}
                  InputRightElement={
                  <Pressable onPress={() => setIsPassword(!isPassword)}>
                    <Icon name={isPassword ? "eye" : "eye-slash"} size={20} color="#ccc" style={{ marginLeft: 12, marginRight: 12 }} />
                  </Pressable>} />
                  {touched.newPassword && errors.newPassword && 
                    <FormControl.ErrorMessage>
                      <Text>{errors.newPassword}</Text>
                    </FormControl.ErrorMessage>
                  }
              </FormControl>
              <Link
              style={styleRecoveryPassword.linkSignIn}
              onPress={() => goToSignIn()}>
                Return and sign in?
              </Link>
            </Box>
            <Box style={styleRecoveryPassword.boxBotao}>
              <Button
              onPress={() => handleSubmit()}>
              {loading ? (
                <Spinner color={'cyan.500'} />
              ) : (
                <Text>Save</Text>
              )}
              </Button>
            </Box>
          </Box>
        )}
      </Formik>
    </Box>
  );
}
