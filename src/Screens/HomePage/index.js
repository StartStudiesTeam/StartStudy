import React from "react";
import { Box, ScrollView } from "native-base";
import styles from "./style";
import CardTrackPreview from "@/Components/Cards/CardTrackPreview";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";

export default function HomePage() {
  return (
    <Box style={styles.container}>
      <Header />
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box style={styles.content}>
          <CardTrackPreview />
        </Box>
      </ScrollView>
    </Box>
  );
}