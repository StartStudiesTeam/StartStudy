import React, { useCallback } from "react";
import { Box, ScrollView, Text } from "native-base";
import { useFocusEffect } from "@react-navigation/native";
import styleRegisterRoad from "./style";
import FormRoadmap from "./components/FormRoadmap";
import { RoadmapStore } from './../../../stores/Roadpmap/store';
import { isNotEmpty } from '../../../utils/Variables';
import TimelineRoadmap from "./components/RoadmapCreate/index";

export default function RegisterRoadmap() {
    const { getCurrentRoadmapId, getRoadmap } = RoadmapStore();
    const [currentRoadmap, setCurrentRoadmap] = React.useState({});
    const [roadmap, setRoadmap] = React.useState({});

    useFocusEffect(
        useCallback(() => {
            const fetchRoadmap = async () => {
                try {
                    const currentRoadmapId = await getCurrentRoadmapId();
                    setCurrentRoadmap(currentRoadmapId);

                    const roadmapData = await getRoadmap({ id: currentRoadmapId });

                    setRoadmap(roadmapData?.body?.data);
                } catch (error) {
                    console.error("Erro ao obter o Roadmap:", error);
                }
            };
            fetchRoadmap();

        }, [])
    );
    console.log("roadmap", roadmap)
    return (
        <Box style={styleRegisterRoad.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styleRegisterRoad.title}> Criar Roadmap</Text>
                <FormRoadmap roadmap={roadmap} />
                {
                    isNotEmpty(currentRoadmap) && <TimelineRoadmap />
                }
            </ScrollView>
        </Box>
    )
}