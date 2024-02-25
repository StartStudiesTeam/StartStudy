import { React, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Input, Box, Text, Button, Pressable, FormControl, Spinner, useToast, Checkbox, ScrollView } from "native-base";
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from "formik";
import { TouchableOpacity } from "react-native";
import styleSignIn from "./style";
import validationForm from "./schemaValidation";
import { AuthStore } from "../../stores/Auth/store";

export default function SignIn() {
    const { signIn } = AuthStore();
    const { navigate } = useNavigation();
    const toast = useToast();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setIsLoading] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    const handleSubmit = async (formValues) => {
        setIsLoading(true);

        const credentialEmail = formValues.email;
        const credentialPassword = formValues.password;

        const response = await signIn({ email: credentialEmail, password: credentialPassword });

        toast.show({
            description: `${response.message}`
        });

        setIsLoading(false);

        if (response.body) {
            navigate('HomePage');
        }
    };

    return (
        <Box style={styleSignIn.container}>
        <Box style={styleSignIn.box}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationForm}
            >
                {({ handleChange, handleSubmit, setFieldTouched, touched, errors, values }) => (
                    <>
                        <Box style={styleSignIn.containerBrandImage}>
                            <Image source={require('../../Assets/BrandTest2.png')} style={styleSignIn.brandImage} />
                        </Box>
                        <Box style={styleSignIn.contentHeaderMessage}>
                            <Text style={styleSignIn.headerTitleWelcome}>Bem vindo de volta,</Text>
                            <Text style={styleSignIn.headerTitleWelcomeSub}>Estamos felizes em fazer parte da construção do seu conhecimento!</Text>
                        </Box>
                        <Box style={styleSignIn.content}>
                            <Box style={styleSignIn.formContent}>
                                <Box style={styleSignIn.form} >
                                    <FormControl isInvalid={errors.email && touched.email} style={styleSignIn.formControl}>
                                        <Text style={styleSignIn.textLabel}>Email or Nickname</Text>
                                        <Input
                                            style={styleSignIn.input}
                                            variant="filled"
                                            borderRadius={8}
                                            backgroundColor="#fff"
                                            placeholder="Type your Email"
                                            value={values.email}
                                            onChangeText={(text) => {
                                                handleChange('email')(text)
                                            }}
                                            onBlur={() => setFieldTouched('email')}
                                            InputLeftElement={
                                                <Icon name="at" style={styleSignIn.iconInputLeft} />
                                            }
                                        />
                                        <FormControl.ErrorMessage >
                                            {errors.email}
                                        </FormControl.ErrorMessage>
                                    </FormControl>
                                    <FormControl isInvalid={errors.password && touched.password} style={styleSignIn.formControl}>
                                        <Text style={styleSignIn.labelPassword}>Password</Text>
                                        <Input
                                            style={styleSignIn.input}
                                            variant="filled"
                                            borderRadius={8}
                                            backgroundColor="#fff"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Type your Password"
                                            value={values.password}
                                            onChangeText={(text) => {
                                                handleChange('password')(text)
                                            }}
                                            onBlur={() => setFieldTouched('password')}
                                            InputLeftElement={
                                                <Icon name="lock" style={styleSignIn.iconInputLeft} />
                                            }
                                            InputRightElement={
                                                <Pressable onPress={() => setShowPassword(!showPassword)}>
                                                    <Icon name={showPassword ? "eye" : "eye-slash"} style={styleSignIn.iconInputRightPassword} />
                                                </Pressable>
                                            }
                                        />
                                        <FormControl.ErrorMessage >
                                            {errors.password}
                                        </FormControl.ErrorMessage>
                                    </FormControl>
                                    <Box style={styleSignIn.containerLinkFirst}>
                                        <Checkbox onChange={() => setToggleCheckBox(true)} value={toggleCheckBox} >
                                            <Text style={styleSignIn.labelRemember}>Remember me</Text>
                                        </Checkbox>
                                        <TouchableOpacity onPress={() => navigate('RecoveryPassword')}>
                                            <Text style={styleSignIn.labelForgotPassword}>Forgot Password?</Text>
                                        </TouchableOpacity>
                                    </Box>
                                </Box>
                                <Box >
                                    <Button onPress={() => handleSubmit()} style={styleSignIn.button}>
                                        {loading ? (<Spinner color={'cyan.500'} />) : (<Text style={styleSignIn.textSignIn}>sign in</Text>)}
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </>
                )}
            </Formik>
            <Box style={styleSignIn.contentLinksSecond}>
                <TouchableOpacity onPress={() => navigate('SignUp')}>
                    <Text style={styleSignIn.labelLink}>Don't have an account, sign up?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('HomePage')}>
                    <Text style={styleSignIn.labelLink}>Log in as a guest and not use all features?</Text>
                </TouchableOpacity>
            </Box>
        </ScrollView>
        </Box>
        </Box>
    )
}