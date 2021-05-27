import {StyleSheet} from 'react-native';
import {ThemeUtils} from '../../../utils';
import {Color} from '../../../utils/Color';

const styles = StyleSheet.create({
  container: {
    height: ThemeUtils.relativeHeight(10),
    width: ThemeUtils.relativeWidth(100),
    backgroundColor: Color.PRIMARY,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  subContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    color: Color.WHITE,
  },
});

export default styles;
