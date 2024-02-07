import { StyleSheet } from "react-native";

const styleCardTrackPreview = StyleSheet.create({

    container: {
        display: 'flex',
        width: '100%',
        maxWidth: 380,
        height: 400,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 8,
        padding: 12,
        gap: 16,
        backgroundColor: '#F3EFE5',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 8,
    }
});
export default styleCardTrackPreview;