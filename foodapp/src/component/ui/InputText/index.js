import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import styles from './style'


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
                </View>
            
        )
    }
}
export default InputText
