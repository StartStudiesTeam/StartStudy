import { StyleSheet } from "react-native";

const styleSignUp = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    gap: 16,
  },
  input: {
    backgroundColor: "#fff",
    color: '#00000080',
    maxWidth: 400,
    fontFamily: 'Ubuntu_300Light',
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  labelInput: {
    color: "#FFF",
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 16,
    fontWeight: 300,
    lineHeight: 16,
    letterSpacing: 0.5,
    alignSelf: "stretch",
  },
  linkSignIn: {
    width: 200,
    color: '#0B2C37',
    fontSize: 12,
    fontFamily: 'Ubuntu_700Bold',
    fontWeight: 400,
    letterSpacing: 0.5,
    alignSelf: "stretch",
  },
  button: {
    backgroundColor:'#EBC95D',
    display: 'flex',
    width: 90,
    margin: 56,
    marginLeft: 138,
  },
  textButton: {
    fontSize: 14,
    color: '#0B2C37',
    fontFamily: 'Ubuntu_500Medium',
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
  },
  titleSignUp: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 12,
    alignSelf: 'stretch',
    marginTop: 60,
    marginLeft: '3%',
    padding: 5,
  },
  titleOne: {
    color: '#F3B852',
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 26,
    padding: 4,
    marginLeft: -4,
  },
  subTitle: {
    color: '#F0E3C9',
    fontFamily: 'Ubuntu_300Light',
    fontSize: 18,
  },

});

export default styleSignUp;
