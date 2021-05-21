import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/Color';
import ThemeUtils from '../../../utils/ThemeUtils';

const styles = StyleSheet.create({
  button:{
    flexDirection:'row',
    height:ThemeUtils.relativeHeight(6),
    width:ThemeUtils.relativeWidth(40),
    borderRadius:12,
    justifyContent:'space-evenly',
    alignItems:'center',
    marginTop:10,
    borderWidth:1,
    borderColor:Color.DARK_GRAY,
    // padding:10
    // marginLeft:5
  },
  image:{
    width:ThemeUtils.relativeWidth(5),
    height:ThemeUtils.relativeHeight(3)
  },
  text:{
    // marginStart:25,
    fontWeight:'bold',
    fontSize:18,
    letterSpacing:1,
    color:Color.BLACK,
    
  }
  
});

export default styles;
