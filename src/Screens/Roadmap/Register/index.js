import React from "react";
import { Box, ScrollView } from "native-base";
import styleRegisterRoad from "./style";
import HeaderRegisterRoadMap from "./components/Header";
import RegistrationBar from "./components/RegistrationBar";
import FormVideo from "./components/FormVideo";



export default function RegisterRoadmap() {
    return (
        <Box style={styleRegisterRoad.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HeaderRegisterRoadMap />
                <RegistrationBar />
                <FormVideo />
            </ScrollView>
        </Box>
    )
}