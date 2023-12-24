import React from "react";
import { Input, Box, Text, Button, ScrollView, Link, Pressable } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import styleSignIn from "./style";

export default function SignIn() {
    return (
        <Box flex={1} bg="#B6B1B1" alignItems="center" justifyContent="center">
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styleSignIn.scrollContainer}>

                <Box style={styleSignIn.container}>
                    <Text style={styleSignIn.labelInput}>Email</Text>
                    <Input style={styleSignIn.input} variant="filled" placeholder="Type your Email" />

                    <Text style={styleSignIn.labelInput}>Password</Text>
                    <Input style={styleSignIn.input} variant="filled" placeholder="Type your Password" />
                    
                    <Box style={styleSignIn.linkSignIn}>
                        <Link href="#"><Text style={styleSignIn.linkSignIn} >Já tem conta, fazer login?</Text></Link>
                    </Box>
                </Box>
                
                <Box >
                    <Button style={styleSignIn.button}>SIGN IN</Button>
                </Box>

            </ScrollView>
        </Box>
    )
}