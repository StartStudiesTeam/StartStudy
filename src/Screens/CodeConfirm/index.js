import React, { useRef, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  Input,
  Box,
  Text,
  Button,
  Spinner,
  useToast,
  ScrollView,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import styleCodeConfirm from "./styles";
import { AuthStore } from "../../stores/Auth/store";

export default function CodeConfirm() {
  const pageFlow = AuthStore((state) => state.pageFlow);
  const { confirmCodeToken } = AuthStore();
  const { navigate, goBack } = useNavigation();
  const [loading, setIsLoading] = useState(false);
  const toast = useToast();
  const inputRefs = Array(6).fill().map(() => useRef(null));

  const handleSubmit = async (formValues) => {
    setIsLoading(true);

    const codeToken = Object.values(formValues).join('');

    const response = await confirmCodeToken({
      code: codeToken,
    });

    console.log(response)

    toast.show({
      description: `${response.message}`,
    });

    if (response.body && pageFlow == "recoveryPassword") {
      navigate("NewPassword");
    }

    if (response.body) {
      navigate("HomePage");
    }

    setIsLoading(false);
  };

  handleInputs = (text, index) => {
    if (text === "") {
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    } else if (text !== "" && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <Box style={styleCodeConfirm.container}>
      <Box style={styleCodeConfirm.box}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <Box style={styleCodeConfirm.containerBrandImage}>
            <Image source={require('../../Assets/BrandTest2.png')} style={styleCodeConfirm.brandImage} />
          </Box>
          <Formik initialValues={{}} onSubmit={handleSubmit}>
            {({ handleChange, handleSubmit, setFieldTouched, touched, errors, values }) => (
              <>
                <Box style={styleCodeConfirm.contentHeaderMessage}>
                  <Text style={styleCodeConfirm.headerTitleWelcome}>Você é você mesmo?!</Text>
                  <Text style={styleCodeConfirm.headerTitleWelcomeSub}>Precisamos confirmar se você recebeu o código no e-mail informado!</Text>
                </Box>
                <Box style={styleCodeConfirm.content}>
                  <Box style={styleCodeConfirm.codeContent}>
                    <Box style={styleCodeConfirm.boxCode}>
                      <Text style={styleCodeConfirm.textLabel}>Code</Text>
                      <Box style={styleCodeConfirm.code}>
                        {[...Array(6)].map((_, index) => (
                          <Input
                            key={index}
                            ref={inputRefs[index]}
                            style={styleCodeConfirm.input}
                            variant="filled"
                            backgroundColor={"#FFF"}
                            width="44px"
                            keyboardType="default"
                            maxLength={1}
                            autoFocus={index === 0}
                            value={values[`code${index}`]}
                            onChangeText={(text) => {
                              handleChange(`code${index}`)(text);
                              handleInputs(text, index);
                            }}
                          />
                        ))}
                      </Box>
                      <Box style={styleCodeConfirm.containerLink}>
                        <TouchableOpacity onPress={() => navigate('SignUp')}>
                          <Text style={styleCodeConfirm.labelLink}>Don't have an account? signup?</Text>
                        </TouchableOpacity>
                      </Box>
                    </Box>
                  </Box>
                  <Button onPress={() => handleSubmit()} style={styleCodeConfirm.button}>
                    {loading ? (
                      <Spinner color={'cyan.500'} />
                    ) : (
                      <Text style={styleCodeConfirm.labelButton}>SIGN IN</Text>
                    )}
                  </Button>
                </Box>
              </>
            )}
          </Formik>
        </ScrollView>
      </Box>
    </Box>
  );
}