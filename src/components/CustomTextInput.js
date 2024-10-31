import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import {Colors} from '../../utils/colors'

const CustomTextInput = ({label, value, onChangeText, ...props}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    position: 'absolute',
    top: -10, // Position the label above the TextInput
    left: 10,
    paddingHorizontal: 5, // Add padding around the text
    fontSize: 12,
    color: Colors.primary,
    zIndex: 1, // Bring label above border
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: Colors.black,
  },
})

export default CustomTextInput
