import { StyleSheet } from "react-native";

const styleSignIn = StyleSheet.create({
  container: {
    backgroundColor: "#2B85A2",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    gap: 32,
  },
  content: {
    width: '100%',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  contentHeaderMessage: {
    display: "flex",
    gap: 16,
    width: '100%',
    justifyContent: "flex-start",
  },
  headerTitleWelcome: {
    color: '#EBC95D',
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 26,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  headerTitleWelcomeSub: {
    color: '#F0E3C9',
    fontFamily: 'Ubuntu_300Light',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  brandImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  formContent: {
    width: '100%',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 56,
  },
  form: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  input: {
    fontFamily: "Ubuntu_300Light",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  iconInputLeft: {
    color: '#ccc',
    fontSize: 20,
    marginLeft: 12,
    marginRight: 12
  },
  iconInputRightPassword: {
    color: '#ccc',
    fontSize: 20,
    marginLeft: 12,
    marginRight: 12
  },
  button: {
    backgroundColor: '#EBC95D',
    display: 'flex',
    width: 90,
  },
  contentLinksSecond: {
    width: '100%',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: 16,
    marginTop: 32,
  },
  labelLink: {
    color: "#0B2C37",
    alignSelf: 'flex-start',
    fontFamily: 'Ubuntu_700Bold',
    textAlignVertical: 'center',
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.5,
  },
  textLabel: {
    alignSelf: 'stretch',
    color: "#FFF",
    fontFamily: 'Ubuntu_500Medium',
    marginBottom: 8,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  labelPassword: {
    alignSelf: 'stretch',
    marginTop: 12,
    marginBottom: 8,
    color: "#FFF",
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 16,
    letterSpacing: 0.5
  },
  textSignIn: {
    color: "#0B2C37",
    fontFamily: 'Ubuntu_500Medium',
    textTransform: 'uppercase',
  },
  containerLinkFirst: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  labelForgotPassword: {
    color: "#0B2C37",
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.5,
  },
  labelRemember: {
    color: "#0B2C37",
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.5,
  }
});

export default styleSignIn;
