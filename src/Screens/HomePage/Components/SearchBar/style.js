import { StyleSheet } from "react-native";

const styleHomePage = StyleSheet.create({
    containerSearch: {
        width: "100%",
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    inputSearch: {
        backgroundColor: "#e9e5e1",
        height: 44,
        fontSize: 12,
        lineHeight: 12,
        letterSpacing: 0.5,
        borderRadius: 8,
        fontFamily: 'Ubuntu_400Regular',
    },
    buttonSearch: {
        width: 44,
        height: 44,
        borderRadius: 8,
        marginLeft: 12,
        backgroundColor: "#e9e5e1",
    },
    formControlWrapper: {
        flex: 1,
    },
    scrollViewTopics: {
        width: "100%",
        horizontal: true,
    },
    containerTopics: {
        display: "flex",
        flexDirection: "row",
    },
    topic: {
        borderWidth: 0.5,
        marginTop: 8,
        paddingHorizontal: 8,
        marginLeft: 4,
        borderRadius: 8,
        textAlign: 'center',
    },
    textTopic: {
        fontSize: 12,
        justifyContent: 'center',
        textAlign: "center",
        fontFamily: 'Ubuntu_300Light',
    },
});
export default styleHomePage;