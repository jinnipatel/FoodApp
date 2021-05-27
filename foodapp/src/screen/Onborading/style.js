import {StyleSheet} from 'react-native';
import {Color, ThemeUtils} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 100,
  },
  buttonCircle: {
    marginTop: 4,
    width: 40,
    height: 40,
    backgroundColor: Color.PRIMARY,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  introImageStyle: {
    width: ThemeUtils.relativeWidth(75),
    height: ThemeUtils.relativeHeight(30),
    marginTop: 40,
  },
  dotStyle: {  
    backgroundColor: Color.DARK_GRAY,
  },
  activeDotStyle: {
    backgroundColor: Color.PRIMARY,
  },
});

export default styles;
