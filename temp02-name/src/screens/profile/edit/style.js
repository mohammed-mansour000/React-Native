import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageContainer: {
        alignItems: "center",
        marginTop: 20
    },
    imageViewContainer: {
        backgroundColor: 'gray',
        height: 100,
        width: 100,
        borderRadius: 50,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
       height: 100,
       width: 100,
       position: "absolute"
    },
    imageOverLay: {
        backgroundColor: 'rgba(0,0,0, 0.5)',
        ...StyleSheet.absoluteFill
    },
    fieldsContainer: {
        flex: 1,
        padding: 20,
        marginTop: 20
    },
    fieldItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    fieldValueContainer: {
        flexDirection: "row",
        alignItems: "center",
    }
});

export default styles;