import { StyleSheet } from "react-native";

const styleTrackCarousel = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "transparent",
        height: '100%',
    },
    containerItem: {
        borderRadius: 8,
        height: 124,
        width: 124,
        borderWidth: 0.5,
        borderColor: '#549DB4',
        marginLeft: 4,
    },
    contentItem: {
        padding: 8,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },
    background: {
        flex: 1,
        position: 'absolute',
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        opacity: 0.12
    },
    title: {
        textAlign: 'center',
        color: '#0B2C37',
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.5,
    },
    button: {
        height: 24,
        marginVertical: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#549DB4',
        width: "100%"
    },
    buttonText: {
        color: '#549DB4',
        fontFamily: 'Ubuntu_300Light',
        fontSize: 12,
        lineHeight: 12,
        textAlign: 'center',
        letterSpacing: 0.5,
    }
});

export default styleTrackCarousel