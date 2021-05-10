import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";


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

const styles = StyleSheet.create({
  picker: {
    height: 40,
    width: 200,
    color: 'grey'
  },
  container: {
    height: 50,
    width: 250,
    paddingTop: 0,
    alignItems: "center"
  },

})