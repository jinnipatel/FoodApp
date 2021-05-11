import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

const label = (props) => {
    return (
        <View style={styles.valueContainer}> 
            <Text style={styles.label}>{props.label}</Text>
            <Text style={styles.value}>{props.value}</Text>
        </View>
    )
}

export default label
