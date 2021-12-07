import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerMain: {
        padding: 30,
        flex: 1,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 25,
        textAlign: "center",
        color: '#333'
    },
    providerButton: {
        borderColor: 'lighgray',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    providerButtonText: {
        paddingRight: 20
    },
    containerBottomButton: {
        backgroundColor: 'ghostwhite',
        padding: 20,
        alignItems: "center",
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'lightgray'
    },
    BottomButtonText: {
        fontWeight: 'bold',
        color: 'red'
    }
});

export default styles;