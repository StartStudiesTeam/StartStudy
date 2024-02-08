import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styleCodeConfirm = StyleSheet.create({
  contarinerP: {
    flex: 1,
    backgroundColor: "#2B85A2",
    alignItems: "center",
    justifyContent: "center",
  },
  containerSecundario: {
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  boxTexts: {
    marginBottom: 56,
    marginTop: 64,
  },
  labelInit: {
    marginBottom: 8,
    color: "#F3B852",
    transform: [{ translateY: 6 }],
    fontFamily: "Ubuntu_500Medium",
    fontSize: 26,
    fontWeight: 500,
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: "stretch",
  },
  labelText: {
    marginBottom: 8,
    color: "#FFF",
    transform: [{ translateY: 6 }],
    fontFamily: "Ubuntu_300Light",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: 16,
    letterSpacing: 0.5,
    padding: 3,
  },
  labelInput: {
    alignSelf: "stretch",
    color: "#FFF",
    fontFamily: "Ubuntu_500Medium",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 16,
    letterSpacing: 0.5,
    marginLeft: 4,
  },
  boxCode: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 9,
    marginBottom: 12,
    marginTop: 8,
    margin: 20,
  },
  input: {
    display: "flex",
    color: "#000000",
    textAlign: 'center',
    justifyContent: 'center',
    padding: 12,
    fontFamily: "Ubuntu_300Light",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    borderRadius: 8,
  },
  boxLink: {
    width: 200,
  },
  linkSignIn: {
    color: "#0B2C37",
    fontFamily: "Ubuntu_500Medium",
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: 0.5,
    alignSelf: "stretch",
    marginLeft: 4,
  },
  boxBotao: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 56,
    margin: 10,
  },
  button: {
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
    fontFamily: "Ubuntu_700Bold",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 36,
    letterSpacing: 1.25,
  },
  boxImage: {
    width: 120,
    height: 120,
    backgroundColor: "#D9D9D9",
    borderRadius: 16,
  },
  scrollContainer: {
    width: '100%',
  },

});
export default styleCodeConfirm;
