import React, {useState} from 'react'
import DetailsForm from '../components/DetailsForm'
import {NavigationProp} from '@react-navigation/native';
import {FarmerFormData} from '../utils/types'

interface CreateFarmerProfileScreenProps {
  navigation: NavigationProp<any>;
}

const CreateFarmerProfileScreen: React.FC<CreateFarmerProfileScreenProps> = ({navigation}) => {
  const [formData, setFormData] = useState<FarmerFormData>({
    firstName: '',
    lastName: '',
    gender: '',
    phoneNumber: '',
    district: '',
    nin: '',
    farmerCode: '',
    dateOfBirth: '',
  })

  const handleChange = (name: keyof FarmerFormData, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const onSubmit = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3001/api/farmer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({farmer: {...formData}}),
      })
      await response.json()
      navigation.goBack()
    } catch (e) {
      console.log('errorrrr.  ', e)
    }
  }

  return (
    <DetailsForm
      formData={formData}
      handleChange={handleChange}
      onSubmit={onSubmit}
    />
  )
}

export default CreateFarmerProfileScreen
