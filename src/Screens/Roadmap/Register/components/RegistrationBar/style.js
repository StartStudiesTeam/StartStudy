import { StyleSheet } from "react-native";

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
        fontFamily: "Ubuntu_400Regular",
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
        fontFamily: "Ubuntu_400Regular",
        color: "#00000080",
    },
    iconInput: {
        display: "flex",
        padding: 4,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 14,
        color: '#ccc',
        paddingHorizontal: 12,
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
        fontFamily: "Ubuntu_400Regular",
        alignSelf: "stretch",
        fontSize: 16,
        fontWeight: 300,
        lineHeight: 16,
        color: "#FFFFFF",
    },
    textArea: {
        fontFamily: "Ubuntu_400Regular",
        color: "#00000080",
        fontSize: 14,
    },
  });
  export default styleRegistration;
  