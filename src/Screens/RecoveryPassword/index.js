import React, {useState} from 'react';
import { Input, Box, Text, Button,Link, Spinner,Pressable,FormControl , useToast} from "native-base";
import { Image } from 'react-native';
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
  const toast = useToast()

  
  async function goToSignIn() {
  navigate('SignIn');
  }

  const handleSubmit = async (values) => {
    try {
      setIsLoanding(true)
      const response = await api.post('/forgetpassword', {
        newPassword: values.newPassword
      })
      setTimeout(( )=>{
        navigate('SignIn');
        setIsLoanding(false);
      },2000)
    } catch (error) {
      toast.show({
        description: `${error.message}`
      })
      setIsLoanding(false)
    }
  }
  
  return (
    <Box style={styleRecoveryPassword.contarinerP}>

      <Formik
          onSubmit={handleSubmit}
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
            <Image source={require('../../Assets/BrandTest2.png')}
            style={{width:89, resizeMode:'contain',position:'relative'}}/>
            <Box >

          <Box style={styleRecoveryPassword.boxTexts}>
   
          <Text style={styleRecoveryPassword.textPrincipal}>Renove sua segurança!</Text>
          <Text style={styleRecoveryPassword.textSecundario}>
            Cadastre uma nova senha, e tenha{'\n'} 
            acesso a todo recurso novamente!
          </Text>
     
          </Box>

              <FormControl isInvalid={!isValid} style={styleRecoveryPassword.container}>
                <Text style={styleRecoveryPassword.titleInput}>New Password</Text>
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
                    <Icon name={isPassword ? "eye" : "eye-slash"} size={20} color="#ccc" style={{marginLeft: 12, marginRight: 12 }} />
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
              style={styleRecoveryPassword.button}
              onPress={() => handleSubmit()}>
              {loading ? (
                <Spinner color={'cyan.500'} />
              ) : (
                <Text style={styleRecoveryPassword.textBotao}>SAVE</Text>
              )}
              </Button>
            </Box>
          </Box>
        )}
      </Formik>
    </Box>
  );
}
