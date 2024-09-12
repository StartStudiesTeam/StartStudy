import React from "react";
import { Box, ScrollView, Text } from "native-base";
import styleRegisterRoad from "./style";
import HeaderRegisterRoadMap from "./components/Header";
import FormRoadmap from "./components/FormRoadmap";
import { RoadmapStore } from './../../../stores/Roadpmap/store';
import { isNotEmpty } from '../../../utils/Variables';
import TimelineRoadmap from "./components/RoadmapCreate/index";

export default function RegisterRoadmap() {
    const { getCurrentRoadmapId } = RoadmapStore();

    const roadmapId = getCurrentRoadmapId();

    return (
        <Box style={styleRegisterRoad.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HeaderRegisterRoadMap />
                <Text style={styleRegisterRoad.title}> Criar Roadmap</Text>
                <FormRoadmap />
                {
                    isNotEmpty(roadmapId) && <TimelineRoadmap />
                }
            </ScrollView>
        </Box>
    )
}