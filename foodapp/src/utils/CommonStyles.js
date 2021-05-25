import { StyleSheet } from "react-native";
import { Color } from "./Color";
import ThemeUtils from "./ThemeUtils";

const Style = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    },
    logo:{
        alignSelf:'center',
        height:ThemeUtils.relativeHeight(14),
        width:ThemeUtils.relativeWidth(45)
    },
    content_container:{
        // height:450,
        width:ThemeUtils.relativeWidth(95),
        paddingHorizontal:20,
        backgroundColor:Color.WHITE,
        borderRadius:12,
    },
    linerGradient:{
        width:'100%',
        height:'100%',
        opacity:0.95,
        justifyContent:'center',
        alignItems:'center'
     },
     login_signup_container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop:10,
        marginBottom:10
     },
     bottom_border:{
        borderBottomWidth:4,
        borderBottomColor:"#62b34c",
        width:'40%',
        paddingBottom:10,
     }
});
export default Style;