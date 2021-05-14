import React ,{Component}from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import { Color } from '../../../utils/Color'



class Header extends  Component{
    render(){
        return(
            <View style={styles.container} >
            <View style={styles.subContainer}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <Icon  name="menu" size={30} color={Color.GAINSBORO}/>
                </TouchableOpacity>
               <Text style={styles.text} >{this.props.Headertext}</Text>
                <Icon name="notifications" size={26} color={Color.GAINSBORO}/>
            </View>
        </View>
        )
    }
}


export default Header
