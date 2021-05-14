import { StyleSheet } from "react-native";
import { Color } from "../../../utils/Color";

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderBottomColor:Color.BLACK,
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
        color:Color.BLUE,
        marginLeft:50,
        marginTop: 5
    },
    errorIcon:{
        marginTop:15,
        marginRight:20,
        color:'red'
    },
    eyeIcon:{
        marginTop:15,
        marginRight:20,
        color:"#a5a5a5"
    }

})
export default styles