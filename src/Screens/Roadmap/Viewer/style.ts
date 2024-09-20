import { StyleSheet } from "react-native";

const styleRoadmapViewer = StyleSheet.create({
  container: {
    backgroundColor: "#B1D5DE",
    paddingHorizontal: 16,
    width: "100%",
    height: "100%",
  },
  content: {
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 32,
    alignItems: "center",
    gap: 24,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",

    marginTop: 64,
  },
  headerButton: {
    alignSelf: "flex-end",
    borderWidth: 1,
    borderColor: "#549DB4",
  },
  title: {
    flex: 1,
    color: "#7D7D7D",
    fontFamily: "Ubuntu_500Medium",
    fontSize: 20,
    textAlign: "center",
  },
  searchBar: {
    width: "100%",
    marginTop: 16,
  },
});
export default styleRoadmapViewer;
