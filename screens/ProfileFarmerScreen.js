import React, {useState} from 'react'
import {Text, Button, ScrollView, StyleSheet} from 'react-native'
import CustomTextInput from '../components/CustomTextInput'
import {createFarmer} from '../services/auth/farmerService'

export default function ProfileFarmerScreen({navigation}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    phoneNumber: '',
    district: '',
    nin: '',
    farmerCode: '',
    dateOfBirth: '',
  })

  const handleChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const onSubmit = async () => {
    console.log('to submit ', formData)

      const response = await fetch('http://localhost:3001/farmer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ farmer: {...formData}}),
      });
      const data = await response.json();
      console.log('Data:', data);
      navigation.goBack()
  };

  // const onSubmit = async () => {
  //   try {
  //     await createFarmer(formData)
  //     navigation.goBack()
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

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

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
})
