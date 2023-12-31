import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../Screens/SignUp/';
import SignIn from '../Screens/SignIn/';
import ConfirmEmail from '../Screens/ConfirmEmail';
import CodeConfirm from '../Screens/CodeConfirm';
import RecoveryPassword from '../Screens/RecoveryPassword';


const AppStack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <AppStack.Navigator initialRouteName="SignIn">
      <AppStack.Screen
        name="ConfirmEmail"
        component={ConfirmEmail}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="CodeConfirm"
        component={CodeConfirm}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="RecoveryPassword"
        component={RecoveryPassword}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
}

export default AppRoutes;
