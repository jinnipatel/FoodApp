import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/AntDesign';

class InputText extends Component {


    render() {
        return (
            <View>
                <View style={styles.inputContainer}>
                    {/* <Icons name={this.props.iconsname} /> */}
                    {/* <Icon name={this.props.Iconname} size={28} color="#009387" style={styles.iconStyle} onPress={this.props.onPress} /> */}
                    <TextInput style={styles.textInput}
                        placeholder={this.props.placeholder}
                        secureTextEntry={Boolean(this.props.secureTextEntry)}
                        onChangeText={this.props.onChangeText}
                        value={this.props.value}
                        placeholderTextColor={this.props.placeholderTextColor} />
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        borderBottomColor: '#000',
        marginLeft: 10,
        marginTop: 15,
        width: 250
    },
    iconStyle: {
        marginRight: 20,
        marginTop: 7
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },

})
export default InputText
