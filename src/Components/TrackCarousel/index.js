import {
    Text,
    View,
    Box,
    Image
} from 'native-base';
import { useState } from "react";
import Carousel from 'react-native-snap-carousel';
import styles from "./style";
import { TouchableOpacity } from 'react-native';
import { TrackPreviewStore } from "../../stores/Track/store";

const TrackCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const { updateNote } = TrackPreviewStore();

    const carouselItems = props.items

    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.containerItem}>
                <Image source={{ uri: item.imageBackground }} style={styles.background} alt='Background' />
                <Box style={styles.contentItem}>
                    <Text style={styles.title}> {item.title} </Text>
                    {activeIndex === index && (
                        <View>
                            <TouchableOpacity TouchableOpacity style={styles.button} onPress={() => console.log("Quero assisitir")}>
                                <Text style={styles.buttonText}>Assistir</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Box>
            </View >
        );
    };

    return (

        <View style={styles.container}>
            <Carousel
                layout={"default"}
                data={carouselItems}
                sliderWidth={380}
                itemWidth={124}
                renderItem={_renderItem}
                onSnapToItem={(index) => {
                    setActiveIndex(index);

                    const item = carouselItems[index];

                    updateNote(props.index, { title: item.title, note: item.note });
                }}
            />
        </View>

    );
}

export default TrackCarousel;