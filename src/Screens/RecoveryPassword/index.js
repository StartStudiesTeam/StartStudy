import { React, useState } from "react";
import {
  Input,
  Box,
  Text,
  Button,
  Spinner,
  Pressable,
  FormControl,
  useToast,
  ScrollView,
} from "native-base";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import Icon from "react-native-vector-icons/FontAwesome";
import styleRecoveryPassword from "./styles";
import validationForm from "./schemaValidation";
import { isNotEmpty } from "../../utils/Variables";
import { AuthStore } from "../../stores/Auth/store";


export default function RecoveryPassword() {
  const { navigate, goBack } = useNavigation();
  const [loading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const authUser = AuthStore((state) => state.pageFlow);
  const { newPassword } = AuthStore();

  const toast = useToast();

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);

      const response = await newPassword({
        newPassword: values.newPassword,
      });

      toast.show({
        description: `${response.message}`,
      });

      if (isNotEmpty(response.body) && authUser) {
        navigate("HomePage");
      }

      setIsLoading(false);

    } catch (error) {
      toast.show({
        description: `${error.message}`,
      });

      setIsLoading(false);
    }
  };

  return (
    <Box style={styleRecoveryPassword.container}>
      <Box style={styleRecoveryPassword.box}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Formik
            initialValues={{ newPassword: '' }}
            onSubmit={handleSubmit}
            validationSchema={validationForm}
          >
            {({ handleChange, handleSubmit, setFieldTouched, touched, errors, values }) => (
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
                          type={showPassword ? "text" : "password"}
                          values={values.newPassword}
                          onChangeText={(text) => {
                            handleChange('newPassword')(text)
                          }}
                          onBlur={() => setFieldTouched('newPassword')}
                          InputLeftElement={
                            <Icon name="lock" style={styleRecoveryPassword.iconInputLeft} />
                          }
                          InputRightElement={
                            <Pressable onPress={() => setShowPassword(!showPassword)}>
                              <Icon
                                name={showPassword ? "eye" : "eye-slash"}
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
                        <TouchableOpacity onPress={() => navigate("SignIn")}>
                          <Text style={styleRecoveryPassword.labelLink}>Return and sign in</Text>
                        </TouchableOpacity>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Button onPress={() => handleSubmit()} style={styleRecoveryPassword.button}>
                      {loading ? (<Spinner color={'cyan.500'} />) : (<Text style={styleRecoveryPassword.labelButton}>Save</Text>)}
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