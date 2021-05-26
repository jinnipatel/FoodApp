import React, {useState} from 'react';
import {View, Image, TouchableOpacity, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import Routes from '../../routes/routes';
import {Label} from '../../component/index';
import {Color} from '../../utils/Color';
import styles from './style';

const Onboarding = ({navigation}) => {
  const slides = [
    {
      key: 's1',
      title: 'Find Foods You Want',
      text: 'Discover The Best Foods From Nearest Restaurants.',
      image: require('../../assets/Img/Orderfood.png'),
    },
    {
      key: 's2',
      title: 'Live Tracking',
      text: 'Real Time Tracking Of Your Food Order On The App.',
      image: require('../../assets/Img/img2.png'),
    },
    {
      key: 's3',
      title: 'Fast Delivery',
      text: 'Fast Delivery To Your Home,Office and Wherever You Are. ',
      image: require('../../assets/Img/FoodDelivery.png'),
    },
  ];

  const onDone = () => {
    props.onDone();
  };

  const RenderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="arrow-right" style={{fontSize: 25, color: Color.WHITE}} />
      </View>
    );
  };

  const RenderDoneButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(Routes.Login)}>
        <View style={styles.buttonCircle}>
          <Icon
            name="thumbs-up"
            style={{fontSize: 25, fontWeight: 'bold', color: Color.WHITE}}
          />
        </View>
      </TouchableOpacity>
    );
  };
  const RenderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image style={styles.introImageStyle} source={item.image} />
        <Label
          xlarge
          bolder
          color={Color.DARK_MODERATE_BLUE}
          align="center"
          letterSpacing={1}>
          {item.title}
        </Label>

        <View style={{marginHorizontal: 20}}>
          <Label align="center" large color={Color.DARK_MODERATE_BLUE} mb={10}>
            {item.text}
          </Label>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar hidden={true} />
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={onDone}
        renderDoneButton={RenderDoneButton}
        renderNextButton={RenderNextButton}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      />
    </View>
  );
};

export default Onboarding;
