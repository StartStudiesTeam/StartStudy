import React, { useState } from "react";
import {
  Input,
  Box,
  Text,
  Button,
  Link,
  Spinner,
  FormControl,
  useToast,
  ScrollView,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import { Formik } from "formik";
import styleConfirmEmail from "./styles";
import api from "../../Services/api";
import validationForm from "./schemaValidation";
import { TouchableOpacity } from "react-native";


export default function ConfirmEmail() {
  const { navigate, goBack } = useNavigation();
  const [loading, setIsLoanding] = useState(false);
  const toast = useToast();

  async function goToScreen() {
    navigate("SignUp");
  }

  const handleSubmit = async (values) => {
    try {
      setIsLoanding(true);
      const response = await api.get("MailCheck", {
        email: values.email,
      });
      toast.show({
        description: `Verifique seu Email`,
      });
      const confirmationCode = response.confirmationCode;
      await sendEmail(values.email, confirmationCode);
      setTimeout(() => {
        setIsLoanding(false);
        navigate("CodeConfirm");
      }, 2000);
    } catch (error) {
      toast.show({
        description: `${error.message}`,
      });
      setIsLoanding(false);
    }
  };

  return (
    <Box style={styleConfirmEmail.container}>
      <Box style={styleConfirmEmail.box}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Formik
                initialValues={{email: ''}}
                onSubmit={handleSubmit}
                validationSchema={validationForm}
          >
            {({ handleChange, handleSubmit, setFieldTouched, touched, errors, values}) => (
              <>
                <Box style={styleConfirmEmail.containerBrandImage}>
                  <Image source={require('../../Assets/BrandTest2.png')} />
                </Box>
                <Box style={styleConfirmEmail.contentHeaderMessage}>
                  <Text style={styleConfirmEmail.headerTitleWelcome}>Opa!</Text>
                  <Text style={styleConfirmEmail.headerTitleWelcomeSub}>Precisamos saber qual e-mail está utilizando, vamos envia-lo um codigo pra você!</Text>
                </Box>
                <Box style={styleConfirmEmail.content}>
                  <Box style={styleConfirmEmail.formContent}>
                    <Box style={styleConfirmEmail.form}>
                      <FormControl isInvalid={errors.email && touched.email} style={styleConfirmEmail.formControl}>
                        <Text style={styleConfirmEmail.textLabel}>Email or Nickname</Text>
                        <Input
                              style={styleConfirmEmail.input}
                              variant='filled'
                              borderRadius={8}
                              backgroundColor='#fff'
                              placeholder="Type your Email"
                              values={values.email}
                              onChangeText={(text) => {
                                handleChange('email')(text)
                              }}
                              onBlur={() => setFieldTouched('email')}
                              InputLeftElement={
                                <Icon name="at" style={styleConfirmEmail.iconInputLeft}/>
                              }    
                        />
                        <FormControl.ErrorMessage>
                              {errors.email}
                        </FormControl.ErrorMessage>  
                      </FormControl>
                      <Box style={styleConfirmEmail.containerLink}>
                        <TouchableOpacity onPress={() => goToScreen()}>
                          <Text style={styleConfirmEmail.labelLink}>Don't have an account, sign up?</Text>
                        </TouchableOpacity>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Button onPress={() => handleSubmit()} style={styleConfirmEmail.button}>
                      {loading ? (<Spinner color={'cyan.500'} />) : (<Text style={styleConfirmEmail.labelButton}>SEND</Text>)}
                    </Button>
                  </Box>
                </Box>
              </>
            )}
          </Formik>
        </ScrollView>
      </Box>
    </Box>
  );
}