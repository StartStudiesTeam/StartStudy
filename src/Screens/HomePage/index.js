import React, { useState } from "react";
import { Box, Text, Button, ScrollView, Input, FormControl, Pressable } from "native-base";
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from "./style";

export default function HomePage() {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box>
          <Box style={style.topMenu}>
            <Box>
              <Icon name="angle-left" style={style.iconAngleLeft} />
              <Text style={style.titleHome}>Home Page</Text>
              <Icon name="sign-out" style={style.iconSignOut} />
            </Box>
          </Box>
          <Box style={style.containerTitle}>
            <Text style={style.titleStartStudy}>START STUDY</Text>
            <Text style={style.titleStartStudy}>SUA TRILHA DO CONHECIMENTO</Text>
          </Box>
          <Box style={style.containerSearch}>
            <FormControl>
              <Input
                placeholder="Search your trail"
                width={300}
                borderRadius={8}
                style={style.Search}
              />
            </FormControl>
            <Button style={style.buttonSearch}><Icon name="search" /></Button>
          </Box>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Box style={style.containerTopics}>
              <Box style={style.topic}><Text style={style.textTopic}>Start Study</Text></Box>
              <Box style={style.topic}><Text style={style.textTopic}>Start Study</Text></Box>
              <Box style={style.topic}><Text style={style.textTopic}>Start Study</Text></Box>
              <Box style={style.topic}><Text style={style.textTopic}>Start Study</Text></Box>
            </Box>
          </ScrollView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Box style={style.containerTrail}>
              <Box style={style.trail}></Box>
              <Box style={style.trail}></Box>
              <Box style={style.trail}></Box>
              <Box style={style.trail}></Box>
              <Box style={style.trail}></Box>
            </Box>
          </ScrollView>
        </Box>
      </ScrollView>
    </Box>
  );
}
