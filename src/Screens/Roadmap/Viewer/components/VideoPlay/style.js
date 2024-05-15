import { StyleSheet } from 'react-native';

const styleVideoPlay = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    modal: {
    },
    modalHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 20,
    },
    modalBody: {
        paddingBottom: 16,
    },
    video: {
        alignSelf: 'center',
        width: '100%',
        height: 228,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styleVideoPlay