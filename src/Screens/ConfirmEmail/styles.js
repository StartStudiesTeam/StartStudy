import { StyleSheet } from "react-native";

const styleConfirmEmail = StyleSheet.create({
  containerLogo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 89,
    height: 101,
    gap: 4,
  },
  containerTitle: {
    padding: 10,
    marginTop: 60,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    letterSpacing: 0.5,
    gap: 12,
  },
  titleOne: {
    fontFamily:'Ubuntu_500Medium',
    fontSize: 26,
    padding: 4,
    marginLeft: -5,
    color: '#F3B852',
  },
  titleTwo: {
    fontFamily:'Ubuntu_300Light',
    fontSize: 18,
    color: '#F0E3C9',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 9,
  },
  formControl: {
    display: "flex",
    borderRadius: 8,
    marginTop: 30,
  },
  input: {
    color: '#00000080',
    fontFamily:'Ubuntu_300Light',
    fontSize: 16,
    fontStyle: "normal",
    letterSpacing: 0.5,
    borderRadius:8,
  },
  labelInput: {
    marginLeft: 4,
    color: "#FFF",
    fontFamily:'Ubuntu_500Medium',
    fontSize: 16,
    fontWeight: 300,
    lineHeight: 16,
    letterSpacing: 0.5,
    alignSelf: "stretch",
  },
  linkSignIn: {
    fontWeight: 400,
    letterSpacing: 0.5,
    alignSelf: "stretch",
  },
  textLink: {
  fontFamily: 'Ubuntu_700Bold',
  color: '#0B2C37',
  fontSize: 12,
  marginLeft: 2,
  },
  button: {
    backgroundColor:'#EBC95D',
    width: 90,
    marginTop: 56,
  },
  textButton: {
    color: '#0B2C37',
    fontFamily: 'Ubuntu_500Medium',
  },
  
});
export default styleConfirmEmail;