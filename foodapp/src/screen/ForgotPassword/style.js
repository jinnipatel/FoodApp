import { StyleSheet } from "react-native";
import { Color } from "../../utils/Color";


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:"#10353A"
    },
    MainContainer:{
        flex:2,
    },
    linerGradient:{
        width:'100%',
        height:'100%',
        opacity:0.95,
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
        flex:4,
        height:500,
        width:'100%',
        paddingHorizontal:20,
        backgroundColor:Color.WHITE,
        borderRadius:12,
        marginTop:40,
        borderTopStartRadius:50,
        borderTopEndRadius:50
    },
    


});
export default styles