import React from 'react';
import { View } from 'react-native';
import { Home, Route, Save, User, BadgeAlert } from "lucide-react-native";

const iconMap = {
    home: Home,
    roadmap: Route,
    bookmark: Save,
    account: User,
};

const IconComponent = ({ options, isFocused }) => {
    const Icon = iconMap[options.tabBarIcon];

    if (!Icon) {
        return <BadgeAlert size={24} color={isFocused ? '#F3EFE5' : '#264F75'} />;
    }

    return (
        <View>
            <Icon size={24} color={isFocused ? '#F3EFE5' : '#264F75'} />
        </View>
    );
};

export default IconComponent;