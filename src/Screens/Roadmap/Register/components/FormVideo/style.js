import { StyleSheet } from "react-native";

const styleFormVideo = StyleSheet.create({
    boxFormVideo: {
        paddingVertical: 50,
        paddingHorizontal: 16,
        gap: 8,
    },
    containeLabelFormVideo: {
        justifyContent: "center",
        alignItems: "center",
    },
    labelFormVideo: {
        fontFamily: "Ubuntu_400Regular",
        color: "#595959",
        fontWeight: 400,
        fontSize: 16,
    },
    borderFormVideo: {
        padding: 10,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderRadius: 16,
        borderColor: "rgba(38, 79, 117, 0.50)",
    },
    formVideo: {
        height: 155,
        flexShrink: 0,
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0, 0, 0, 0.06)",
    },
    containerIconPlay: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    iconPlay: {
        paddingVertical: 50,
        fontSize: 40,
        color: "#0973EF",
    },
  });
  export default styleFormVideo;
  