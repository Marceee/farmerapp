import React from 'react'
import {Button, ScrollView, StyleSheet} from 'react-native'
import CustomTextInput from './CustomTextInput'
import {FarmerFormData} from '../utils/types'

interface DetailsFormInputProps {
  formData: FarmerFormData
  handleChange: (field: keyof FarmerFormData, value: string) => void
  onSubmit: () => void
}

const DetailsForm: React.FC<DetailsFormInputProps> = ({
  formData,
  handleChange,
  onSubmit,
}) => {
  return (
    <ScrollView style={styles.container}>
      <CustomTextInput
        label="First Name"
        value={formData.firstName}
        onChangeText={value => handleChange('firstName', value)}
      />

      <CustomTextInput
        label="Last Name"
        value={formData.lastName}
        onChangeText={value => handleChange('lastName', value)}
      />

      <CustomTextInput
        label="Gender"
        value={formData.gender}
        onChangeText={value => handleChange('gender', value)}
      />

      <CustomTextInput
        label="Phone Number"
        value={formData.phoneNumber}
        onChangeText={value => handleChange('phoneNumber', value)}
        keyboardType="phone-pad"
      />

      <CustomTextInput
        label="District"
        value={formData.district}
        onChangeText={value => handleChange('district', value)}
      />

      <CustomTextInput
        label="NIN"
        value={formData.nin}
        onChangeText={value => handleChange('nin', value)}
      />

      <CustomTextInput
        label="Farmer Code"
        value={formData.farmerCode}
        onChangeText={value => handleChange('farmerCode', value)}
      />

      <CustomTextInput
        label="Date of Birth (YYYY-MM-DD)"
        value={formData.dateOfBirth}
        onChangeText={value => handleChange('dateOfBirth', value)}
      />
      <Button title="Submit" onPress={onSubmit} />
    </ScrollView>
  )
}

export default DetailsForm

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
