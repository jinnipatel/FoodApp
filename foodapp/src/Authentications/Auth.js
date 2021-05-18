import { CommonActions } from '@react-navigation/routers';
import React, { Component } from 'react'
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from '../routes/routes';
import { Loader } from '../component';
import { Color } from '../utils/Color';


export default class Auth extends Component {

    // saveData() {
    //     alert("hello");
    // }
    constructor(props) {
        super(props)
        this.state = {
            email: ' ',
            password: ' '
        }
    }
    componentDidMount() {
        const { email, password } = this.props.route.params;
        debugger
        this.setState({ email: email, password: password })
        // let obj = {
        //     name: 'jeeni',
        //     email: "jinni@gmail.com",
        //     password: '12345'
        // }
        // AsyncStorage.setItem('user', JSON.stringify(obj));
        this.check()
    }
    resetToAuth = CommonActions.reset({
        index: 0,
        routes: [{
            name: Routes.Authenticated
        }]
    })


    check = async () => {

        // debugger
        try {

            let user = await AsyncStorage.getItem('signup_data');
            console.log('data from auth -- ', user)
            let parsed = JSON.parse(user);
            console.log(this.state.email + '--' + this.state.password)
            console.log('data from auth parsed-- ', parsed.email, parsed.password)
            // && parsed.password === this.state.password
            if (parsed.email === this.state.email) {
                // debugger
                this.props.navigation.dispatch(this.resetToAuth)
            } else {
                // debugger
                alert('Email or password is invalid');
                this.props.navigation.navigate(Routes.Login);
            }
        }

        catch (error) {
            console.log(error)
            // debugger
            alert("no account")
            this.props.navigation.navigate(Routes.Login);  
        }
    }
    render() {
        return (
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
             <Loader size="large" color={Color.DARK_MODERATE_BLUE}/>
            </View>
        )
    }
}
