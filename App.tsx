import React from 'react'
import {NavigationContainer, DarkTheme} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import ProfileFarmerScreen from './screens/ProfileFarmerScreen'
import FarmerDetailsScreen from './screens/FarmerDetailsScreen'
import EditFarmerScreen from './screens/EditFarmerScreen'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faCog, faHome} from '@fortawesome/free-solid-svg-icons'
import SettingsScreen from './screens/SettingsScreen'
import {Colors} from './utils/colors.ts'

export const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#164c33',
    background: '#ffffff',
    white: '#ffffff',
  },
}

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: MyDarkTheme.colors.primary,
        },
        headerTintColor: MyDarkTheme.colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProfileFarmer" component={ProfileFarmerScreen} />
      <Stack.Screen name="FarmerDetails" component={FarmerDetailsScreen} />
      <Stack.Screen name="EditFarmer" component={EditFarmerScreen} />
    </Stack.Navigator>
  )
}

function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: MyDarkTheme.colors.primary,
        },
        headerTintColor: MyDarkTheme.colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  )
}

const App = (): React.ReactElement => {
  return (
    <NavigationContainer theme={MyDarkTheme}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            let iconName = faHome

            if (route.name === 'Home') {
              iconName = faHome
            } else if (route.name === 'Settings') {
              iconName = faCog
            }

            return <FontAwesomeIcon icon={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: MyDarkTheme.colors.primary,
          tabBarInactiveTintColor: Colors.background,
          tabBarStyle: {backgroundColor: MyDarkTheme.colors.white},
        })}>
        <Tab.Screen name="Hom" component={HomeStack} />
        <Tab.Screen name="Set" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
