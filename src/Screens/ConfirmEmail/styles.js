import { StyleSheet } from "react-native";

const styleConfirmEmail = StyleSheet.create({
  container: {
    backgroundColor: "#2B85A2",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    paddingHorizontal: 16,
  },
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBrandImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  contentHeaderMessage: {
    display: "flex",
    gap: 16,
    width: "100%",
    justifyContent: "flex-start",
    paddingVertical: "10%",
  },
  headerTitleWelcome: {
    color: "#EBC95D",
    fontFamily: "Ubuntu_500Medium",
    fontSize: 26,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  headerTitleWelcomeSub: {
    color: "#F0E3C9",
    fontFamily: "Ubuntu_300Light",
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  content: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 56,
  },
  formContent: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 56,
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    alignSelf: "stretch",
  },
  textLabel: {
    alignSelf: "stretch",
    color: "#FFF",
    fontFamily: "Ubuntu_500Medium",
    marginBottom: 8,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  input: {
    fontFamily: "Ubuntu_300Light",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  iconInputLeft: {
    color: "#ccc",
    fontSize: 20,
    marginLeft: 12,
    marginRight: 12,
  },
  containerLink: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelLink: {
    color: "#0B2C37",
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "Ubuntu_700Bold",
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.5,
  },
  button: {
    backgroundColor: "#EBC95D",
    display: "flex",
    width: 90,
  },
  labelButton: {
    fontFamily: "Ubuntu_500Medium",
  },
});
export default styleConfirmEmail;
