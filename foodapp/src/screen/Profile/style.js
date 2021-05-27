import {StyleSheet} from 'react-native';
import {Color, ThemeUtils} from '../../utils';

const Styles = StyleSheet.create({
  MainConatiner: {
    flex: 1,
    backgroundColor: Color.PRIMARY,
  },
  HeaderContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: ThemeUtils.relativeWidth(33),
    height: ThemeUtils.relativeHeight(20),
  },
  MainFooterContainer: {
    flex: 5,
  },
  subContainer: {
    flex: 2,
    backgroundColor: Color.ALICE_BLUE,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  MainView: {
    marginTop: 25,
  },
  subView: {
    margin: 10,
  },
});

export default Styles;
