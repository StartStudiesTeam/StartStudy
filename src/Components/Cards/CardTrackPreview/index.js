import { Box, View, Image, ScrollView, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../../Cards/Header';
import Note from '../../Cards/CardTrackPreview/Note';
import TrackCarousel from '../../TrackCarousel';

import styles from './style';

export default function CardTrackPreview() {
    return (
        <View style={styles.container}>
            <Box style={styles.header}>
                <Header />
                <Icon name='angle-right' size={24} style={styles.icon} color='#0B2C37' />
            </Box>
            <Note />
            <Box>
                <TrackCarousel />
            </Box>
        </View>
    );
}
