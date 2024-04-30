import SignUp from '../../Screens/SignUp';
import ConfirmEmail from '../../Screens/ConfirmEmail';
import HomePage from '../../Screens/HomePage'
import Roadmap from '../../Screens/Roadmap/Register';
import MenuTabBottom from '../MenuTabBottom';
import AccountMenu from '../Menus/AccountMenu';
import { useDisclose } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MenuTab = createBottomTabNavigator();

export default function MenuTabBottomNavigator() {
    const { isOpen, onClose, onOpen } = useDisclose();

    return (
        <>
            <AccountMenu isOpen={isOpen} onClose={onClose}> </AccountMenu >
            <MenuTab.Navigator
                initialRouteName='Home'
                backBehavior='history'
                screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false
                }}
                tabBar={props => <MenuTabBottom {...props} />}
            >
                <MenuTab.Screen name="Home" component={HomePage} options={{ tabBarIcon: "home" }} />
                <MenuTab.Screen name="Roadmap" component={Roadmap} options={{ tabBarIcon: "bezier-curve" }} />
                <MenuTab.Screen name="MoreOptions" component={ConfirmEmail} options={{ tabBarIcon: "home", tabBarButton: (props) => null }} />
                <MenuTab.Screen name="SignUp" component={SignUp} options={{ tabBarIcon: "bookmark" }} />
                <MenuTab.Screen name="AccountMenu" component={AccountMenu} options={{ tabBarIcon: "user" }} listeners={{
                    tabPress: e => {
                        onOpen();
                        e.preventDefault();
                    }
                }} />
            </MenuTab.Navigator>
        </>
    );
}
