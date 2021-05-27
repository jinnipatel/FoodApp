import React, {Component} from 'react';
import CommonStyles from '../../../utils/CommonStyles';
import * as Animatable from 'react-native-animatable';

export class ImageComp extends Component {
  render() {
    return (
      <Animatable.Image
        animation="fadeInLeft"
        iterationDelay={400}
        source={require('../../../assets/Img/foodoorer_logo.png')}
        style={CommonStyles.logo}
      />
    );
  }
}

export default ImageComp;
