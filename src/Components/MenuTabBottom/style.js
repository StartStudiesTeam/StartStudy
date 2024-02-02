import { StyleSheet } from "react-native";

const styleMenuTab = StyleSheet.create({
    BarStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#2B85A2',
        height: 68,
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
        paddingVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    ItemStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 52,
        maxHeight: 52,
        minWidth: 52,
        maxWidth: 52,
        borderRadius: 16,
        padding: 12,
    }
});

export default styleMenuTab;