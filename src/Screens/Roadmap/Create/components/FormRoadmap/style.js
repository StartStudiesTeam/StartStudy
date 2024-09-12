import { StyleSheet } from "react-native";
import { font } from "../../../../../utils/Fonts/fonts";

const styleRegistration = StyleSheet.create({
    container: {
        gap: 16,
    },
    containerInput: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 8,
        alignSelf: "stretch",
        paddingHorizontal: 16,
    },
    labelInput: {
        fontFamily: font.regular,
        alignSelf: "stretch",
        fontSize: 16,
        fontWeight: 300,
        lineHeight: 16,
        color: "#FFFFFF",
    },
    input: {
        display: "flex",
        height: 48,
        padding: 12,
        gap: 12,
        fontSize: 16,
        alignItems: "flex-start",
        alignSelf: "stretch",
        fontFamily: font.regular,
        color: "#00000080",
    },
    iconInput: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 14,
        color: '#ccc',
        paddingHorizontal: 12,
    },
    iconInputLeft: {
        color: "#ccc",
        marginLeft: 12,
    },
    containerTextArea: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 8,
        alignSelf: "stretch",
        paddingHorizontal: 16,
    },
    labelTextArea: {
        fontFamily: font.regular,
        alignSelf: "stretch",
        fontSize: 16,
        fontWeight: 300,
        lineHeight: 16,
        color: "#FFFFFF",
    },
    textArea: {
        fontFamily: font.regular,
        color: "#00000080",
        fontSize: 14,
    },
    containerButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        alignSelf: "stretch",
        paddingHorizontal: 16,
        marginVertical: 8,
    },
    button: {
        backgroundColor: "#77ADCB",
        display: "flex",
        width: 90,
    },
    containerCreated: {
        gap: 32,
        paddingHorizontal: 16,
    },
    contentCreatedBoxTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleCreated: {
        alignSelf: 'center',
        fontFamily: font.bold,
        color: '#7C7171',
        fontSize: 16,
        marginBottom: 8,
        marginTop: 16,
    },
    buttonNoteCreated: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
});
export default styleRegistration;
