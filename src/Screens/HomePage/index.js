import React from "react";
import { Box, ScrollView } from "native-base";
import styles from "./style";
import CardTrackPreview from "../../Components/Cards/CardTrackPreview";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
// import { RoadmapStore } from "../../stores/Roadmap/store";--
export default function HomePage() {
  // const ItemsTrackPreview = RoadmapStore((state) => state.body);

  return (
    <Box style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <SearchBar />
        <Box style={styles.content}>
          {/* {
            ItemsTrackPreview.map((item, index) =>
              <CardTrackPreview
                key={index}
                index={index}
                titleTrack={item.titleTrack}
                userProfile={item.userProfile}
                itemsTrack={item.itemsTrack}
                note={item.newNoteItem}
                titleNote={item.newTitleNote}
              />
            )
          } */}
        </Box>
      </ScrollView>
    </Box>
  );
}