import { Box, Text, Image } from 'native-base';
import styles from './style';

export default function HeaderCard(props) {

    const data = {
        title: props.title,
        profile: {
            nick: props.profile.nick,
            photo: props.photoProfile
        }
    }

    return (
        <Box style={styles.container}>
            <Box>
                <Text style={styles.title}> {data.title} </Text>
                <Box style={styles.profile}>
                    <Image source={data.profile.photo} style={styles.photo}></Image>
                    <Text style={styles.nick}>@ {data.profile.nick} </Text>
                </Box>
            </Box>
        </Box>
    );
}