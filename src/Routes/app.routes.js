import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuTabBottomNavigator from '../Components/MenuTabBottomNavigator';

const AppStack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <MenuTabBottomNavigator />
  );
}

export default AppRoutes;
