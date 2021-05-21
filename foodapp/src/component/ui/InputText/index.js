import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CloseIcon from 'react-native-vector-icons/Octicons'


class InputText extends Component {
    render() {
        return (
              
                <View style={styles.inputContainer}>
                    <Icon 
                    name={this.props.name}
                    size={20}
                    color={this.props.colorIcon}
                    style={styles.iconstyle}/>
                    <TextInput style={styles.textInput}
                        placeholder={this.props.placeholder}
                        secureTextEntry={Boolean(this.props.secureTextEntry)}
                        onChangeText={this.props.onChangeText}
                        onBlur={this.props.onBlur}
                        value={this.props.value}
                        error={this.props.error}
                        placeholderTextColor={this.props.placeholderTextColor}
                      />
                      <TouchableOpacity onPress={this.props.onToggle}>
                      <CloseIcon 
                       name={this.props.IconName}
                       size={20}
                       color={this.props.closeColor}
                       style={styles.eyeIcon} />
                       </TouchableOpacity>
            
            </View>
        )
    }
}
export default InputText
