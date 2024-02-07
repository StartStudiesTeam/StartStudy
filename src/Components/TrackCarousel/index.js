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

const TrackCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    console.log(activeIndex)

    const carouselItems = [
        {
            title: "Formação Da Grecia",
            imageBackground: require("../../Assets/grecia.png"),
        },
        {
            title: "Item 2",
            imageBackground: ''
        },
        {
            title: "Item 3",
            imageBackground: ''
        },
        {
            title: "Item 4",
            imageBackground: ''
        }
    ];

    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.containerItem}>
                <Image source={item.imageBackground} style={styles.background} />
                <Box style={styles.contentItem}>
                    <Text style={styles.title}> {item.title} </Text>
                    {activeIndex === index && (
                        <TouchableOpacity style={styles.button} onPress={() => console.log("Quero assisitir")}>
                            <Text style={styles.buttonText}>Assistir</Text>
                        </TouchableOpacity>
                    )}
                </Box>
            </View>
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
                onSnapToItem={(index) => setActiveIndex(index)}
            />
        </View>

    );
}

export default TrackCarousel;