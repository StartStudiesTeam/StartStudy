import React from "react";
import { useNavigationState } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDisclose } from "native-base";

import ConfirmEmail from "../../Screens/ConfirmEmail";
import HomePage from "../../Screens/HomePage";
import MenuTabBottom from "../MenuTabBottom";
import AccountMenu from "../Menus/AccountMenu";
import { RoadmapViewer } from "../../Screens/Roadmap/Viewer";
import RegisterRoadmap from "../../Screens/Roadmap/Create";
import TimelineTrack from "../../Screens/Roadmap/TimelineTrack";
import { RoutesAppList } from "../../Routes/interfaces/types";

const MenuTab = createBottomTabNavigator();

export default function MenuTabBottomNavigator<RoutesAppList>() {
  const { isOpen, onClose, onOpen } = useDisclose();
  const notShowIn = [
    "SignUp",
    "SignIn",
    "CodeConfirm",
    "RecoveryPassword",
    "ConfirmEmail",
  ];
  const state = useNavigationState((state) => state);
  const currentRouteName = state?.routes[state.index]?.name;

  if (notShowIn.includes(currentRouteName)) {
    return null;
  }

  return (
    <>
      <AccountMenu isOpen={isOpen} onClose={onClose}></AccountMenu>
      <MenuTab.Navigator
        initialRouteName="Home"
        backBehavior="history"
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
        }}
        tabBar={(props) => <MenuTabBottom {...props} />}
      >
        <MenuTab.Screen
          name="Home"
          component={HomePage}
          options={{ tabBarIcon: "home" }}
        />
        <MenuTab.Screen
          name="Roadmap"
          component={RoadmapViewer}
          options={{ tabBarIcon: "roadmap" }}
        />
        <MenuTab.Screen
          name="MoreOptions"
          component={ConfirmEmail}
          options={{ tabBarIcon: "options", tabBarButton: (props) => null }}
        />
        <MenuTab.Screen
          name="Create"
          component={RegisterRoadmap}
          options={{ tabBarIcon: "bookmark" }}
        />
        <MenuTab.Screen
          name="AccountMenu"
          component={AccountMenu}
          options={{ tabBarIcon: "account" }}
          listeners={{
            tabPress: (e) => {
              onOpen();
              e.preventDefault();
            },
          }}
        />
      </MenuTab.Navigator>
    </>
  );
}
