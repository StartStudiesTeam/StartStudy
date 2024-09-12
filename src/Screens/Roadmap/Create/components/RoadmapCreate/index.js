import React, { useEffect, useState } from "react";
import { Text, View } from 'native-base';
import CardCreateRoadmap from "../CardRoadmap";
import styleCreateRoadmap from "./style";
import { RoadmapStore } from "../../../../../stores/Roadpmap/store";
export default TimelineRoadmap = () => {
    const { getCurrentRoadmapId, getRoadmap } = RoadmapStore();
    const [videosRoadmap, setVideosRoadmap] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchRoadmap = async () => {
            try {
                const currentRoadmapId = await getCurrentRoadmapId();
                const roadmapData = await getRoadmap({ id: currentRoadmapId });

                setVideosRoadmap(roadmapData?.body?.data?.VideosRoadmap);
            } catch (error) {
                setError(error);
                console.error('Erro ao obter o Roadmap:', error);
            }
        };
        fetchRoadmap();
    }, [getCurrentRoadmapId, getRoadmap]);

    return (
        <View style={styleCreateRoadmap.container}>
            <Text style={styleCreateRoadmap.labelFormVideo}> Adicionar conteúdos </Text>
            <CardCreateRoadmap
                title="Teste"
                content="..."
                index={1}
                type="create"
            />
            {
                videosRoadmap?.map((video, index) => (
                    <CardCreateRoadmap
                        key={index}
                        title={video?.Videos?.title}
                        content={video?.Videos?.description}
                        index={index}
                    />
                ))
            }
        </View>
    )
}