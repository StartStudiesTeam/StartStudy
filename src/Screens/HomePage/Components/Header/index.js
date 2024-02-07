import { Box, Image, Text } from 'native-base';
import styles from './style';

export default function Header() {
    return (
        <Box style={styles.container}>
            <Box>
                <Image source={require('../../../../Assets/BrandTest2.png')} style={styles.brandImage} alt='BrandLogo' />
            </Box>
            <Box style={styles.description}>
                <Text style={[styles.titleAbout, styles.brandSlogan]}>Sua trilha do conhecimento</Text>
                <Text style={[styles.titleAbout, styles.brandName]}>start study</Text>
            </Box>
        </Box>
    )
}
