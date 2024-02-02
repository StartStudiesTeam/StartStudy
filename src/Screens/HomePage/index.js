import React, { useState } from "react";
import { Box, Text, Button, ScrollView, Input, FormControl, Pressable} from "native-base";
import { Animated } from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./style";

export default function HomePage() {
  return (
    <Box flex={1} alignItems="center" justifyContent="center" style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box>
          <Box style={styles.containerTitle} borderRadius={8}>
            <Box style={styles.titleStartStudy}>
              <Image source={require('../../Assets/BrandTest2.png')} style={styles.image} />
              <Text style={[styles.titleAbout, styles.titleAboutOne]}>SUA TRILHA DO CONHECIMENTO</Text>
              <Text style={[styles.titleAbout, styles.titleAboutSecond]}>START STUDY</Text>
            </Box>
          </Box>
          <Box style={styles.containerSearch}>
            <FormControl>
              <Input
                width={300}
                height={44}
                borderRadius={8}
                style={styles.Search}
              />
            </FormControl>
            <Button style={styles.buttonSearch}><Icon name="search" size={17}  /></Button>
          </Box>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Box style={styles.containerTopics}>
              <Box style={styles.topic} backgroundColor={'#CBDCBD'}><Text style={styles.textTopic}>Português</Text></Box>
              <Box style={styles.topic} backgroundColor={'#F0E3C9'}><Text style={styles.textTopic}>Matemática</Text></Box>
              <Box style={styles.topic} backgroundColor={'#B1D5DE'}><Text style={styles.textTopic}>Física</Text></Box>
              <Box style={styles.topic} backgroundColor={'#4DA99C'}><Text style={styles.textTopic}>Programação</Text></Box>
            </Box>
          </ScrollView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Box style={styles.containerTrail}>
              <Box style={styles.cardtrail}>
                <Box style={styles.containerTrackTrail}>
                  <Text style={styles.nameTrail}>Title Track Here</Text>
                  <Box style={styles.userTrack}>
                    <Box style={styles.photoProfile}></Box>
                    <Text style={styles.nameUser}>@nick_name_here</Text>
                  </Box>
                  <Box style={styles.iconArrowTrail}><Icon name="hand-o-right" size={20} /></Box>
                </Box>
                <Box style={styles.containerAboutTrail}>
                  <Box>
                    <Text style={styles.aboutTitleName}>Coliseu</Text>
                    <Icon name="file-text-o" size={17} style={styles.iconFIleAbout}/>
                    <Icon name="circle" style={{fontSize: 6, top: -10, color: '#0B2C37BF'}} /><Text style={styles.listAbout}>Cretense e Micênicos</Text>
                    <Icon name="circle" style={{fontSize: 6, top: -10, color: '#0B2C37BF'}} /><Text style={styles.listAbout}>Os povos gregos</Text>
                    <Text style={styles.sumaryAbout}>A construção começou sob o governo de 72 d.C. e foi com latim desta maneira por sua associação com o nome da família (Fla...</Text>
                  </Box>
                </Box>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Box>
                    <Image source={require('../../Assets/grecia.png')} style={styles.trailPlayImage}/>
                    <Box style={styles.containerPlayTrack}>
                      <Text style={styles.textPlayTrack}>Formação{'\n'}da Grecia</Text>
                      <Box style={styles.containerButtonPlayTrack}>
                        <Text style={styles.textbuttonPlayTrack}>Assistir</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Image source={require('../../Assets/imagePaises.png')} style={styles.trailPlayImage}/>
                    <Box style={styles.containerPlayTrack}>
                      <Text style={styles.textPlayTrack}>Formação{'\n'}da Grecia</Text>
                      <Box style={styles.containerButtonPlayTrack}>
                        <Text style={styles.textbuttonPlayTrack}>Assistir</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Image source={require('../../Assets/grecia.png')} style={styles.trailPlayImage}/>
                    <Box style={styles.containerPlayTrack}>
                      <Text style={styles.textPlayTrack}>Formação{'\n'}da Grecia</Text>
                      <Box style={styles.containerButtonPlayTrack}>
                        <Text style={styles.textbuttonPlayTrack}>Assistir</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Image source={require('../../Assets/imagePaises.png')} style={styles.trailPlayImage}/>
                    <Box style={styles.containerPlayTrack}>
                      <Text style={styles.textPlayTrack}>Formação{'\n'}da Grecia</Text>
                      <Box style={styles.containerButtonPlayTrack}>
                        <Text style={styles.textbuttonPlayTrack}>Assistir</Text>
                      </Box>
                    </Box>
                  </Box>
                </ScrollView>
              </Box>
              <Box style={styles.cardtrail}>
                <Box style={styles.containerTrackTrail}>
                  <Text style={styles.nameTrail}>Title Track Here</Text>
                  <Box style={styles.userTrack}>
                    <Box style={styles.photoProfile}></Box>
                    <Text style={styles.nameUser}>@nick_name_here</Text>
                  </Box>
                  <Box style={styles.iconArrowTrail}><Icon name="hand-o-right" size={20} /></Box>
                </Box>
                <Box style={styles.containerAboutTrail}>
                  <Box>
                    <Text style={styles.aboutTitleName}>Coliseu</Text>
                    <Icon name="file-text-o" size={17} style={styles.iconFIleAbout}/>
                    <Icon name="circle" style={{fontSize: 6, top: -10, color: '#0B2C37BF'}} /><Text style={styles.listAbout}>Cretense e Micênicos</Text>
                    <Icon name="circle" style={{fontSize: 6, top: -10, color: '#0B2C37BF'}} /><Text style={styles.listAbout}>Os povos gregos</Text>
                    <Text style={styles.sumaryAbout}>A construção começou sob o governo de 72 d.C. e foi com latim desta maneira por sua associação com o nome da família (Fla...</Text>
                  </Box>
                </Box>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Box>
                    <Image source={require('../../Assets/grecia.png')} style={styles.trailPlayImage}/>
                    <Box style={styles.containerPlayTrack}>
                      <Text style={styles.textPlayTrack}>Formação{'\n'}da Grecia</Text>
                      <Box style={styles.containerButtonPlayTrack}>
                        <Text style={styles.textbuttonPlayTrack}>Assistir</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Image source={require('../../Assets/imagePaises.png')} style={styles.trailPlayImage}/>
                    <Box style={styles.containerPlayTrack}>
                      <Text style={styles.textPlayTrack}>Formação{'\n'}da Grecia</Text>
                      <Box style={styles.containerButtonPlayTrack}>
                        <Text style={styles.textbuttonPlayTrack}>Assistir</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Image source={require('../../Assets/grecia.png')} style={styles.trailPlayImage}/>
                    <Box style={styles.containerPlayTrack}>
                      <Text style={styles.textPlayTrack}>Formação{'\n'}da Grecia</Text>
                      <Box style={styles.containerButtonPlayTrack}>
                        <Text style={styles.textbuttonPlayTrack}>Assistir</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Image source={require('../../Assets/imagePaises.png')} style={styles.trailPlayImage}/>
                    <Box style={styles.containerPlayTrack}>
                      <Text style={styles.textPlayTrack}>Formação{'\n'}da Grecia</Text>
                      <Box style={styles.containerButtonPlayTrack}>
                        <Text style={styles.textbuttonPlayTrack}>Assistir</Text>
                      </Box>
                    </Box>
                  </Box>
                </ScrollView>
              </Box>
            </Box>
          </ScrollView>
        </Box>
      </ScrollView>
    </Box>
  );
}