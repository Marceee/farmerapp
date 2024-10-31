import React, {useState} from 'react'
import DetailsForm from '../components/DetailsForm';

export default function CreateFarmerProfileScreen({navigation}) {
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

    try{
      const response = await fetch('http://10.0.2.2:3001/api/farmer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ farmer: {...formData}}),
      });
      await response.json();
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
