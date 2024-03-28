import React from "react";
import { Box, Text } from 'native-base';
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styleFormVideo from "./style";




export default function FormVideo() {
    return (
        <Box>
            <Box>
                <Box style={styleFormVideo.boxFormVideo}>
                    <Box style={styleFormVideo.containeLabelFormVideo}>
                        <Text style={styleFormVideo.labelFormVideo}>Content</Text>
                    </Box>
                    <Box style={styleFormVideo.borderFormVideo}>
                        <Box style={styleFormVideo.formVideo}>
                            <TouchableOpacity style={styleFormVideo.containerIconPlay}>
                                <Icon name="play-circle" style={styleFormVideo.iconPlay} />
                            </TouchableOpacity>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}