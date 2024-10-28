import React from 'react'
import {NavigationContainer, DarkTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import ProfileFarmerScreen from './screens/ProfileFarmerScreen'
import FarmerDetailsScreen from './screens/FarmerDetailsScreen'
import EditFarmerScreen from './screens/EditFarmerScreen'

export const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#333333',
    primary: '#164c33',
    text: '#ffffff',
  },
}

const Stack = createStackNavigator()

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={MyDarkTheme}>
      <Stack.Navigator initialRouteName="Home"
                       screenOptions={{
                         headerStyle: {
                           backgroundColor: MyDarkTheme.colors.primary,
                         },
                         headerTintColor: MyDarkTheme.colors.text,
                         headerTitleStyle: {
                           fontWeight: 'bold',
                         },
                       }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProfileFarmer" component={ProfileFarmerScreen} />
        <Stack.Screen name="FarmerDetails" component={FarmerDetailsScreen} />
        <Stack.Screen name="EditFarmer" component={EditFarmerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
