import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/Color';

const styles = StyleSheet.create({
  container: {
    marginVertical:20,
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems: 'center',
    marginLeft:50,
  },
  line: {
    height: 2,
    width: '40%',
    backgroundColor: Color.DARK_GRAY,
  },
  text: {
    fontSize: 20,
    justifyContent:'space-around',
    margin:5
  },
});
export default styles;
