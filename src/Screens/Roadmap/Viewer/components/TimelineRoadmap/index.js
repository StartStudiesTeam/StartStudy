import React from "react";
import { View } from 'native-base';

import CardRoadmap from "../CardRoadmap";
import styleTimelineRoadmap from "./style";

export default TimelineRoadmap = () => {
    return (
        <View style={styleTimelineRoadmap.container}>
            <CardRoadmap
                title="Teste"
                content="..."
                index={1}
            />
            <CardRoadmap
                title="Title 2"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                index={2}
            />
            <CardRoadmap
                title="Title 3"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                index={3}
            />
        </View>
    )
}