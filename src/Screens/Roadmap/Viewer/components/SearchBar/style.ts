import { StyleSheet } from "react-native";

const styleSearchBar = StyleSheet.create({
  buttonSearch: {
    borderRadius: 8,
    borderColor: "#549DB4",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  inputSearch: {
    height: 44,
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.5,
    backgroundColor: "#e9e5e1",
  },
});

export default styleSearchBar;
