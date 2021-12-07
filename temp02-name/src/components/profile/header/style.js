import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      paddingVertical: 20,
      paddingHorizontal: 50,
      alignItems: "center",
      borderBottomWidth: 1,
      borderColor: 'lightgray'
    },
    emailText: {
        padding: 20,
        fontWeight: "bold"
    },
    counterContainer: {
        flexDirection: "row",
        paddingBottom: 20
    },
    counterItemContainer: {
        flex: 1,
        alignItems: "center",
    },
    counterNumberText: {
        fontWeight: "bold",
        fontSize: 16
    },
    counterLabelText: {
        fontSize: 11,
        color: 'gray'
    }
});

export default styles;