import { StyleSheet } from "react-native";
import { font } from "../../../utils/Fonts/fonts";

const styleViewer = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 44,
        alignItems: "center",
    },
    titleRoadmap: {
        textAlign: 'center',
        color: '#7d7d7d',
        fontFamily: font.bold,
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: 0.5,
        marginTop: 16,
        marginBottom: 16
    },
    resumeButton: {
        width: '100%',
        borderRadius: 8,
        marginVertical: 12,
    },
    profileOwnerRoadmap: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        gap: 8,
        borderWidth: 0.5,
        borderRadius: 16,
    },
    profileOwnerRoadmapName: {
        color: '#7d7d7d',
        fontFamily: font.regular,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.5,
    },

});

export default styleViewer;

