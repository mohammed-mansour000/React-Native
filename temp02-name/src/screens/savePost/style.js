import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
       flex: 1,
       paddingTop: 30,
       backgroundColor: 'white'
    },
    formContainer: {
        margin: 20,
        flexDirection: 'row',
    },
    inputText: {
        paddingVertical: 10,
        marginRight: 20,
        flex: 1
    },
    mediaPreview: {
        aspectRatio: 9 / 16,
        backgroundColor: 'black',
        width: 60,
        
    },
    buttonsContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 20,
    },
    cancelButton: {
        borderWidth: 1,
        borderColor: 'lightgray',
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        flex: 1,
        marginRight: 10
    },
    postButton: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        flex: 1,
        marginRight: 10,
        backgroundColor: '#ff4040'
    },
    cancelButtonText: {
        fontWeight: "bold",
        color: 'black',
        fontSize: 16,
        marginLeft: 5
    },
    postButtonText: {
        fontWeight: "bold",
        color: 'white',
        fontSize: 16,
        marginLeft: 5
    },
    spacer: {
        flex: 1,
    }
});

export default styles;