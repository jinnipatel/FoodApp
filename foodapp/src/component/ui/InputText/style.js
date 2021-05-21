import { StyleSheet } from "react-native";
import { Color } from "../../../utils/Color";

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginTop:10,
        borderColor:Color.WHITE,
        backgroundColor:Color.WHITE,
        borderRadius:14,
        borderWidth:2,
        height:50,
        width:325,
        marginLeft:5,
        alignSelf:'center'
    },
    iconstyle:{
        marginTop: 15,
        marginLeft: 20,
        position: 'absolute',
        fontSize: 20,
        color:Color.GREEN_GREEN
    },
    textInput: {
        paddingLeft:60,
        flex:1,
        fontSize:20,
        color: '#6f6e92'
    },
    eyeIcon:{
        alignSelf:'center',
        marginRight:20,
        marginTop:14
    }

})
export default styles