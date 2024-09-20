import { StyleSheet } from "react-native";

const styleCardRoadmap = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    maxWidth: 380,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 16,
    padding: 12,
    gap: 16,
    marginBottom: 12,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 8,
  },
  action: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  actionRight: {
    flexDirection: "row",
    gap: 8,
  },
});
export default styleCardRoadmap;
