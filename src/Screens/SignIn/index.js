import { React, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Input, Box, Text, Button, Link, Pressable, FormControl } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import styleSignIn from "./style";

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const { navigate, goBack } = useNavigation();

    async function goToScreen() {
        navigate('SignUp');
    }

    return (
        <Box style={styleSignIn.container} >
            <Box style={styleSignIn.content}>
                <Box style={styleSignIn.brand}></Box>
                <Box style={styleSignIn.formContent}>
                    <Box style={styleSignIn.form} >
                        <FormControl isInvalid={false} style={styleSignIn.formControl}>
                            <FormControl.Label style={styleSignIn.labelInput} >Email</FormControl.Label>
                            <Input
                                style={styleSignIn.input}
                                variant="filled"
                                placeholder="Type your Email"
                                InputLeftElement={<Icon name="at" size={20} color="#ccc" style={{ marginLeft: 12, marginRight: 12 }} />} />
                            <FormControl.ErrorMessage >
                                Try different from previous passwords.
                            </FormControl.ErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={false} style={styleSignIn.formControl}>
                            <FormControl.Label style={styleSignIn.labelInput}>Password</FormControl.Label>
                            <Input
                                style={styleSignIn.input}
                                variant="filled"
                                type={showPassword ? "text" : "password"}
                                placeholder="Type your Password"
                                InputLeftElement={<Icon name="lock" size={20} color="#ccc" style={{ marginLeft: 12, marginRight: 12 }} />}
                                InputRightElement={<Pressable onPress={() => setShowPassword(!showPassword)}>
                                    <Icon name={showPassword ? "eye" : "eye-slash"} size={20} color="#ccc" style={{ marginLeft: 12, marginRight: 12 }} />
                                </Pressable>} />
                            <FormControl.ErrorMessage >
                                Try different from previous passwords.
                            </FormControl.ErrorMessage>
                        </FormControl>
                        <Link style={styleSignIn.link} href="#" onPress={() => goToScreen()}>
                            Already have an account, sign in?
                        </Link>
                    </Box>
                    <Button onPress={() => Authenticate()} style={styleSignIn.button}>Sign In</Button>
                </Box>
            </Box>
        </Box>
    )
}