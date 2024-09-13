import { StyleSheet } from "react-native";
import { font } from "../../../../../utils/Fonts/fonts";

const styleComments = StyleSheet.create({
    modalContent: {
        top: 124,
        marginBottom: "auto",
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 32,
        width: '100%',
    },
    content: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 44,
        alignItems: "center",
    },
    titleComments: {
        textAlign: 'center',
        color: '#7d7d7d',
        fontFamily: font.bold,
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: 0.5,
        marginTop: 16,
        marginBottom: 16
    },
    iconTextAreaLeft: {
        marginLeft: 12
    },
    iconTextAreaRight: {
        marginRight: 12
    },
    inputCommentContent: {
        paddingVertical: 16,
    },
    inputComment: {
        fontFamily: font.regular,
        fontSize: 14,
        lineHeight: 14,
    },
    comment: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'top',
        gap: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    commentName: {
        color: '#858585',
        fontFamily: font.regular,
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 0.5,
    },
    commentNickname: {
        color: '#707070',
        fontFamily: font.light,
        fontSize: 12,
        lineHeight: 12,
        letterSpacing: 0.5,
    },
    commentHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
        gap: 4,
    },
    commentContent: {
        display: 'flex',
        width: '90%',
        color: '#858585',
    },
    commentTextContent: {
        backgroundColor: '#dddd',
        width: '100%',
        padding: 8,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        borderTopRightRadius: 16,
    },
    commentText: {
        color: '#858585',
        fontFamily: font.regular,
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: 0.5,
    }
});
export default styleComments