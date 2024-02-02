import { StyleSheet } from "react-native";



const styleHomePage = StyleSheet.create({
  container: {
    backgroundColor: '#B1D5DE',
  },
  containerTitle: {
    display: 'flex',
    height: 80,
    width: '95%',
    marginLeft: '3%', 
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#264F75',
  },
  titleStartStudy: {
    display: 'flex',
  },
  titleAbout: {
    textAlign: 'center',
    marginLeft: 70,
    marginTop: 20,
    transform: [{translateY: -50}],
  },
  titleAboutOne: {
    padding: 1,
    fontSize: 12,
    color: '#0B2C37',
    fontFamily: 'Ubuntu_300Light_Italic',
  },
  titleAboutSecond: {
    color: '#0B2C37',
    fontSize: 14,
    textTransform: 'uppercase',
    fontFamily: 'Ubuntu_400Regular_Italic',
  },
  image: {
    transform: [{ translateY: 40 }],
    marginLeft: -20,
    padding: 10,
    width: 60,
    height: 80,
    resizeMode:'contain',
  },
  containerSearch: {
    margin: 5,
    marginTop: 16,
    marginLeft: 18,
  },
  Search: {
    backgroundColor: "#e9e5e1",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0.5,
    flexShrink: 0,
    elevation: 5,
    fontFamily: 'Ubuntu_400Regular',
  },
  buttonSearch: {
    width: 40,
    height: 40,
    marginLeft: 310,
    marginTop: -42,
    borderRadius: 8,
    backgroundColor: "#e9e5e1",
  },
  scrollViewTopics: {
    width: "100%",
    horizontal: true,
  },
  containerTopics: {
    display: "flex",
    flexDirection: "row",
  },
  topic: {
    borderWidth: 1, 
    marginTop: 10,
    width: 100,
    height: 23,
    marginLeft: 17,
    borderRadius: 8,
    textAlign: 'center',
  },
  textTopic: {
    fontSize: 12,
    justifyContent: 'center',
    textAlign: "center",
    fontFamily: 'Ubuntu_300Light',
  },
  containerTrail: {
    margin: 30,
    alignItems: "center",
  },
  cardtrail: {
    margin: 8,
    display: 'flex',
    width: 350,
    height: 400,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8,
    gap: 12,
    flexShrink: 0,
    backgroundColor: '#F3EFE5',
    borderRadius: 8,
  },
  containerTrackTrail: {
    flexDirection: 'column',
    display: 'flex',
    alignSelf: 'stretch',
    marginLeft: 7,
  },
  nameTrail: {
    color: '#0B2C37BF',
    fontSize: 16,
    fontFamily: 'Ubuntu_400Regular',
  },
  userTrack: {
    flexDirection: 'row',
    margin: 4,
  },
  photoProfile: {
    width: 25,
    height: 25,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    marginLeft: -10,
  },
  nameUser: {
    marginLeft: 5,
    fontSize: 12,
    color: '#595959',
    fontFamily: 'Ubuntu_400Regular',
  },
  iconArrowTrail: {
    top: -45,
    left: 295,
  },
  containerAboutTrail: {
    display: 'flex',
    height: 150,
    borderWidth: 1,
    borderColor: '#549DB4',
    borderRadius: 8,
    padding: 8,
    flexDirection: 'collumn',
    alignItems: 'flex-start',
    gap: 12,
    flexShrink: 0,
    alignSelf: 'stretch',
    marginTop: -12,
  },
  aboutTitleName: {
    left: 125,
    fontSize: 15,
    color: '#264F75',
    fontFamily: 'Ubuntu_300Light',
  },
  iconFIleAbout: {
    left: 300,
    top: -20,
    color: '#A5A5A5',
  },
  listAbout: {
    color: '#0B2C37BF',
    left: 15,
    marginBottom: -10,
    top: -25,
    fontSize: 12,
    fontFamily: 'Ubuntu_400Regular',
  },
  sumaryAbout: {
    color: '#0B2C37BF',
    fontSize: 12,
    fontFamily: 'Ubuntu_400Regular',
  },
  trailPlayImage: {
    width: 140,
    height: 130,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 20,
    opacity: 0.2,
    borderWidth: 1,
    borderColor: "#549DB4",
  },
  containerPlayTrack: {
    marginTop: -100,
    marginLeft: -18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPlayTrack: {
    fontFamily: 'Ubuntu_400Regular',
    flexWrap: 'wrap',
    fontSize: 14,
    marginTop: -26,
    color: '#3D5872',
  },
  containerButtonPlayTrack: {
    borderWidth: 1,
    marginTop: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: '#3D5872',
  },
  textbuttonPlayTrack: {
    color: '#3D5872',
    fontSize: 12,
    fontFamily: 'Ubuntu_500Medium',
  },   
  buttonOptions: {
    display: 'none',
    backgroundColor: "#D9D9D9",
    width: 60,
    height: 60,
    position: "absolute",
    right: 40,
    bottom: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styleHomePage;