import { StyleSheet } from "react-native";

const styleHeader = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'collumn',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: '#549DB4',
        maxHeight: 150,
        borderRadius: 8,
        padding: 8,
        gap: 12,
        alignSelf: 'stretch',
    },
    content: {
        height: '100%',
        width: '100%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        width: '100%',
    },
    title: {
        fontSize: 16,
        color: '#264F75',
        fontFamily: 'Ubuntu_300Light',
    },
    icon: {
        color: '#A5A5A5',
    },
    note: {
        color: '#0B2C37BF',
        fontSize: 12,
        fontFamily: 'Ubuntu_400Regular',
    },
    modalContent: {
        width: '100%',
    }
});

export default styleHeader;