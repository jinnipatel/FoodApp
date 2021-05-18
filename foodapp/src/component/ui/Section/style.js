import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/Color';

const styles = StyleSheet.create({
  container: {
    marginVertical:0,
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems: 'center',
    // marginLeft:20,
  },
  line: {
    height: 2,
    width:'35%',
    backgroundColor: Color.DARK_GRAY,
  },
  text: {
    fontSize: 20,
    justifyContent:'space-around',
    margin:5,
    marginHorizontal:10
  },
});
export default styles;
