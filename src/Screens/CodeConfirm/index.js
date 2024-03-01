import React, { useRef, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  Input,
  Box,
  Text,
  Button,
  Link,
  Spinner,
  useToast,
  ScrollView,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import styleCodeConfirm from "./styles";
import api from "../../Services/api";

export default function CodeConfirm() {
  const { navigate, goBack } = useNavigation();
  const [loading, setIsLoanding] = useState(false);
  const toast = useToast();
  const data = [];

  const inputRefs = Array(6)
  .fill()
  .map(() => useRef(null));


  const submitCode = async () => {
    try {
      setIsLoanding(true);
      const token = data.join("");
      await api.post("/mailcheck", {
        token,
      });
      toast.show({
        description: `Codigo confirmado`,
      });
      setTimeout(() => {
        setIsLoanding(false);
        navigate("HomePage");
      }, 2000);
    } catch (error) {
      toast.show({
        description: `${error.message}`,
      });
      setIsLoanding(false);
    }
  };

  async function goToSignUp() {
    navigate("SignUp");
  }

  let inputComponents = [];
  for (let index = 0; index <= 5; index++) {
    inputComponents.push(
      <Input
        key={index}
        ref={inputRefs[index]}
        style={styleCodeConfirm.input}
        variant="filled"
        backgroundColor={"#FFF"}
        width="47px"
        keyboardType="default"
        maxLength={1}
        autoFocus={index === 0}
        onChangeText={(text) => {
          data[index] = text;
          if (text === "") {
            if (index > 0) {
              inputRefs[index - 1].current.focus();
            }
          } else if (text !== "" && index < 5) {
            inputRefs[index + 1].current.focus();
          }
        }}
      />
    );
  }

  return (
    <Box style={styleCodeConfirm.container}>
      <Box style={styleCodeConfirm.box}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <Box style={styleCodeConfirm.containerBrandImage}>
            <Image source={require('../../Assets/BrandTest2.png')} style={styleCodeConfirm.brandImage} />
          </Box>
          <Box style={styleCodeConfirm.contentHeaderMessage}>
            <Text style={styleCodeConfirm.headerTitleWelcome}>Você é você mesmo?!</Text>
            <Text style={styleCodeConfirm.headerTitleWelcomeSub}>Precisamos confirma se você recebeu o código no seu e-mail informado!</Text>
          </Box>
          <Box style={styleCodeConfirm.content}>
            <Box style={styleCodeConfirm.codeContent}>
              <Box style={styleCodeConfirm.boxCode}>
                <Text style={styleCodeConfirm.textLabel}>Code</Text>
                <Box style={styleCodeConfirm.code}>
                  <>{inputComponents}</>
                </Box>
                <Box style={styleCodeConfirm.containerLink}>
                  <TouchableOpacity onPress={() => goToSignUp()}>
                    <Text style={styleCodeConfirm.labelLink}>Don't have an account? signup?</Text>
                  </TouchableOpacity>
                </Box>
              </Box>
            </Box>
            <Button onPress={submitCode} style={styleCodeConfirm.button}>
              {loading ? (
                <Spinner color={'cyan.500'} />
              ) : (
                <Text style={styleCodeConfirm.labelButton}>SIGN IN</Text>
              ) }
            </Button>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
}