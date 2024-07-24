import { StyleSheet } from "react-native";

const styleHeader = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 100,
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 32,
        marginTop: '10%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#264F75',
    },
    description: {
        gap: 20,
    },
    brandImage: {
        width: 60,
        height: 80,
        resizeMode: 'contain',
    },
    brandSlogan: {
        textAlign: 'center',
        fontSize: 12,
        textTransform: 'uppercase',
        color: '#0B2C37',
        fontFamily: 'Ubuntu_300Light_Italic',
    },
    brandName: {
        textAlign: 'center',
        color: '#0B2C37',
        fontSize: 16,
        textTransform: 'uppercase',
        fontFamily: 'Ubuntu_400Regular_Italic',
    },
});

export default styleHeader