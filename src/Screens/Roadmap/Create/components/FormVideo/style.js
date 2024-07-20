import { StyleSheet } from "react-native";
import { font } from "../../../../../utils/Fonts/fonts";

const styleFormVideo = StyleSheet.create({
    containerTitle: {
        fontSize: 20,
        fontFamily: font.bold,
        color: "gray",
        marginVertical: 16,
    },
    iconInputLeft: {
        color: '#323232',
        marginLeft: 12,
        fontSize: 20,
    },
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
        textAlign: "center",
        fontFamily: font.medium,
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
        color: "#eeee",
    },
});
export default styleFormVideo;
