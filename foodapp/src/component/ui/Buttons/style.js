import { StyleSheet } from 'react-native'
import { Color } from '../../../utils/Color'

const styles = StyleSheet.create({
    button: {
      width: 325,
      height: 45,
      marginLeft:25,
    },
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:25
    },
    text: {
      color: Color.WHITE,
      fontSize: 20,
      fontWeight: 'bold'
    },
  })

  export default styles

  