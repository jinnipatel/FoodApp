import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import Routes from '../../routes/routes';
import {Label} from '../../component'
import styles from './style'
import { Color } from '../../utils/Color';





const AppIntroScreen = ({navigation}) => {
    const slides = [
        {
          key: 's1',
          text: "",
          title: "Acceted Order",
          image: require('../../assets/Img/Orderfood.png'),
        },
        {
          key: 's2',
          title: 'Collected Order & Pickup order',
          text: '',
          image : require('../../assets/Img/payment.png'),
        },
        {
          key: 's3',
          title: 'Get Payment',
          text: 'Get food delivery in the fastest time ',
          image : require('../../assets/Img/FoodDelivery.png')
        },
       
      ];
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const RenderNextButton = () => {
    return (
       <View>    
        <Icon
          name="chevron-right"
          color="rgba(255, 255, 255, .9)"
          size={30}
          style={{color:Color.BLUE}}
        />
      </View>
    );
  };

  const RenderDoneButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(Routes.Login)} >
      <View >
        <EntypoIcon
          name="login"
          color="rgba(255, 255, 255, .9)"
          size={30}

          style={{color:Color.BLUE,fontWeight:'bolder'}}
        />
      </View>
      </TouchableOpacity>
    );
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,                
          backgroundColor:Color.WHITE,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Label style={styles.introTitleStyle}>{item.title}</Label>
        <Image
          style={styles.introImageStyle}
          source={item.image} />
        <Label style={styles.introTextStyle}>{item.text}</Label>

      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        null
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          renderDoneButton={RenderDoneButton}
          renderNextButton={RenderNextButton}
        />
      )}
    </>
  );
};

export default AppIntroScreen;



