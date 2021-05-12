import { CommonActions } from '@react-navigation/routers';
import React from 'react';
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from '../../routes/routes';
import { Label } from '../../component';
import {Color} from '../../utils/Color'


class SplashScreen extends React.Component {

    resetToAuth = CommonActions.reset({
        index: 0,
        routes: [{
            name: Routes.Authenticated
        }]
    })

    resetToNotAuth = CommonActions.reset({
        index: 0,
        routes: [{
            name: Routes.NotAuthenticated
        }]
    })

    componentDidMount() {
        this.checkAuthentication();
    }

    checkAuthentication = async () => {
        let isAuthenticated = await AsyncStorage.getItem('signup_data');
        if (isAuthenticated != null)
            this.goTo(true);
        else
            this.goTo(false)

    }
    goTo = (value) => {
        if (value) {
            setTimeout(() => {
                this.props.navigation.dispatch(this.resetToAuth);
            }, 2000);
        } else {
            setTimeout(() => {
                this.props.navigation.dispatch(this.resetToNotAuth);
            }, 2000);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#0C1B32' barStyle="light-content" />
                <View style={styles.header}>
                    <Animatable.Image
                        animation="bounceIn"
                        iterationDelay={400}
                        source={require("../../assets/Img/hello1.gif")} resizeMode='center' />
                </View>
                <Animatable.View style={styles.footer}
                    animation="fadeInUpBig"
                    iterationDelay={400} >
                    <Label bold xxlarge color={Color.BLUE}>Stay connected with everyone</Label>
                    {/* <Text style={styles.title}>Stay connected with everyone!</Text> */}
                    {/* <Text style={styles.text}>Sign in with account</Text> */}
                    <Label lighter small color={Color.GREY}>Sign in with account</Label>
                    <View style={styles.button}>
                        <TouchableOpacity>
                            <LinearGradient
                                colors={['#0C1B32', '#01ab9d']}
                                style={styles.signIn}
                            >
                                <Text style={styles.textSign}>Get Started</Text>
                                <MaterialIcons
                                    name="navigate-next"
                                    color="#fff"
                                    size={20}
                                    style={{ alignSelf: 'center' }}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                </Animatable.View>
            </View>
        )
    }

}

export default SplashScreen;



// function SplashScreen({ navigation }) {
//     return (

//         <View style={styles.container}>
//             <StatusBar backgroundColor='#0C1B32' barStyle="light-content" />
//             <View style={styles.header}>
//                 <Animatable.Image
//                     animation="bounceIn"
//                     iterationDelay={400}
//                     source={require("../../assets/Img/hello1.gif")} resizeMode='center' />
//             </View>
//             <Animatable.View style={styles.footer}
//                 animation="fadeInUpBig"
//                 iterationDelay={400} >
//                 <Text style={styles.title}>Stay connected with everyone!</Text>
//                 <Text style={styles.text}>Sign in with account</Text>

//                 <View style={styles.button}>
//                     <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//                         <LinearGradient
//                             colors={['#0C1B32', '#01ab9d']}
//                             style={styles.signIn}
//                         >
//                             <Text style={styles.textSign}>Get Started</Text>
//                             <MaterialIcons
//                                 name="navigate-next"
//                                 color="#fff"
//                                 size={20}
//                                 style={{ alignSelf: 'center' }}
//                             />
//                         </LinearGradient>
//                     </TouchableOpacity>
//                 </View>

//             </Animatable.View>
//         </View>
//     )
// }

// export default SplashScreen;



// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: "#009387"

//     },
//     header: {
//         flex: 2,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#009387',
//     },
//     footer: {
//         flex: 1,
//         backgroundColor: '#fff',
//         borderTopLeftRadius: 30,
//         borderTopRightRadius: 30,
//         paddingVertical: 50,
//         paddingHorizontal: 30
//     },
//     title: {
//         color: "#05375a",
//         fontSize: 30,
//         fontWeight: 'bold'
//     },
//     text: {
//         color: 'grey',
//         marginTop: 10,
//         fontSize: 20

//     },
//     button: {
//         alignItems: 'flex-end',
//         marginTop: 30
//     },
//     Button: {
//         alignItems: 'flex-end',
//         marginTop: 30
//     },
//     signIn: {
//         width: 150,
//         height: 40,
//         justifyContent: 'center',
//         borderRadius: 50,
//         flexDirection: 'row'
//     },
//     textSign: {
//         color: 'white',
//         fontWeight: 'bold',
//         alignSelf: 'center'

//     }



// })