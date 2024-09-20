import React from "react";
import { Box, Text, Image } from "native-base";
import styles from "./style";

export default function HeaderCard(data: {
  title: string;
  profile: any;
  photoProfile?: any;
}) {
  return (
    <Box style={styles.container}>
      <Box>
        <Text style={styles.title}> {data?.title} </Text>
        <Box style={styles.profile}>
          <Image
            source={data?.profile?.photoProfile}
            style={styles.photo}
          ></Image>
          <Text style={styles.nick}>@ {data?.profile?.nickName} </Text>
        </Box>
      </Box>
    </Box>
  );
}
