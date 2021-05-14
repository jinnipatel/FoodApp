import {Platform, StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import ThemeUtils from '../../utils/ThemeUtils';

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:Color.WHITE,
        width:ThemeUtils.relativeWidth(100),
        height:ThemeUtils.relativeHeight(100),
        alignItems:"center",
        justifyContent:"center",
        position:'absolute',
        paddingTop:Platform.OS === 'ios' ? 20:0

    },
  logo: {
    height:ThemeUtils.relativeHeight(30),
    width: ThemeUtils.relativeWidth(50),
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 75,
  },
});
export default styles;
