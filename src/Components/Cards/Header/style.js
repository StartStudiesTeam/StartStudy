import { StyleSheet } from "react-native";

const styleHeader = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
    },
    title: {
        color: '#0B2C37BF',
        fontSize: 16,
        fontFamily: 'Ubuntu_400Regular',
    },
    profile: {
        flexDirection: 'row',

    },
    nick: {
        marginLeft: 4,
        fontSize: 12,
        color: '#595959',
        fontFamily: 'Ubuntu_400Regular',
    },
    photo: {
        width: 25,
        height: 25,
        backgroundColor: '#D9D9D9',
        borderRadius: 16,
    },

});

export default styleHeader;