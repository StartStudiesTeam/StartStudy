import React, { useState } from "react";
import {
  Input,
  Box,
  Text,
  Button,
  Link,
  Spinner,
  Pressable,
  FormControl,
  useToast,
  ScrollView,
} from "native-base";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Form, Formik } from "formik";
import Icon from "react-native-vector-icons/FontAwesome";
import styleRecoveryPassword from "./styles";
import api from "../../Services/api";
import validationForm from "./schemaValidation";

export default function ConfirmEmail() {
  const { navigate, goBack } = useNavigation();
  const [loading, setIsLoanding] = useState(false);
  const [isPassword, setIsPassword] = useState(true);
  const toast = useToast();

  async function goToSignIn() {
    navigate("SignIn");
  }

  const handleSubmit = async (values) => {
    try {
      setIsLoanding(true);
      const response = await api.post("/forgetpassword", {
        newPassword: values.newPassword,
      });
      setTimeout(() => {
        navigate("SignIn");
        setIsLoanding(false);
      }, 2000);
    } catch (error) {
      toast.show({
        description: `${error.message}`,
      });
      setIsLoanding(false);
    }
  };

  return (
    <Box style={styleRecoveryPassword.container}>
      <Box style={styleRecoveryPassword.box}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Formik
                initialValues={{newPassword: ''}}
                onSubmit={handleSubmit}
                validationSchema={validationForm}
          >
            {({handleChange, handleSubmit, setFieldTouched, touched, errors, values}) => (
              <>
                <Box style={styleRecoveryPassword.containerBrandImage}>
                  <Image source={require('../../Assets/BrandTest2.png')} />
                </Box>
                <Box style={styleRecoveryPassword.contentHeaderMessage}>
                  <Text style={styleRecoveryPassword.headerTitleWelcome}>Renove sua segurança!</Text>
                  <Text style={styleRecoveryPassword.headerTitleWelcomeSub}>Cadastre uma nova senha, e tenha acesso a todo recurso novamente!</Text>
                </Box>
                <Box style={styleRecoveryPassword.content}>
                  <Box style={styleRecoveryPassword.formContent}>
                    <Box style={styleRecoveryPassword.form}>
                      <FormControl isInvalid={errors.newPassword && touched.newPassword} style={styleRecoveryPassword.formControl}>
                        <Text style={styleRecoveryPassword.textLabel}>New Password</Text>
                        <Input
                              style={styleRecoveryPassword.input} 
                              variant='filled'
                              borderRadius={8}
                              backgroundColor='#fff'
                              placeholder="type your new password"
                              values={values.newPassword}
                              onChangeText={(text) => {
                                handleChange('newPassword')(text)
                              }}
                              onBlur={() => setFieldTouched('newPassword')}
                              InputLeftElement={
                                <Icon name="lock" style={styleRecoveryPassword.iconInputLeft}/>
                              }
                              InputRightElement={
                                <Pressable onPress={() => setIsPassword(!isPassword)}>
                                  <Icon
                                    name={isPassword ? 'eye' : 'eye-slash'}
                                    style={styleRecoveryPassword.iconInputRight}
                                  />
                                </Pressable>
                              }

                        />
                        <FormControl.ErrorMessage>
                          {errors.newPassword}
                        </FormControl.ErrorMessage>
                      </FormControl>
                      <Box style={styleRecoveryPassword.containerLink}>
                        <TouchableOpacity onPress={() => goToSignIn()}>
                          <Text style={styleRecoveryPassword.labelLink}>Return and sign in</Text>
                        </TouchableOpacity>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Button onPress={() => handleSubmit()} style={styleRecoveryPassword.button}>
                      {loading ? (<Spinner color={'cyan.500'} />) : (<Text style={styleRecoveryPassword.labelButton}>SAVE</Text>)}
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