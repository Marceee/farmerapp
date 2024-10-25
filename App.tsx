import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProfileFarmerScreen from './screens/ProfileFarmerScreen';
import FarmerDetailsScreen from './screens/FarmerDetailsScreen';
import EditFarmerScreen from './screens/EditFarmerScreen';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProfileFarmer" component={ProfileFarmerScreen} />
        <Stack.Screen name="FarmerDetails" component={FarmerDetailsScreen} />
        <Stack.Screen name="EditFarmer" component={EditFarmerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
