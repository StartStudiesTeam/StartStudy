import { Box, Image, Text } from 'native-base';
import styleHeader from './style';

export default function HeaderRegisterRoadMap() {
    return (
        <Box style={styleHeader.container}>
            <Box>
                <Image source={require('../../../../../Assets/BrandTest2.png')} style={styleHeader.brandImage} alt='BrandLogo' />
            </Box>
            <Box style={styleHeader.description}>
                <Text style={[styleHeader.titleAbout, styleHeader.brandSlogan]}>Sua trilha do conhecimento</Text>
                <Text style={[styleHeader.titleAbout, styleHeader.brandName]}>start study</Text>
            </Box>
        </Box>
    )
}
