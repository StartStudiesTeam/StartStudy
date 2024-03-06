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
import { AuthStore } from "../../stores/Auth/store";

export default function ConfirmEmail() {
  const user = AuthStore((state) => state.user);
  const pageFlow = AuthStore((state) => state.pageFlow);
  const { confirmCodeToken } = AuthStore();
  const { navigate, goBack } = useNavigation();
  const [loading, setIsLoading] = useState(false);
  const toast = useToast();

  const data = [];

  const submitCode = async () => {
    setIsLoading(true);

    const codeToken = data.join("");

    const response = await confirmCodeToken({
      code: codeToken,
      email: user.email,
    });

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

  let inputComponents = [];
  for (let index = 0; index <= 5; index++) {
    inputComponents.push(
      <Input
        key={index}
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
                Precisamos confirmar se você recebeu{"\n"}o código no e-mail
                informado!
              </Text>
            </Box>
            <Box>
              <Text style={styleCodeConfirm.labelInput}>Code</Text>
              <Box style={styleCodeConfirm.boxCode}>
                <>{inputComponents}</>
              </Box>
            </Box>
            <Link onPress={() => navigate("SignUp")} style={styleCodeConfirm.boxLink}>
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
