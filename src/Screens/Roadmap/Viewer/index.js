import React from "react";
import { Box, Text, ScrollView, Button, Avatar } from "native-base";
import { NotebookPen } from "lucide-react-native";

import Roadmap from "./components/TimelineRoadmap";
import styleViewer from "./style";

export default function ViewerRoadmap() {
    return (
        <Box style={styleViewer.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Box style={styleViewer.content}>
                    <Text style={styleViewer.titleRoadmap}>Title Roadmap</Text>
                    <Button style={styleViewer.resumeButton} size={"xs"} leftIcon={<NotebookPen color="white" size={16} />}>Resumo</Button>

                    <Box style={styleViewer.profileOwnerRoadmap}>
                        <Avatar></Avatar>
                        <Box>
                            <Text style={styleViewer.profileOwnerRoadmapName}>Samuel Jesus</Text>
                            <Text style={styleViewer.profileNickname}>@samukita</Text>
                        </Box>
                    </Box>

                    <Roadmap />
                </Box>
            </ScrollView>
        </Box>
    )
}