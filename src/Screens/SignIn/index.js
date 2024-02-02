import { React, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Input, Box, Text, Button, Link, Pressable, FormControl,Spinner, useToast,Checkbox} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as yup from 'yup'
import { ErrorMessage, Formik } from "formik";
import styleSignIn from "./style";
import api from "../../Services/api";
import { TouchableOpacity } from "react-native";
import { Image } from 'react-native';

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const { navigate, goBack } = useNavigation()
    const [loading, setIsLoanding] = useState(false);
    const toast = useToast();

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    async function goToScreen() {
    navigate('SignUp');
    }

    async function goToHome() {
    navigate('HomePage');
    }
      
    async function goRecoveryPassword() {
    navigate('RecoveryPassword');
    }
      

    const handleSubmit = async (values) => {
        try {
          setIsLoanding(true)
          const response = await api.post('SignIn', {
            email: values.email,
            password: values.password,
          });
          setTimeout(( )=>{
            setIsLoanding(false);
            navigate('HomePage');
          },2000)
        } catch (error) {
            toast.show({
                description: `${error.message}`
            })
          setIsLoanding(false);
        }
      };

    return (
        <Box style={styleSignIn.container}>

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
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
                     <> 
                        <Image source={require('../../Assets/BrandTest2.png')}
                        style={{width:89,height:101, resizeMode:'contain'}}/>
                     
                        <Box style={{width:328,marginTop:64}}>
                        
                        <Text style={{color:'#EBC95D',marginBottom:12,fontFamily:'Ubuntu_500Medium',fontSize:26,
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 24,
                        letterSpacing: 0.5, }}>Bem vindo de volta,</Text>

                        <Text style={{color:'#F0E3C9',fontFamily:'Ubuntu_300Light',fontSize:18,
                        fontStyle: 'normal',
                        fontWeight: 300,
                        lineHeight: 24,
                        letterSpacing: 0.5}}>
                        Estamos felizes em fazer parte da{'\n'} 
                        construção do seu conhecimento!
                        </Text>
                
                        </Box>
                        <Box style={styleSignIn.content}>


                        <Box style={styleSignIn.formContent}>
                            <Box style={styleSignIn.form} >
                                <FormControl isInvalid={!isValid} style={styleSignIn.formControl}>
                                <Text style={styleSignIn.textLabel}>Email or Nickname</Text>
                                    <Input
                                        value={values.email}
                                        onChangeText={(text) => {
                                            handleChange('email')(text)
                                            setFieldTouched('email', true)
                                          }}
                                        onBlur={() => setFieldTouched('email')}
                                        style={styleSignIn.input}
                                        variant="filled"
                                        borderRadius={8}
                                        placeholder="Type your Email"
                                        InputLeftElement={<Icon name="at" size={20} color="#ccc" style={{ marginLeft: 12, marginRight: 12 }} />} />
                                    {touched.email && errors.email &&
                                        <FormControl.ErrorMessage >
                                            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
                                        </FormControl.ErrorMessage>
                                    }

                                </FormControl>
                                <FormControl isInvalid={!isValid} style={styleSignIn.formControl}>
                                    <Text style={styleSignIn.textPassword}>Password</Text>
                                    <Input
                                        value={values.password}
                                        onChangeText={(text) => {
                                            handleChange('password')(text)
                                            setFieldTouched('password', true)
                                          }}
                                        onBlur={() => setFieldTouched('password')}
                                        style={styleSignIn.input}
                                        variant="filled"
                                        borderRadius={8}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Type your Password"
                                        InputLeftElement={<Icon name="lock" size={20} color="#ccc" style={{marginLeft: 12, marginRight: 12 }} />}
                                        InputRightElement={
                                            <Pressable onPress={() => setShowPassword(!showPassword)}>
                                                <Icon name={showPassword ? "eye" : "eye-slash"} size={20} color="#ccc" style={{ marginLeft: 12, marginRight: 12 }} />
                                            </Pressable>} />
                                    <FormControl.ErrorMessage >
                                        {errors.password}
                                    </FormControl.ErrorMessage>
                                </FormControl>
                                        

                                        <Box style={{justifyContent:'space-between',width:328,height:12,alignSelf:'flex-start',marginTop:12}}>
                                        <Checkbox isValid={false} colorScheme="green" value={toggleCheckBox} defaultIsChecked>
                                        <Text style={styleSignIn.textRemember}>Remember me</Text>
                                        <TouchableOpacity onPress={()=>goRecoveryPassword()}>
                                            <Text style={styleSignIn.textForgot}>Forgot Password?</Text>
                                        </TouchableOpacity>
                                        </Checkbox>   
                                        </Box>
                                      



                                </Box>

                            <Box >
                                 <Button onPress={() => handleSubmit()} 
                                     style={styleSignIn.button}
                                 >{loading ? (
                                <Spinner color={'cyan.500'} />
                                ) : (
                                 <Text style={styleSignIn.textSigin}>SIGN IN</Text>
                             )}</Button>
                           </Box> 
                        </Box>
                    </Box>
                </>
                )}
            </Formik>

            <Box style={styleSignIn.boxLinks}>
                <TouchableOpacity onPress={()=>goToScreen()}>
                    <Text style={styleSignIn.textLink}>Don't have an account, sign up?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>goToHome()}>
                    <Text style={styleSignIn.textLink}>Log in as a guest and not use all features?</Text>
                </TouchableOpacity>
            </Box>
        </Box>
    )
}