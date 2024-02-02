import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styleSignIn = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    width:windowWidth,
    height:windowHeight,
    backgroundColor: "#2B85A2",
  },
  formContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width:328,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    marginTop:32
  },
  input: {
    fontFamily: "Ubuntu_300Light",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  button: {
    backgroundColor:'#EBC95D',
    display: 'flex',
    width: 90,
    marginTop:56,
  },
  boxLinks:{
    alignContent:'flex-start',
    justifyContent:'flex-start',
    width:328,
    marginTop:32,
  },
  textLink: {
    marginBottom:12,
    fontSize:12,
    fontFamily:'Ubuntu_700Bold' ,
    color:"#0B2C37",
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 12,
    letterSpacing: 0.5,
  },
  textLabel: {
    alignSelf:'stretch',
    marginBottom:8,
    color:"#FFF",
    fontFamily:'Ubuntu_500Medium',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  textPassword: {
    alignSelf:'stretch',
    marginTop:12,
    marginBottom:8,
    color:"#FFF",
    fontFamily:'Ubuntu_500Medium',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 16,
    letterSpacing: 0.5
  },
  textSigin:{
    color:"#0B2C37",
    fontFamily:'Ubuntu_500Medium',
  },
  textForgot:{
    paddingLeft:98,
    alignSelf:'flex-end',
    color:"#0B2C37",
    fontFamily:'Ubuntu_700Bold',
    fontSize:12,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 12,
    letterSpacing: 0.5,
  },
  textRemember:{
    color:"#0B2C37",
    alignSelf:'center',
    fontFamily:'Ubuntu_700Bold',
    fontSize:12,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 12,
    letterSpacing: 0.5,
  },
});

export default styleSignIn;
