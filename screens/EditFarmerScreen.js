import React from 'react'
import {View, TextInput, Button} from 'react-native'
import {editFarmer} from '../services/auth/farmerService'

export default function EditFarmerScreen({route, navigation}) {
  const {farmer} = route.params

  const onSubmit = async data => {
    try {
      await editFarmer(farmer.id, data)
      navigation.goBack()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View style={{padding: 20}}>
      <Button title="Save" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}
