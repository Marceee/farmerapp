import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CLIENT_ID = 'interview_hub_client'
const CLIENT_SECRET = 'QuMT2AnIo49F+3ju5n1ozQ=='
const AUTH_URL = 'https://test.accounts.asigmagroup.com'
const SCOPE = 'FarmerProfilingApi'
const TOKEN_KEY = 'accessToken'
const EXPIRATION_KEY = '3600'

export const getAccessToken = async () => {
  try {
    const storedToken = await AsyncStorage.getItem(TOKEN_KEY)
    const storedExpiration = await AsyncStorage.getItem(EXPIRATION_KEY)
    const currentTime = Math.floor(Date.now() / 1000) // Current time in seconds

    // Check if token exists and is still valid
    if (
      storedToken &&
      storedExpiration &&
      currentTime < parseInt(storedExpiration, 10)
    ) {
      return storedToken
    }

    // Token is missing or expired; request a new one
    const params = new URLSearchParams()
    params.append('grant_type', 'client_credentials')
    params.append('client_id', CLIENT_ID)
    params.append('client_secret', CLIENT_SECRET)
    params.append('scope', SCOPE)

    const response = await axios.post(
      `${AUTH_URL}/connect/token`,
      params.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )

    const {access_token, expires_in} = response.data
    const expirationTime = currentTime + expires_in // Calculate expiration time

    // Save token and expiration to AsyncStorage
    await AsyncStorage.setItem(TOKEN_KEY, access_token)
    await AsyncStorage.setItem(EXPIRATION_KEY, expirationTime.toString())

    return access_token
  } catch (error) {
    console.error('Error fetching access token:', error.response.data)
    throw new Error('Authentication failed')
  }
}
