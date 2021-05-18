import { StyleSheet } from "react-native";
import { Color } from "../../../utils/Color";

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginTop:10,
        borderColor:Color.BLACK,
        borderRadius:14,
        borderWidth:2,
        height:50,
        width:360,
        marginLeft:5
    },
    iconstyle:{
        marginTop: 15,
        marginLeft: 20,
        position: 'absolute',
        fontSize: 20,
        color: '#28388f',
    },
    textInput: {
        paddingLeft:60,
        flex:1,
        fontSize:20,
        color: '#6f6e92'
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