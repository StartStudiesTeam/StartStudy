import React, { useState } from "react";
import { Box, Text, Button, ScrollView, Input, FormControl, Pressable} from "native-base";
import { Animated } from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from "./style";

export default function HomePage() {
  return (
    <Box flex={1} alignItems="center" justifyContent="center" style={styleHomePage.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box>
          <Box style={styleHomePage.containerTitle} borderRadius={8}>
            <Box style={styleHomePage.titleStartStudy}>
              <Image source={require('../../Assets/BrandTest2.png')} style={styleHomePage.image} />
              <Text style={[styleHomePage.titleAbout, styleHomePage.titleAboutOne]}>SUA TRILHA DO CONHECIMENTO</Text>
              <Text style={[styleHomePage.titleAbout, styleHomePage.titleAboutSecond]}>START STUDY</Text>
            </Box>
          </Box>
          <Box style={styleHomePage.containerSearch}>
            <FormControl>
              <Input
                width={300}
                height={44}
                borderRadius={8}
                style={style.Search}
              />
            </FormControl>
            <Button style={styleHomePage.buttonSearch}><Icon name="search" size={17}  /></Button>
          </Box>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Box style={styleHomePage.containerTopics}>
              <Box style={styleHomePage.topic} backgroundColor={'#CBDCBD'}><Text style={styleHomePage.textTopic}>Português</Text></Box>
              <Box style={styleHomePage.topic} backgroundColor={'#F0E3C9'}><Text style={styleHomePage.textTopic}>Matemática</Text></Box>
              <Box style={styleHomePage.topic} backgroundColor={'#B1D5DE'}><Text style={styleHomePage.textTopic}>Física</Text></Box>
              <Box style={styleHomePage.topic} backgroundColor={'#4DA99C'}><Text style={styleHomePage.textTopic}>Programação</Text></Box>
            </Box>
          </ScrollView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Box style={styleHomePage.containerTrail}>
              <Box style={styleHomePage.cardtrail}>
                <Box style={styleHomePage.containerTrackTrail}>
                  <Text style={styleHomePage.nameTrail}>Title Track Here</Text>
                  <Box style={styleHomePage.userTrack}>
                    <Box style={styleHomePage.photoProfile}></Box>
                    <Text style={styleHomePage.nameUser}>@nick_name_here</Text>
                  </Box>
                  <Box style={styleHomePage.iconArrowTrail}><Icon name="hand-o-right" size={20} /></Box>
                </Box>
                <Box style={styleHomePage.containerAboutTrail}>
                  <Box>
                    <Text style={styleHomePage.aboutTitleName}>Coliseu</Text>
                    <Icon name="file-text-o" size={17} style={styleHomePage.iconFIleAbout}/>
                    <Icon name="circle" style={{fontSize: 6, top: -10, color: '#0B2C37BF'}} /><Text style={styleHomePage.listAbout}>Cretense e Micênicos</Text>
                    <Icon name="circle" style={{fontSize: 6, top: -10, color: '#0B2C37BF'}} /><Text style={styleHomePage.listAbout}>Os povos gregos</Text>
                    <Text style={styleHomePage.sumaryAbout}>A construção começou sob o governo de 72 d.C. e foi com latim desta maneira por sua associação com o nome da família (Fla...</Text>
                  </Box>
                </Box>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Box>
                    <Image source={require('../../Assets/grecia.png')} style={styleHomePage.trailPlayImage}/>
                    <Box style={styleHomePage.containerPlayTrack}>
                      <Text style={styleHomePage.textPlayTrack}>Formação{'\n'}da Grecia</Text>
                      <Box style={styleHomePage.containerButtonPlayTrack}>
                        <Text style={styleHomePage.textbuttonPlayTrack}>Assistir</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Image source={require('../../Assets/imagePaises.png')} style={styleHomePage.trailPlayImage}/>
                    <Box style={styleHomePage.containerPlayTrack}>
                      <Text style={styleHomePage.textPlayTrack}>Formação{'\n'}da Grecia</Text>
                      <Box style={styleHomePage.containerButtonPlayTrack}>
                        <Text style={styleHomePage.textbuttonPlayTrack}>Assistir</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Image source={require('../../Assets/grecia.png')} style={styleHomePage.trailPlayImage}/>
                    <Box style={styleHomePage.containerPlayTrack}>
                      <Text style={styleHomePage.textPlayTrack}>Formação{'\n'}da Grecia</Text>
                      <Box style={styleHomePage.containerButtonPlayTrack}>
                        <Text style={styleHomePage.textbuttonPlayTrack}>Assistir</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Image source={require('../../Assets/imagePaises.png')} style={styleHomePage.trailPlayImage}/>
                    <Box style={styleHomePage.containerPlayTrack}>
                      <Text style={styleHomePage.textPlayTrack}>Formação{'\n'}da Grecia</Text>
                      <Box style={styleHomePage.containerButtonPlayTrack}>
                        <Text style={styleHomePage.textbuttonPlayTrack}>Assistir</Text>
                      </Box>
                    </Box>
                  </Box>
                </ScrollView>
              </Box>
              <Box style={styleHomePage.cardtrail}>
                <Box style={styleHomePage.containerTrackTrail}>
                  <Text style={styleHomePage.nameTrail}>Title Track Here</Text>
                  <Box style={styleHomePage.userTrack}>
                    <Box style={styleHomePage.photoProfile}></Box>
                    <Text style={styleHomePage.nameUser}>@nick_name_here</Text>
                  </Box>
                  <Box style={styleHomePage.iconArrowTrail}><Icon name="hand-o-right" size={20} /></Box>
                </Box>
                <Box style={styleHomePage.containerAboutTrail}>
                  <Box>
                    <Text style={styleHomePage.aboutTitleName}>Coliseu</Text>
                    <Icon name="file-text-o" size={17} style={styleHomePage.iconFIleAbout}/>
                    <Icon name="circle" style={{fontSize: 6, top: -10, color: '#0B2C37BF'}} /><Text style={styleHomePage.listAbout}>Cretense e Micênicos</Text>
                    <Icon name="circle" style={{fontSize: 6, top: -10, color: '#0B2C37BF'}} /><Text style={styleHomePage.listAbout}>Os povos gregos</Text>
                    <Text style={styleHomePage.sumaryAbout}>A construção começou sob o governo de 72 d.C. e foi com latim desta maneira por sua associação com o nome da família (Fla...</Text>
                  </Box>
                </Box>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Box>
                    <Image source={require('../../Assets/grecia.png')} style={styleHomePage.trailPlayImage}/>
                    <Box style={styleHomePage.containerPlayTrack}>
                      <Text style={styleHomePage.textPlayTrack}>Formação{'\n'}da Grecia</Text>
                      <Box style={styleHomePage.containerButtonPlayTrack}>
                        <Text style={styleHomePage.textbuttonPlayTrack}>Assistir</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Image source={require('../../Assets/imagePaises.png')} style={styleHomePage.trailPlayImage}/>
                    <Box style={styleHomePage.containerPlayTrack}>
                      <Text style={styleHomePage.textPlayTrack}>Formação{'\n'}da Grecia</Text>
                      <Box style={styleHomePage.containerButtonPlayTrack}>
                        <Text style={styleHomePage.textbuttonPlayTrack}>Assistir</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Image source={require('../../Assets/grecia.png')} style={styleHomePage.trailPlayImage}/>
                    <Box style={styleHomePage.containerPlayTrack}>
                      <Text style={styleHomePage.textPlayTrack}>Formação{'\n'}da Grecia</Text>
                      <Box style={styleHomePage.containerButtonPlayTrack}>
                        <Text style={styleHomePage.textbuttonPlayTrack}>Assistir</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Image source={require('../../Assets/imagePaises.png')} style={styleHomePage.trailPlayImage}/>
                    <Box style={styleHomePage.containerPlayTrack}>
                      <Text style={styleHomePage.textPlayTrack}>Formação{'\n'}da Grecia</Text>
                      <Box style={styleHomePage.containerButtonPlayTrack}>
                        <Text style={styleHomePage.textbuttonPlayTrack}>Assistir</Text>
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