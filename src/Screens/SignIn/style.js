import { StyleSheet } from "react-native";

const styleSignIn = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 16,
    height: "100%",
    backgroundColor: "#B6B1B1",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 64,
  },
  brand: {
    display: "block",
    width: 120,
    height: 120,
    backgroundColor: "#1976D2",
    borderRadius: 16,
  },
  formContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 56,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    gap: 12,
  },
  formControl: {
    display: "flex",
    width: 328,
    justifyContent: "center",
    alignItems: "center",
  },
  labelInput: {
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    alignSelf: "stretch",
    letterSpacing: 0.5,
    color: "#FFF",
  },
  input: {
    borderRadius: 8,
    fontFamily: "Ubuntu",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  link: {
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 12,
    alignSelf: "stretch",
  },
  button: {
    backgroundColor:'#1976D2',
    display: 'flex',
    width: 90,
    marginTop:56,
  },
  
});

export default styleSignIn;
