import React, { useRef, useState } from "react";
import { Image } from "react-native";
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
        width={"16%"}
        placeholder="|"
        keyboardType="default"
        maxLength={1}
        autoFocus={index === 0}
        onChangeText={(text) => {
          data[index] = text;
          if (text !== "" && index < 5) {
            inputRefs[index + 1].current.focus();
          }
        }}
      />
    );
  }

  return (
    <Box style={styleCodeConfirm.contarinerP}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styleCodeConfirm.scrollContainer}
      >
        <Box style={styleCodeConfirm.containerSecundario}>
          <Box>
            <Image
              source={require("../../Assets/BrandTest2.png")}
              style={{
                width: 89,
                resizeMode: "contain",
                position: "relative",
              }}
            />
          </Box>

          <Box style={{ marginLeft: 16, marginRight: 16 }}>
            <Box style={styleCodeConfirm.boxTexts}>
              <Text style={styleCodeConfirm.labelInit}>
                Você é você mesmo?!
              </Text>
              <Text style={styleCodeConfirm.labelText}>
                Precisamos confirmar se você recebeu{"\n"}o código no seu e-mail
                informado!
              </Text>
            </Box>
            <Box>
              <Text style={styleCodeConfirm.labelInput}>Code</Text>
              <Box style={styleCodeConfirm.boxCode}>
                <>{inputComponents}</>
              </Box>
            </Box>
            <Link onPress={() => goToSignUp()} style={styleCodeConfirm.boxLink}>
              <Text style={styleCodeConfirm.linkSignIn}>
                Don't have an account? signup?
              </Text>
            </Link>
          </Box>

          <Box style={styleCodeConfirm.boxBotao}>
            <Button onPress={submitCode} style={styleCodeConfirm.button}>
              {loading ? (
                <Spinner color={"cyan.500"} />
              ) : (
                <Text style={styleCodeConfirm.textBotao}>SIGN IN</Text>
              )}
            </Button>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
