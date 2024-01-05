import { StyleSheet } from "react-native";



const styleHomePage = StyleSheet.create({
 topMenu: {
  width: 384,
  height: 50,
  flexShrink: 0,
  backgroundColor: '#D9D9D9',
 },
 titleHome: {
  textAlign: 'center',
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 300,
 },
 iconSignOut: {
  fontSize: 16,
  textAlign: 'center',
  fontStyle: 'normal',
  fontWeight: 400,
  marginLeft: 330,
  marginTop: -19,
 },
 iconAngleLeft: {
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 400,
  textAlign: 'center',
  fontStyle: 'normal',
  marginRight: 330,
  transform: [{ translateY: 18}],
 },
 containerTitle: {
  marginTop: 16,
  width: 384,
  height: 70,
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: '#D9D9D9',
 },
 titleStartStudy: {
  textAlign: 'center',
  justifyContent: 'center',
  padding: 5,
 },
 containerSearch: {
  margin: 5,
  marginTop: 8,
  marginLeft: 16,
 },
 Search: {
  backgroundColor: "#fff",
  fontSize: 16,
  fontStyle: "normal",
  lineHeight: 24,
  letterSpacing: 0.5,
 },
 buttonSearch: {
  width: 40,
  height: 40,
  marginLeft: 310,
  marginTop: -42,
  borderRadius: 8,
  backgroundColor: '#D9D9D9'
 },
 scrollViewTopics: {
  width: '100%', 
  horizontal: true,
},
 containerTopics: {
  display: 'flex',
  flexDirection: 'row',
 },
 topic: {
  width: 100,
  height: 22,
  margin: 5,
  marginLeft: 17,
  borderRadius: 8,
  backgroundColor: '#D9D9D9'
 },
 textTopic: {
  textAlign: 'center',
 },
 containerTrail: {
  marginTop: 16,
  alignItems: 'center',
 },
 trail: {
  margin: 16,
  width: 328,
  height: 138,
  borderRadius: 8,
  backgroundColor: '#888'
 },
 buttonOptions: {
  backgroundColor: '#D9D9D9',
  width: 60,
  height: 60,
  position: 'absolute',
  right: 40,
  bottom: 40,
  borderRadius: 50,
  justifyContent: 'center',
  alignItems: 'center'
 },
})
export default styleHomePage;
