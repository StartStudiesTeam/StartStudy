import { StyleSheet } from "react-native";

const styleConfirmEmail = StyleSheet.create({
  containerP: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2B85A2',
  },
  containerSecundario: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
  },
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
    marginLeft: -2,
    color: '#F3B852',
  },
  titleTwo: {
    fontFamily:'Ubuntu_300Light',
    fontSize: 18,
    color: '#F0E3C9',
    margin: 1,
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
    marginLeft: 20,
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
    color: "#FFF",
    fontFamily:'Ubuntu_500Medium',
    fontSize: 16,
    fontWeight: 300,
    lineHeight: 16,
    letterSpacing: 0.5,
    alignSelf: 'stretch',
    marginLeft: 5,
  },
  linkSignIn: {
    fontWeight: 400,
    letterSpacing: 0.5,
    alignSelf: "stretch",
    width: 205,
  },
  textLink: {
  fontFamily: 'Ubuntu_700Bold',
  color: '#0B2C37',
  fontSize: 12,
  marginLeft: 15,
  },
  boxBotton: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    margin: 10,
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