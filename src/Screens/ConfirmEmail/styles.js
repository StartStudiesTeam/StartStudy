import { StyleSheet } from "react-native";

const styleTeste = StyleSheet.create({
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
    borderRadius:8,
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