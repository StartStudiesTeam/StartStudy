import { StyleSheet } from "react-native";

const styleSignUp = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
    gap: 9,
  },
  input: {
    backgroundColor: "#fff",
    maxWidth: 400,
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
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 400,
    letterSpacing: 0.5,
    alignSelf: "stretch",
  },
  button: {
    backgroundColor:'#1976D2',
    display: 'flex',
    width: 90,
    margin: 56,
    marginLeft: 138,
  },
  scrollContainer: {
    width: 360,
  },
  iconEye: {
    position: "absolute",
    top: 375,
    left: 320,
    width: "100%",
    height: "100%",
  }

});

export default styleSignUp;
