import React, {useState} from 'react'
import {Alert, StyleSheet, ToastAndroid} from 'react-native';
import DetailsForm from '../components/DetailsForm';

export default function EditFarmerProfileScreen({route, navigation}) {
  const {farmer} = route.params

  const [formData, setFormData] = useState({
    firstName: farmer.firstName,
    lastName: farmer.lastName,
    gender: farmer.gender,
    phoneNumber: farmer.phoneNumber,
    district: farmer.district,
    nin: farmer.nin,
    farmerCode: farmer.code,
    dateOfBirth: farmer.dateOfBirth,
  })



  const handleChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const onSubmit = async (id) => {
    try {
      const response = await fetch('http://10.0.2.2:3001/api/farmer/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ farmer: {...formData}}),
      })
      if (response.ok) {
        navigation.navigate('Home');
      } else {
        Alert.alert(
          'Error',
          'Failed to delete farmer.',
        );
        console.error('Failed to delete farmer. Server responded with status:', response.status);
      }
    } catch (error) {
      console.error('Error deleting farmer...', error)
    }
  }

  return (
    <DetailsForm
      formData={formData}
      handleChange={handleChange}
      onSubmit={()=>onSubmit(farmer.id)}/>
  )
}
