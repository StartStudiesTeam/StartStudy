import { View } from 'native-base';
import { TouchableOpacity } from 'react-native';
import styleMenuTab from './style';
import MoreOptions from '../Buttons/MoreOptions';
import IconComponent from './Icons';

export default function MenuTabBottom({ state, descriptors, navigation }) {
    return (
        <View style={styleMenuTab.BarStyle}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                if (route.name === 'MoreOptions') {
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                        >
                            <MoreOptions
                            />

                        </TouchableOpacity>
                    );
                } else {
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                        >
                            <View style={[styleMenuTab.ItemStyle, { backgroundColor: isFocused ? '#264F75' : 'white' }]} >
                                <IconComponent options={options} isFocused={isFocused} />
                            </View>
                        </TouchableOpacity>
                    );
                }
            })}
        </View>
    );
}