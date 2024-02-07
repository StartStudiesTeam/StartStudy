import { StyleSheet } from "react-native";

const styleRecoveryPassword = StyleSheet.create({
  scrollContainer: {
    width: '100%',
  },
  contarinerP: {
    flex: 1,
    backgroundColor: "#2B85A2",
    alignItems: "center",
    justifyContent: "center",
  },
  containerSecundario: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  containerForm: {
    alignItems: "center",
    gap: 9,
    marginRight: 16,
    marginLeft: 16,
  },
  boxTexts: {
    maxWidth: 328,
    marginBottom: 56,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 64,
  },
  textPrincipal: {
    color: "#F3B852",
    textAlign: "center",
    fontFamily: "Ubuntu_500Medium",
    fontSize: 26,
    fontWeight: 500,
    lineHeight: 24,
    letterSpacing: 0.5,
    marginBottom: 12,
    alignSelf: "flex-start",
  },
  textSecundario: {
    color: "#F0E3C9",
    textAlign: "center",
    fontFamily: "Ubuntu_300Light",
    fontSize: 18,
    fontWeight: 300,
    lineHeight: 24,
    letterSpacing: 0.5,
    marginBottom: 12,
    alignSelf: "flex-start",
  },
  input: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    maxWidth: "65%",
    maxHeight: "10vh",
    fontFamily: "Ubuntu_300Light",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    borderRadius: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  titleInput: {
    alignSelf: "stretch",
    color: "#FFF",
    fontFamily: "Ubuntu_500Medium",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  linkSignIn: {
    marginTop: 12,
    fontWeight: 400,
    letterSpacing: 0.5,
    alignSelf: "stretch",
    marginLeft: 16,
    width: 108,
  },
  textLink: {
    fontFamily: "Ubuntu_700Bold",
    fontSize: 12,
  },
  boxBotao: {
    alignContent: "center",
    marginTop: 56,
    width: 70,
    height: 36,
    margin: 30,
  },
  button: {
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EBC95D",
    width: 89,
    height: 36,
  },
  textBotao: {
    alignItems: "center",
    height: 36,
    color: "#0B2C37",
    textAlign: "center",
    fontFamily: "Ubuntu_500Medium",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 36,
    letterSpacing: 1.25,
  },
});
export default styleRecoveryPassword;
