import { StyleSheet } from "react-native";
import { font } from "../../../utils/Fonts/fonts";

const styleAccountMenu = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderWidth: 0.5,
        borderColor: '#264F75',
        borderRadius: 12,
        padding: 16,
        marginVertical: 16
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        padding: 12,
        borderWidth: 0.5,
        borderRadius: 12,
        marginVertical: 4,
    },
    itemTitle: {
        fontSize: 16,
        color: 'gray',
        fontFamily: font.regular,
    },
    itemTitleGroup: {
        marginTop: 16,
        fontSize: 14,
        color: '#aaa',
        fontFamily: font.regular,
    },
    name: {
        fontSize: 14,
        color: '#264F75',
        fontFamily: font.regular,
    },
    email: {
        fontSize: 12,
        color: '#264F75',
        fontFamily: font.light,
    },
    border: {
        borderWidth: 1,
        borderColor: '#549DB4',
    },
    teste: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        borderWidth: 0.5,
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        verticalAlign: 'middle',
        marginVertical: 16,
        padding: 8,
        gap: 16,
    }


});

export default styleAccountMenu;