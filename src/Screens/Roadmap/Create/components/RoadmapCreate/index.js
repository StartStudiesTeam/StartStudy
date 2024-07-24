import React from "react";
import { View } from 'native-base';
import CardCreateRoadmap from "../CardRoadmap";
import styleCreateRoadmap from "./style";

export default TimelineRoadmap = () => {
    return (
        <View style={styleCreateRoadmap.container}>
            <CardCreateRoadmap
                title="Teste"
                content="..."
                index={1}
                type="create"
            />
            <CardCreateRoadmap
                title="Title 2"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                index={2}
            />
        </View>
    )
}