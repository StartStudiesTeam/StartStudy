import { React, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Input, Box, Text, Button, Link, Pressable, FormControl } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as yup from 'yup'
import { Formik } from "formik";
import styleSignIn from "./style";

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const { navigate, goBack } = useNavigation();

    async function goToScreen() {
        navigate('SignUp');
    }

    return (
        <Box style={styleSignIn.container} >
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log('Valores do formulário:', values)}
                validationSchema={yup.object().shape({
                    email: yup
                        .string()
                        .email('Invalid email address format')
                        .required('Email is required'),
                    password: yup
                        .string()
                        .min(8, 'Password should be at least 8 chars long.')
                        .required('Password is required'),
                })}
            >
                {({ handleChange, handleBlur, handleSubmit, setFieldTouched, touched, isValid, errors, values }) => (
                    <Box style={styleSignIn.content}>
                        <Box style={styleSignIn.brand}></Box>
                        <Box style={styleSignIn.formContent}>
                            <Box style={styleSignIn.form} >
                                <FormControl isInvalid={!isValid} style={styleSignIn.formControl}>
                                    <FormControl.Label style={styleSignIn.labelInput} >Email</FormControl.Label>
                                    <Input
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        onBlur={() => setFieldTouched('email')}
                                        style={styleSignIn.input}
                                        variant="filled"
                                        placeholder="Type your Email"
                                        InputLeftElement={<Icon name="at" size={20} color="#ccc" style={{ marginLeft: 12, marginRight: 12 }} />} />
                                    {touched.email && errors.email &&
                                        <FormControl.ErrorMessage >
                                            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
                                        </FormControl.ErrorMessage>
                                    }

                                </FormControl>
                                <FormControl isInvalid={!isValid} style={styleSignIn.formControl}>
                                    <FormControl.Label style={styleSignIn.labelInput}>Password</FormControl.Label>
                                    <Input
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        onBlur={() => setFieldTouched('password')}
                                        style={styleSignIn.input}
                                        variant="filled"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Type your Password"
                                        InputLeftElement={<Icon name="lock" size={20} color="#ccc" style={{ marginLeft: 12, marginRight: 12 }} />}
                                        InputRightElement={
                                            <Pressable onPress={() => setShowPassword(!showPassword)}>
                                                <Icon name={showPassword ? "eye" : "eye-slash"} size={20} color="#ccc" style={{ marginLeft: 12, marginRight: 12 }} />
                                            </Pressable>} />
                                    <FormControl.ErrorMessage >
                                        {errors.password}
                                    </FormControl.ErrorMessage>
                                </FormControl>
                                <Link style={styleSignIn.link} href="#" onPress={() => goToScreen()}>
                                    Already have an account, sign in?
                                </Link>
                            </Box>
                            <Button onPress={handleSubmit} style={styleSignIn.button} isDisabled={!isValid}>Sign In</Button>
                        </Box>
                    </Box>
                )}
            </Formik>
        </Box>
    )
}