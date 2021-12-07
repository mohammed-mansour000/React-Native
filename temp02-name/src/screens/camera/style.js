import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        backgroundColor: 'black',
        aspectRatio: 9 / 13,

    },
    bottomBarContainer: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        marginBottom: 25,
        alignItems: "center"
    },
    recordButtonContainer: {
        flex: 1,
        marginHorizontal: 30,
    },
    recordButton: {
        borderWidth: 8,
        borderColor: '#ff404087',
        backgroundColor: '#ff4040',
        borderRadius: 100,
        height: 80,
        width: 80,
        alignSelf: "center"
    },
    galleryButton: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        overflow: "hidden",
        width: 50,
        height: 50,
        alignItems: "center"
    },
    galleryButtonImage: {
        height: 50,
        width: 50
    },
    sideBarContainer: {
        top: 60,
        right: 0,
        marginHorizontal: 20,
        position: "absolute"
    },
    iconText: {
        fontSize: 12,
        color: 'white',
        marginTop: 5
    },
    sideBarButton: {
        alignItems: "center",
        marginBottom: 25
    }
});

export default styles;