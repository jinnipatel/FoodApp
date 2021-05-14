import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './style'
import ErrorIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import EyeIcon from 'react-native-vector-icons/Octicons'



class InputText extends Component {
    render() {
        return (
           
                <View style={styles.inputContainer}>
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
                          <ErrorIcon 
                          name={this.props.Errorname}
                          color={this.props.color}
                          size={20}
                          style={styles.errorIcon}/>
                      </TouchableOpacity>

                      <TouchableOpacity>
                          <EyeIcon
                          name={this.props.Eyename}
                          color={this.props.color} 
                          size={20}
                          style={styles.eyeIcon}/>
                      </TouchableOpacity>
                </View>
            
        )
    }
}
export default InputText
