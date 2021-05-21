import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/Color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  line: {
    height: 2,
    width:'46%',
    backgroundColor: Color.DARK_GRAY,
    
  },
  text: {
    fontSize: 14,
    justifyContent:'space-around',
    margin:5,
    // marginHorizontal:10
  },
});
export default styles;
