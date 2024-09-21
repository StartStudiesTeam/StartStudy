import React from "react";
import { View } from "react-native";
import {
  Home,
  Route,
  Save,
  User,
  BadgeAlert,
  LucideIcon,
} from "lucide-react-native";

type IconMap = {
  home: LucideIcon;
  roadmap: LucideIcon;
  bookmark: LucideIcon;
  account: LucideIcon;
};

const iconMap: IconMap = {
  home: Home,
  roadmap: Route,
  bookmark: Save,
  account: User,
};

interface IconComponentProps {
  options: {
    tabBarIcon: keyof IconMap;
  };
  isFocused: boolean;
}

const IconComponent: React.FC<IconComponentProps> = ({
  options,
  isFocused,
}: any) => {
  const Icon = iconMap[options.tabBarIcon as keyof IconMap];

  if (!Icon) {
    return <BadgeAlert size={24} color={isFocused ? "#F3EFE5" : "#264F75"} />;
  }

  return (
    <View>
      <Icon size={24} color={isFocused ? "#F3EFE5" : "#264F75"} />
    </View>
  );
};

export default IconComponent;
