import { useState } from "react"
import { Animated, View, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Plus } from "lucide-react-native";

import styles from "./style"

const MoreOptions = props => {

    const [animation] = useState(new Animated.Value(0))

    const toogleMenu = () => {
        const toValue = this.open ? 0 : 1

        Animated.spring(animation, {
            toValue,
            friction: 5,
            useNativeDriver: true
        }).start()

        this.open = !this.open
    }

    const rotation = {
        transform: [
            {
                rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '45deg']
                })
            }
        ]
    }

    const item4 = {
        transform: [
            {
                scale: animation
            },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -30]
                })
            },
            {
                translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -90]
                })
            }
        ]
    }
    const item3 = {
        transform: [
            {
                scale: animation
            },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -82]
                })
            },
            {
                translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -60]
                })
            }
        ]
    }

    const item2 = {
        transform: [
            {
                scale: animation
            },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -100]
                })
            },
            {
                translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0]
                })
            }
        ]
    }

    const item1 = {
        transform: [
            {
                scale: animation
            },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -82]
                })
            },
            {
                translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 60]
                })
            }
        ]
    }

    const item = {
        transform: [
            {
                scale: animation
            },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -30]
                })
            },
            {
                translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 90]
                })
            }
        ]
    }
    return (

        <View style={{ ...styles.screen, ...props.style }}>
            <TouchableWithoutFeedback onPress={() => { }}>
                <Animated.View style={[styles.button, styles.secondary, item4]}>
                    <Icon name='subway' color='#231F20' size={22} />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => { }}>
                <Animated.View style={[styles.button, styles.secondary, item3]}>
                    <Icon name='tachometer-alt' color='#231F20' size={22} />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => { }}>
                <Animated.View style={[styles.button, styles.secondary, item2]}>
                    <Icon name='tasks' color='#231F20' size={22} />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => { }}>
                <Animated.View style={[styles.button, styles.secondary, item1]}>
                    <Icon name='plus' color='#231F20' size={22} />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => { }}>
                <Animated.View style={[styles.button, styles.secondary, item]}>
                    <Icon name='th-large' color='#231F20' size={22} />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => { toogleMenu() }}>
                <Animated.View style={[styles.button, styles.menu, rotation]}>
                    <Plus size={24} color='#264F75' />
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default MoreOptions


