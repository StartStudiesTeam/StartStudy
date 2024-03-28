import { Box, Image, Text, Input, TextArea } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styleRegistration from './style';


export default function RegistrationBar() {
    return (
        <Box>
            <Box>
                <Box style={styleRegistration.container}>
                    <Box style={styleRegistration.containerInput}>
                        <Text style={styleRegistration.labelInput}>Title</Text>
                        <Input
                            style={styleRegistration.input}
                            backgroundColor={"#fff"}
                            borderRadius={8}
                            placeholder='Title of RoadMap'
                            InputLeftElement={<Icon name='film' style={styleRegistration.iconInput } />}
                        />
                    </Box>
                    <Box style={styleRegistration.containerTextArea}>
                        <Text style={styleRegistration.labelTextArea}>Label Name</Text>
                        <TextArea
                            style={styleRegistration.textArea}
                            height={121}
                            borderRadius={8}
                            backgroundColor={"#fff"}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
