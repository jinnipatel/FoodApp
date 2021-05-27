import {StyleSheet} from 'react-native';
import {ThemeUtils} from '../../../utils';
import {Color} from '../../../utils/Color';

const styles = StyleSheet.create({
  maincontainer: {
    alignItems: 'center',
  },
  button: {
    height: ThemeUtils.relativeHeight(7),
    width: ThemeUtils.relativeWidth(80),
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Color.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
