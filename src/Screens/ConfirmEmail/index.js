import React ,{ useState } from 'react';
import { Input, Box, Text, Button,Link,Spinner,FormControl } from "native-base";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as yup from 'yup'
import { Formik } from "formik";
import styleConfirmEmail from "./styles";
import api from "../../Services/api";


export default function ConfirmEmail() {

  const {navigate, goBack} = useNavigation();
  const [loading, setIsLoanding] = useState(false);

  async function goToScreen() {
  navigate('SignUp');
  }

  const submitCode2 = async (values) => {
    try {
      setIsLoanding(true);
      const response = await api.get('MailCheck', {
        email: values.email
      });
      const confirmationCode = response.confirmationCode;
      await sendEmail(values.email, confirmationCode);
      setTimeout(() => {
        setIsLoanding(false);
        navigate('CodeConfirm');
      }, 2000);
    } catch (error) {
      console.error('Erro ao realizar login:', error.message);
      setIsLoanding(false);
    }
  };

  return (
    <Box flex={1} bg="#B6B1B1" alignItems="center" justifyContent="center"> 
                
      <Box style={styleConfirmEmail.boxImage}>
      </Box>

      <Box style={styleConfirmEmail.container}>
        <FormControl.Label style={styleConfirmEmail.labelInput}>Email or Nickname</FormControl.Label>
        <Formik
                initialValues={{ email: '' }}
                onSubmit={submitCode2}
                validationSchema={yup.object().shape({
                    email: yup
                    .string(),
                })}
                >
                {({ handleChange, setFieldTouched, isValid, values }) => (
                <FormControl isInvalid={!isValid} style={styleConfirmEmail.formControl}>
                 <Input
                  value={values.email}
                  onChangeText={(text) => {
                   handleChange('email')(text)
                   setFieldTouched('email', true)
                 }}
                onBlur={() => setFieldTouched('email')}
                style={styleConfirmEmail.input}
                variant="filled"
                placeholder="Type your e-mail or nickname"
                InputLeftElement={<Icon name="at" size={20} color="#ccc" style={{marginLeft: 12, marginRight: 12  }} />}/>
                 </FormControl>
                  )}</Formik>

          <Link style={styleConfirmEmail.linkSignIn} 
          href="#" onPress={() => goToScreen()}> 
          Don't have an account? Sign Up!</Link>
       
      </Box>

      <Box style={styleConfirmEmail.botao}>
        <Button onPress={() => submitCode2()} 
          style={styleConfirmEmail.button}
        >{loading ? (
          <Spinner color={'cyan.500'} />
            ) : (
          <Text style={{color:"#FFF"}}>SEND</Text>
         )}</Button>
      </Box>

    </Box>
  );
}
