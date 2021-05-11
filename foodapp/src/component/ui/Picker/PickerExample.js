import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import styles from './style'


const PickerExample = (props) => {
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="select country" />
        <Picker.Item label="UK" value="UK" />
        <Picker.Item label="USA" value="USA" />
        <Picker.Item label="India" value="India" />
      </Picker>
    </View>
  )
}
export default PickerExample;
