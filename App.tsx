import React from 'react'
import {NavigationContainer, DarkTheme} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen.tsx'
import CreateFarmerProfileScreen from './src/screens/CreateFarmerProfileScreen.tsx'
import FarmerDetailsScreen from './src/screens/FarmerDetailsScreen.tsx'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faCog, faHome} from '@fortawesome/free-solid-svg-icons'
import SettingsScreen from './src/screens/SettingsScreen.tsx'
import {Colors} from './src/utils/colors.ts'
import EditFarmerProfileScreen from './src/screens/EditFarmerProfileScreen.tsx'

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
      <Stack.Screen
        name="Profile A Farmer"
        component={CreateFarmerProfileScreen}
      />
      <Stack.Screen name="Farmer Details" component={FarmerDetailsScreen} />
      <Stack.Screen
        name="Edit Farmer Details"
        component={EditFarmerProfileScreen}
      />
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

            if (route.name === 'HomeScreen') {
              iconName = faHome
            } else if (route.name === 'SettingsScreen') {
              iconName = faCog
            }

            return <FontAwesomeIcon icon={iconName} size={size} color={color} />
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: MyDarkTheme.colors.primary,
          tabBarInactiveTintColor: Colors.grey,
          tabBarStyle: {backgroundColor: MyDarkTheme.colors.white},
        })}>
        <Tab.Screen name="HomeScreen" component={HomeStack} />
        <Tab.Screen name="SettingsScreen" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
