
import { Box, Button, FormControl, Input, ScrollView, Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';

export default function SearchBar() {
    return (
        <>
            <Box style={styles.containerSearch}>

                <FormControl style={styles.formControlWrapper}>
                    <Input style={styles.inputSearch} placeholder="Pesquisar" borderRadius={8}/>
                </FormControl>

                <Button style={styles.buttonSearch}><Icon name="search" size={16} /></Button>
            </Box>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Box style={styles.containerTopics}>
                    <Box style={styles.topic} backgroundColor={'#CBDCBD'}><Text style={styles.textTopic}>Português</Text></Box>
                    <Box style={styles.topic} backgroundColor={'#F0E3C9'}><Text style={styles.textTopic}>Matemática</Text></Box>
                    <Box style={styles.topic} backgroundColor={'#B1D5DE'}><Text style={styles.textTopic}>Física</Text></Box>
                    <Box style={styles.topic} backgroundColor={'#4DA99C'}><Text style={styles.textTopic}>Programação</Text></Box>
                    <Box style={styles.topic} backgroundColor={'#CBDCBD'}><Text style={styles.textTopic}>Inglês</Text></Box>
                    <Box style={styles.topic} backgroundColor={'#F0E3C9'}><Text style={styles.textTopic}>Russo</Text></Box>
                    <Box style={styles.topic} backgroundColor={'#B1D5DE'}><Text style={styles.textTopic}>Crochê</Text></Box>
                </Box>
            </ScrollView>
        </>
    );
}
{/*  */ }