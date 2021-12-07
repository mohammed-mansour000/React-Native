import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
       flexDirection: "row",
       paddingHorizontal: 20,
       paddingVertical: 10,
       borderBottomWidth: 1,
       borderColor: 'lightgray'
    },
    text: {
        fontSize: 16,
        flex: 1,
        textAlign: "center",
        fontWeight: "bold"
    }    
});

export default styles;