import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        // marginVertical: 10,
        borderBottomColor: '#000',
        // marginTop: 15,
        width: 280,
        height: 40,
    },
    iconStyle: {
        marginRight: 20,
        marginTop: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: '#05375a',
        marginLeft:50,
        marginTop: 5
    },

})
export default styles