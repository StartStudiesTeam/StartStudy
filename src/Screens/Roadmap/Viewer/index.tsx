import { Box, Button, Heading, ScrollView } from "native-base";
import React, { useEffect, useState } from "react";
import styleRoadmapViewer from "./style";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { FiltersButton } from "./components/FiltersButton/FiltersButton";

import { RoadmapStore } from "../../../stores/Roadpmap/store";
import CardRoadmap from "../../../Components/Cards/CardRoadmap";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export const RoadmapViewer = () => {
  const navigation = useNavigation();
  const { getRoadmaps, setCurrentRoadmapId } = RoadmapStore();
  const [roadmaps, setRoadmaps] = useState([]);

  const redirectToCreate = async () => {
    await setCurrentRoadmapId("");
    navigation.navigate("Create");
  };

  useFocusEffect(() => {
    const fetchRoadmaps = async () => {
      const fetchResponse = await getRoadmaps();
      setRoadmaps(fetchResponse?.body?.data);
    };

    fetchRoadmaps();
  });

  return (
    <Box style={styleRoadmapViewer.container}>
      <Box
        justifyContent="space-between"
        alignItems="center"
        style={[styleRoadmapViewer.header]}
      >
        <Heading style={[styleRoadmapViewer.title]}>Roadmaps</Heading>
        <Button
          variant={"solid"}
          size={"sm"}
          style={styleRoadmapViewer.headerButton}
          onPress={() => {
            redirectToCreate();
          }}
        >
          Criar
        </Button>
      </Box>
      <Box style={styleRoadmapViewer.searchBar}>
        <SearchBar />
      </Box>
      <Box style={{ marginVertical: 12 }}>
        <FiltersButton />
      </Box>
      <ScrollView showsVerticalScrollIndicator={false}>
        {roadmaps?.map((item: any, index: any) => (
          <CardRoadmap
            key={index}
            index={index}
            id={item?.id}
            titleTrack={item?.title}
            userProfile={item?.Users}
            itemsTrack={item?.VideosRoadmap}
            note={item?.description}
            titleNote={item?.newTitleNote}
          />
        ))}
      </ScrollView>
    </Box>
  );
};
