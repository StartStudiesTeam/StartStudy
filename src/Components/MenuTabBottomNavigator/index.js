import SignUp from '../../Screens/SignUp';
import SignIn from '../../Screens/SignIn';
import ConfirmEmail from '../../Screens/ConfirmEmail';
import RecoveryPassword from '../../Screens/RecoveryPassword';
import HomePage from '../../Screens/HomePage'
import MenuTabBottom from '../MenuTabBottom';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MenuTab = createBottomTabNavigator();

export default function MenuTabBottomNavigator() {
    return (
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
            <MenuTab.Screen name="SignIn" component={SignIn} options={{ tabBarIcon: "bezier-curve" }} />
            <MenuTab.Screen name="MoreOptions" component={ConfirmEmail} options={{ tabBarIcon: "home", tabBarButton: (props) => null }} />
            <MenuTab.Screen name="SignUp" component={SignUp} options={{ tabBarIcon: "bookmark" }} />
            <MenuTab.Screen name="RecoveryPassword" component={RecoveryPassword} options={{ tabBarIcon: "user" }} />
        </MenuTab.Navigator>
    );
}
