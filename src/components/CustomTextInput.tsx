import React from 'react'
import {View, Text, TextInput, StyleSheet, TextInputProps} from 'react-native'
import {Colors} from '../utils/colors'

interface CustomTextInputProps extends TextInputProps {
  label: string
  value: string
  onChangeText: (text: string) => void
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  onChangeText,
  ...props
}) => {
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
    top: -10,
    left: 10,
    paddingHorizontal: 5,
    fontSize: 12,
    color: Colors.primary,
    zIndex: 1,
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
