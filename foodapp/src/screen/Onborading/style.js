import { StyleSheet } from "react-native";
import { Color } from "../../utils/Color";
import ThemeUtils from "../../utils/ThemeUtils";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:Color.WHITE,
      alignItems: 'center',
      padding: 10,
      justifyContent: 'center',
    },
    titleStyle: {
      padding: 10,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
    paragraphStyle: {
      padding: 20,
      textAlign: 'center',
      fontSize: 16,
    },
    introImageStyle: {
      width: '100%',
      height: 200,
    },
    introTextStyle: {
      fontSize: 18,
      // color: 'white',
      textAlign: 'center',
      paddingVertical: 30,
      color:Color.MEDIUM_DARK_BLUE
  
    },
    introTitleStyle: {
      fontSize: 25,
      // color: 'white',
      color:Color.MEDIUM_DARK_BLUE,
      textAlign: 'center',
      marginBottom: 16,
      fontWeight: 'bold',
    },
    buttonCircle: {
      marginTop:4,
      width: 40,
      height: 40,
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default styles