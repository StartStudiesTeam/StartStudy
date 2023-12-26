import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styleTeste = StyleSheet.create({
  containerP: {
    flex:1,
    width:windowWidth,
    height:windowHeight,
    backgroundColor:"#B6B1B1",
    alignItems:"center",
    justifyContent:"center",
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 9,
  },
  input: {
    backgroundColor: "#fff",
    maxWidth:360,
    fontFamily: "Ubuntu",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  labelInput: {
    color: "#FFF",
    transform: [{ translateY: 6 }],
    fontFamily: "Ubuntu",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: 16,
    letterSpacing: 0.5,
    alignSelf: "stretch",
  },
  linkSignIn: {
    color: '#0067A6',
    fontFamily: "Ubuntu",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 400,
    letterSpacing: 0.5,
    alignSelf: "stretch",
  },
  button: {
    backgroundColor:'#1976D2',
    width: 90,
    marginTop: 56,
  },
  boxImage:{
    width:120,
    height:120,
    backgroundColor:'#D9D9D9',
    marginBottom:64,
    borderRadius:16
  },
  
});
export default styleTeste;