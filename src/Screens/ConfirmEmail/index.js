import React, { useState } from "react";
import {
  Input,
  Box,
  Text,
  Button,
  Spinner,
  FormControl,
  useToast,
  ScrollView,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import { Formik } from "formik";
import { TouchableOpacity } from "react-native";
import styleConfirmEmail from "./styles";
import validationForm from "./schemaValidation";
import { AuthStore } from "../../stores/Auth/store";


export default function ConfirmEmail() {
  const { mailCheck } = AuthStore();
  const { navigate, goBack } = useNavigation();
  const [loading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (formValues) => {
    setIsLoading(true);

    const credentialEmail = formValues.email;

    const response = await mailCheck({ email: credentialEmail });

    toast.show({
      description: `${response.message}`,
    });

    if (response?.statusCode == 201) {
      navigate("CodeConfirm");
    }

    setIsLoading(false);
  };

  return (
    <Box style={styleConfirmEmail.container}>
      <Box style={styleConfirmEmail.box}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Formik
            initialValues={{ email: '' }}
            onSubmit={handleSubmit}
            validationSchema={validationForm}
          >
            {({ handleChange, handleSubmit, setFieldTouched, touched, errors, values }) => (
              <>
                <Box style={styleConfirmEmail.containerBrandImage}>
                  <Image source={require('../../Assets/BrandTest2.png')} />
                </Box>
                <Box style={styleConfirmEmail.contentHeaderMessage}>
                  <Text style={styleConfirmEmail.headerTitleWelcome}>Opa!</Text>
                  <Text style={styleConfirmEmail.headerTitleWelcomeSub}>Precisamos saber qual e-mail está utilizando, vamos envia-lo um código para confirmação!</Text>
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
                            <Icon name="at" style={styleConfirmEmail.iconInputLeft} />
                          }
                        />
                        <FormControl.ErrorMessage>
                          {errors.email}
                        </FormControl.ErrorMessage>
                      </FormControl>
                      <Box style={styleConfirmEmail.containerLink}>
                        <TouchableOpacity onPress={() => navigate("SignUp")}>
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