import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linerGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 400,
    width: '100%',
    backgroundColor: Color.WHITE,
  },
  bottomButton:{
    marginTop: 5, 
    paddingBottom: 10
  }
});
export default styles;
