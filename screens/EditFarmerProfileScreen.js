import React, {useState} from 'react'
import {StyleSheet} from 'react-native'
import DetailsForm from '../components/DetailsForm';

export default function EditFarmerProfileScreen({navigation}) {
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
    try{
      const response = await fetch('http://10.0.2.2:3001/api/farmer', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ farmer: {...formData}}),
      });
      const data = await response.json();
      console.log('Data:', data);
      navigation.goBack()
    }catch (e) {
      console.log('errorrrr.  ', e)
    }
  };

  return (
    <DetailsForm
      formData={formData}
      handleChange={handleChange}
      onSubmit={onSubmit}/>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
})
