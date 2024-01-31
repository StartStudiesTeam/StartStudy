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
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import styleConfirmEmail from "./styles";
import api from "../../Services/api";

export default function ConfirmEmail() {
  const { navigate, goBack } = useNavigation();
  const [loading, setIsLoanding] = useState(false);
  const toast = useToast();

  async function goToScreen() {
    navigate("SignUp");
  }

  const submitCode = async (values) => {
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
    <Box flex={1} bg="#2B85A2" alignItems="center" justifyContent="center">
      <Box style={styleConfirmEmail.containerLogo}>
        <Image source={require("../../Assets/BrandTest2.png")}></Image>
      </Box>
      <Box  style={styleConfirmEmail.containerTitle}>
        <Text style={styleConfirmEmail.titleOne}>Opa!</Text>
        <Text style={styleConfirmEmail.titleTwo}>Precisamos saber qual e-mail está utilizando, vamos envia-lo um código pra você!</Text>
      </Box>
      <Box style={styleConfirmEmail.container}>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={submitCode}
          validationSchema={yup.object().shape({
            email: yup.string(),
          })}
        >
          {({ handleChange, setFieldTouched, isValid, values }) => (
            <FormControl isInvalid={!isValid} style={styleConfirmEmail.formControl}>
              <FormControl.Label><Text style={styleConfirmEmail.labelInput}>Email or Nickname</Text></FormControl.Label>
              <Input
                value={values.email}
                onChangeText={(text) => {
                  handleChange("email")(text);
                  setFieldTouched("email", true);
                }}
                onBlur={() => setFieldTouched("email")}
                style={styleConfirmEmail.input}
                width={368}
                borderRadius={8}
                backgroundColor={'#fff'}
                variant="filled"
                placeholder="Type your e-mail or nickname"
                InputLeftElement={
                  <Icon
                    name="at"
                    size={20}
                    color="#323232"
                    style={{ marginLeft: 12, marginRight: 12 }}
                  />
                }
              />
            </FormControl>
          )}
        </Formik>

        <Link
          style={styleConfirmEmail.linkSignIn}
          href="#"
          onPress={() => goToScreen()}
        >
          <Text style={styleConfirmEmail.textLink}>
            Don't have an account, Sign Up!
          </Text>
        </Link>
      </Box>

      <Box style={styleConfirmEmail.botao}>
        <Button onPress={() => submitCode()} style={styleConfirmEmail.button}>
          {loading ? (
            <Spinner color={"cyan.500"} />
          ) : (
            <Text style={styleConfirmEmail.textButton}>SEND</Text>
          )}
        </Button>
      </Box>
    </Box>
  );
}
