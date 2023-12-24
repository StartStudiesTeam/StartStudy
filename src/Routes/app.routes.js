import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../Screens/SignUp/';
import ConfirmEmail from '../Screens/ConfirmEmail';

const AppStack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="ConfirmEmail"
        component={ConfirmEmail}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
}

export default AppRoutes;
