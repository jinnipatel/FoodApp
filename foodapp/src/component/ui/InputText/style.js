import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        borderBottomColor: '#000',
        marginLeft: 10,
        marginTop: 15,
        width: 250
    },
    iconStyle: {
        marginRight: 20,
        marginTop: 7
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },

})
export default styles