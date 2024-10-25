import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAccessToken} from './authService';

export const fetchFarmers = async () => {
  const accessToken = await AsyncStorage.getItem('accessToken');
  console.log('ACC token' , accessToken);
  try {
    const response = await axios.get('https://test.profiles.symos.asigmagroup.com/api/v1/farmers', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching farmers', error);
    throw error;
  }
};


export const createFarmer = async (data) => {
  console.log('Data:', data);
  const accessToken = await getAccessToken();
  console.log('Access Token:', accessToken);
  try {
    const response = await axios.post('https://test.profiles.symos.asigmagroup.com/api/v1/farmers', data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,  // Bearer token for OAuth2
        'accept': 'text/plain',
        'Content-Type': 'application/json',
      }
    });

    console.log(response.data);  // Log the created farmer profile
    return response.data;
  } catch (error) {
    console.error('Error creating farmer profile:', error);
  }
};

export const createManyFarmers = async (data) => {
  console.log('to submitfdgghdjjej',JSON.stringify(data));
  const accessToken = await AsyncStorage.getItem('accessToken');
  console.log('GET TOKEN ', accessToken);
  try {
    const response = await axios.post('https://test.profiles.symos.asigmagroup.com/api/v1/farmers/bulk', JSON.stringify(data), {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'accept': 'text/plain',
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating bulk farmers', error);
    throw error;
  }
};

// editfarmer method
export const editFarmer = async (farmerId, data) => {
  const accessToken = await AsyncStorage.getItem('accessToken');
  console.log('djkllll;;;;;; ',accessToken);
  try {
    const response = await axios.put(`https://test.profiles.symos.asigmagroup.com/api/v1/farmers/${farmerId}`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error editing farmer', error);
    throw error;
  }
};
