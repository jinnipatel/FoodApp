import { StyleSheet } from "react-native";
import { Color } from "../../../utils/Color";

const styles = StyleSheet.create({
    valueContainer:{
        marginVertical:10,
      },
    label:{
        marginVertical:8,        
        fontSize:15,
        color:Color.DARK_GRAY
      },
      value:{
        fontSize:20,
        paddingBottom:10,
        borderBottomWidth:1,
        color:Color.WHITE,                       
        borderBottomColor:Color.GAINSBORO
      },
    text: {
        color:Color.BLUE,
        fontSize: 18,
    },
})

export default styles