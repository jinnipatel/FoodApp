import { StyleSheet } from "react-native";
import { Color } from "../../../utils/Color";

const styles = StyleSheet.create({
     container:{
         height:'25%',
         width:'100%',
         backgroundColor:Color.GRADIENT4,
         marginBottom:40
     },
     subContainer:{
         marginTop:20,
         paddingHorizontal:15,
         paddingHorizontal:25,
         flexDirection:'row',
         justifyContent:'space-between'
     },
     text:{
         alignItems:'center',
         fontSize:24,
         color:Color.WHITE
     }
})

export default styles

