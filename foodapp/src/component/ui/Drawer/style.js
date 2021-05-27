import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/Color';

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    color: Color.PURE_ORANGE,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
});

export default styles;
