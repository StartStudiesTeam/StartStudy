import React, { useEffect, useState } from "react";
import { Text, View } from "native-base";
import CardCreateRoadmap from "../CardRoadmap";
import styleCreateRoadmap from "./style";
import { RoadmapStore } from "../../../../../stores/Roadpmap/store";
import { isNotEmpty } from "../../../../../utils/Variables";
import { useFocusEffect } from "@react-navigation/native";
export default TimelineRoadmap = () => {
  const { getCurrentRoadmapId, getRoadmap } = RoadmapStore();
  const [currentRoadmap, setCurrentRoadmap] = useState({});
  const [videosRoadmap, setVideosRoadmap] = useState(null);
  const [error, setError] = useState({ String });

  useFocusEffect(() => {
    const fetchRoadmap = async () => {
      try {
        const currentRoadmapId = await getCurrentRoadmapId();
        setCurrentRoadmap(currentRoadmapId);
        const roadmapData = await getRoadmap({ id: currentRoadmapId });
        setVideosRoadmap(roadmapData?.body?.data?.VideosRoadmap);
      } catch (error) {
        setError(error);
        console.error("Erro ao obter o Roadmap:", error);
      }
    };
    fetchRoadmap();
  });

  return (
    <View style={styleCreateRoadmap.container}>
      {isNotEmpty(currentRoadmap) && (
        <>
          <Text style={styleCreateRoadmap.labelFormVideo}>
            Adicione conteúdos
          </Text>
          <CardCreateRoadmap
            title="Teste"
            content="..."
            index={1}
            type="create"
          />
        </>
      )}

      {videosRoadmap?.map((video: any, index: any) => (
        <CardCreateRoadmap
          key={index}
          title={video?.Videos?.title}
          content={video?.Videos?.description}
          index={index}
        />
      ))}
    </View>
  );
};
