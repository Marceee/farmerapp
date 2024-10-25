import React from 'react';
import {Text, TextInput, Button, ScrollView} from 'react-native'; // Import Picker for gender selection
import { Controller, useForm } from 'react-hook-form';
import {createFarmer} from '../services/farmerService';


export default function ProfileFarmerScreen({ navigation }) {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await createFarmer();
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text>Profile a Farmer</Text>
      <Controller
        control={control}
        name="firstName"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="First Name"
            value={value}
            onChangeText={onChange}
            style={{ borderBottomWidth: 1, marginBottom: 20 }}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Last Name"
            value={value}
            onChangeText={onChange}
            style={{ borderBottomWidth: 1, marginBottom: 20 }}
          />
        )}
      />

      <Controller
        control={control}
        name="gender"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Gender"
            value={value}
            onChangeText={onChange}
            style={{ borderBottomWidth: 1, marginBottom: 20 }}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Phone Number"
            value={value}
            onChangeText={onChange}
            style={{ borderBottomWidth: 1, marginBottom: 20 }}
          />
        )}
      />

      <Controller
        control={control}
        name="district"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="District"
            value={value}
            onChangeText={onChange}
            style={{ borderBottomWidth: 1, marginBottom: 20 }}
          />
        )}
      />

      <Controller
        control={control}
        name="NIN"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="NIN"
            value={value}
            onChangeText={onChange}
            style={{ borderBottomWidth: 1, marginBottom: 20 }}
          />
        )}
      />

      <Controller
        control={control}
        name="farmerCode"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Farmer code"
            value={value}
            onChangeText={onChange}
            style={{ borderBottomWidth: 1, marginBottom: 20 }}
          />
        )}
      />

      <Controller
        control={control}
        name="dateOfBirth"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Date of Birth (YYYY-MM-DD)"
            value={value}
            onChangeText={onChange}
            style={{ borderBottomWidth: 1, marginBottom: 20 }}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Phone Number"
            value={value}
            onChangeText={onChange}
            style={{ borderBottomWidth: 1, marginBottom: 20 }}
            keyboardType="phone-pad" // Ensures the numeric keypad appears
          />
        )}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
}
