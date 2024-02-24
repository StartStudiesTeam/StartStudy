import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Input, Box, Text, Button, ScrollView, Pressable, FormControl, Spinner, useToast } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from "formik";
import { TouchableOpacity } from "react-native";
import schemaValidation from './schemaValidation';
import styleSignUp from "./style";
import { AuthStore } from '../../stores/Auth/store';
import { GetStorage } from "../../utils/AsyncStorage";


export default function SignUp() {
    const { signUp } = AuthStore();

    const [isPassword, setIsPassword] = useState(true);
    const [loading, setIsLoading] = useState(false);
    const { navigate, goBack } = useNavigation();
    const toast = useToast();

    const handleSubmit = async (values) => {
        try {
            setIsLoading(true);

            const credentialName = values.name;
            const credentialNickName = values.nick_name;
            const credentialEmail = values.email;
            const credentialPassword = values.password;
            const credentialPhoneNumber = values.phone_number;

            const response = await signUp({
                name: credentialName,
                nickName: credentialNickName,
                email: credentialEmail,
                password: credentialPassword,
                numberPhone: credentialPhoneNumber
            });
            const accessToken = await GetStorage('accessToken');

            toast.show({
                description: `${response.message}`
            });

            console.log(accessToken);
            console.log(response);

            setIsLoading(false);

            return credentialName;
        } catch (error) {
            toast.show({
                description: `ERROR: ${error}`
            })
            console.error(error);
            setIsLoading(false);
        }
    };

    return (
        <Box style={styleSignUp.container} >
        <Box>
        <ScrollView showsVerticalScrollIndicator={false} style={styleSignUp.scrollview}>
            <Formik
                style={{borderWidth: 1,}}
                initialValues={{ name: '', nick_name: '', email: '', phone_number: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={schemaValidation}
            >
                {({ handleChange, handleSubmit, setFieldTouched, touched, errors, values }) => (
                    <>
                        <Box style={styleSignUp.contentHeaderMessage}>
                            <Text style={styleSignUp.headerTitleWelcome}>Vamos começar?</Text>
                            <Text style={styleSignUp.headerTitleWelcomeSub}>Precisamos de alguns dados para{'\n'}continuar e acessar todos recursos!</Text>
                        </Box>
                        <Box style={styleSignUp.content}>
                                <Box style={styleSignUp.formContent}>
                                    <Box style={styleSignUp.form}>
                                        <FormControl isInvalid={touched.name && errors.name}>
                                            <FormControl.Label>
                                                <Text style={styleSignUp.textLabel}>Name</Text>
                                            </FormControl.Label>
                                            <Input
                                                value={values.name}
                                                onChangeText={(text) => {
                                                    handleChange('name')(text.replace(/[^a-zA-Z ]/g, ''))
                                                    setFieldTouched('name', true)
                                                }}
                                                onBlur={() => setFieldTouched('name')}
                                                style={styleSignUp.input}
                                                backgroundColor="#fff"
                                                borderRadius={8}
                                                placeholder="Type your name"
                                                InputLeftElement={ 
                                                    <Icon name="user-o" style={styleSignUp.iconInputLeft} /> 
                                                }
                                                />
                                            <FormControl.ErrorMessage>
                                                <Text>{errors.name}</Text>
                                            </FormControl.ErrorMessage>
                                        </FormControl>
                                        <FormControl isInvalid={touched.nick_name && errors.nick_name}>
                                            <FormControl.Label><Text style={styleSignUp.textLabel}>Nick Name</Text></FormControl.Label>
                                            <Input
                                                onChangeText={(text) => {
                                                    handleChange('nick_name')(text);
                                                    setFieldTouched('nick_name', true);
                                                }}
                                                value={values.nick_name}
                                                onBlur={() => setFieldTouched('nick_name')}
                                                style={styleSignUp.input}
                                                backgroundColor="#fff"
                                                borderRadius={8}
                                                placeholder="Create a nickname"
                                                InputLeftElement={
                                                    <Icon name="at" style={styleSignUp.iconInputLeft} />
                                                }
                                            />
                                            <FormControl.ErrorMessage>
                                                <Text>{errors.nick_name}</Text>
                                            </FormControl.ErrorMessage>
                                        </FormControl>
                                        <FormControl isInvalid={touched.email && errors.email}>
                                            <FormControl.Label><Text style={styleSignUp.textLabel}>Email</Text></FormControl.Label>
                                            <Input
                                                value={values.email}
                                                onChangeText={(text) => {
                                                    handleChange('email')(text.toLowerCase())
                                                    setFieldTouched('email', true)
                                                }}
                                                onBlur={() => setFieldTouched('email')}
                                                style={styleSignUp.input} 
                                                backgroundColor="#fff"
                                                borderRadius={8}
                                                placeholder="Type your email"
                                                InputLeftElement={
                                                    <Icon name="envelope-o" style={styleSignUp.iconInputLeft}/>
                                                }
                                            />
                                            <FormControl.ErrorMessage>
                                                <Text>{errors.email}</Text>
                                            </FormControl.ErrorMessage>
                                        </FormControl>
                                        <FormControl isInvalid={touched.phone_number && errors.phone_number}>
                                            <FormControl.Label><Text style={styleSignUp.textLabel}>Phone number</Text></FormControl.Label>
                                            <Input
                                                onChangeText={(text) => {
                                                    handleChange('phone_number')(text.replace(/\D/g, '').slice(0, 11))
                                                    setFieldTouched('phone_number', true)
                                                }}
                                                type="number"
                                                value={values.phone_number}
                                                onBlur={() => setFieldTouched('phone_number')}
                                                style={styleSignUp.input}
                                                backgroundColor="#fff"
                                                borderRadius={8}
                                                placeholder="Type your phone number"
                                                InputLeftElement={
                                                    <Icon name="phone" style={styleSignUp.iconInputLeft} />
                                                }
                                            />
                                            <FormControl.ErrorMessage>
                                                <Text>{errors.phone_number}</Text>
                                            </FormControl.ErrorMessage>
                                        </FormControl>
                                        <FormControl isInvalid={touched.password && errors.password}>
                                            <FormControl.Label><Text style={styleSignUp.textLabel}>Password</Text></FormControl.Label>
                                            <Input
                                                onChangeText={(text) => {
                                                    handleChange('password')(text)
                                                    setFieldTouched('password', true)
                                                }}
                                                value={values.password}
                                                onBlur={() => setFieldTouched('password')}
                                                style={styleSignUp.input}
                                                backgroundColor="#fff"
                                                borderRadius={8}
                                                placeholder="Create your security password"
                                                secureTextEntry={isPassword}
                                                InputLeftElement={
                                                    <Icon name="lock" style={styleSignUp.iconInputLeft} />
                                                }
                                                InputRightElement={
                                                    <Pressable onPress={() => setIsPassword(!isPassword)}>
                                                        <Icon name={isPassword ? "eye" : "eye-slash"} style={styleSignUp.iconInputRight} />
                                                    </Pressable>
                                                } 
                                            />
                                            <FormControl.ErrorMessage>
                                                <Text>{errors.password}</Text>
                                            </FormControl.ErrorMessage>
                                        </FormControl>
                                        <Box style={styleSignUp.contentClickSignIn}>
                                            <TouchableOpacity onPress={() => navigate('SignIn')} >
                                                <Text style={styleSignUp.labelClickSignIn} >Already have an account, click Sign In</Text>
                                            </TouchableOpacity>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Button onPress={() => handleSubmit()} style={styleSignUp.button}>
                                            {loading ? (<Spinner color={'cyan.500'} />) : (<Text style={styleSignUp.textButton}>SIGN UP</Text>)}
                                        </Button>
                                    </Box>
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
