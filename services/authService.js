import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CLIENT_ID = 'interview_hub_client';
const CLIENT_SECRET = 'QuMT2AnIo49F+3ju5n1ozQ==';
const AUTH_URL = 'https://test.accounts.asigmagroup.com';
const SCOPE = 'FarmerProfilingApi';
const TOKEN_KEY = 'accessToken';

export const getAccessToken = async () => {
  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', CLIENT_ID);
    params.append('client_secret', CLIENT_SECRET);
    params.append('scope', SCOPE);

    const response = await axios.post(`${AUTH_URL}/connect/token`, params.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { access_token } = response.data;
    await AsyncStorage.setItem(TOKEN_KEY, access_token);
    return access_token;
  } catch (error) {
    console.error('Error fetching access token:', error.response.data);
    throw new Error('Authentication failed');
  }
};

