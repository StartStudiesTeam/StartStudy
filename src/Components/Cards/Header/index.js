import { Box, Text, Image } from 'native-base';
import styles from './style';

export default function HeaderCard() {

    const data = {
        title: "Title Track Here",
        profile: {
            nick: "nick_name_here",
            photo: "https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small_2x/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
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