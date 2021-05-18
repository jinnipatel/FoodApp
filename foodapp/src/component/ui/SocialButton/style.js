import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/Color';

const styles = StyleSheet.create({
  button:{
    flexDirection:'row',
    height:50,
    width:155,
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    borderWidth:1,
    borderColor:Color.DARK_GRAY,
    // marginLeft:5
  },
  image:{
    width:25,
    height:20,
  },
  text:{
    marginStart:25,
    fontWeight:'bold',
    fontSize:18,
    letterSpacing:1,
    color:Color.BLACK,
    
  }
  
});

export default styles;
