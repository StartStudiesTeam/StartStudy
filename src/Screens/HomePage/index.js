import React, { useState } from "react";
import { Box, Text, Button, ScrollView, Input, FormControl, Pressable } from "native-base";
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styleHomePage from "./style";

export default function HomePage() {
  const [icon_1] = useState(new Animated.Value(40))
  const [icon_2] = useState(new Animated.Value(40))
  const [icon_3] = useState(new Animated.Value(40))
  const [icon_4] = useState(new Animated.Value(40))

  const [pop, setPop] = useState(false)

  const popIn = () => {
    setPop(true)
    Animated.timing(icon_1, {
      toValue: 120,
      right: 20,
      duration: 500,
      useNativeDriver: false,
    }).start()
    Animated.timing(icon_2, {
      toValue: 110,
      duration: 500,
      useNativeDriver: false,
    }).start()
    Animated.timing(icon_3, {
      toValue: 110,
      duration: 500,
      useNativeDriver: false,
    }).start()
    Animated.timing(icon_4, {
      toValue: -30,
      duration: 500,
      useNativeDriver: false,
    }).start()
  }

  const popOut = () => {
    setPop(false)
    Animated.timing(icon_1, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start()
    Animated.timing(icon_2, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start()
    Animated.timing(icon_3, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start()
    Animated.timing(icon_4, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start()
  }

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box>
          <Box style={styleHomePage.topMenu}>
            <Box>
              <Icon name="angle-left" style={styleHomePage.iconAngleLeft} />
              <Text style={styleHomePage.titleHome}>Home Page</Text>
              <Icon name="sign-out" style={styleHomePage.iconSignOut} />
            </Box>
          </Box>
          <Box style={styleHomePage.containerTitle}>
            <Text style={styleHomePage.titleStartStudy}>START STUDY</Text>
            <Text style={styleHomePage.titleStartStudy}>SUA TRILHA DO CONHECIMENTO</Text>
          </Box>
          <Box style={styleHomePage.containerSearch}>
            <FormControl>
              <Input
                placeholder="Search your trail"
                width={300}
                borderRadius={8}
                style={styleHomePage.Search}
              />
            </FormControl>
            <Button style={styleHomePage.buttonSearch}><Icon name="search" /></Button>
          </Box>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Box style={styleHomePage.containerTopics}>
              <Box style={styleHomePage.topic}><Text style={styleHomePage.textTopic}>Start Study</Text></Box>
              <Box style={styleHomePage.topic}><Text style={styleHomePage.textTopic}>Start Study</Text></Box>
              <Box style={styleHomePage.topic}><Text style={styleHomePage.textTopic}>Start Study</Text></Box>
              <Box style={styleHomePage.topic}><Text style={styleHomePage.textTopic}>Start Study</Text></Box>
            </Box>
          </ScrollView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Box style={styleHomePage.containerTrail}>
              <Box style={styleHomePage.trail}></Box>
              <Box style={styleHomePage.trail}></Box>
              <Box style={styleHomePage.trail}></Box>
              <Box style={styleHomePage.trail}></Box>
              <Box style={styleHomePage.trail}></Box>
            </Box>
          </ScrollView>
        </Box>
      </ScrollView>
          <Box>
            <Animated.View style={[styleHomePage.buttonOptions, { bottom: icon_1}]}>
              <Pressable>
                <Icon name="cloud-upload" />
              </Pressable>
            </Animated.View>

            <Animated.View style={[styleHomePage.buttonOptions, {bottom: icon_2, right: icon_2}]}>
              <Pressable>
                <Icon name="cloud-upload" />
              </Pressable>
            </Animated.View>

            <Animated.View style={[styleHomePage.buttonOptions, {right: icon_3}]}>
              <Pressable>
                <Icon name="cloud-upload" />
              </Pressable>
            </Animated.View>

            <Animated.View style={[styleHomePage.buttonOptions, { right: icon_4}]}>
              <Pressable>
                <Icon name="cloud-upload" />
              </Pressable>
            </Animated.View>

            <Pressable
              style={styleHomePage.buttonOptions}
              onPress={() => {
                pop === false ? popIn() : popOut()
              }}
            >
              <Icon name="plus" size={20}/>
            </Pressable>
          </Box>
    </Box>
  );
}
