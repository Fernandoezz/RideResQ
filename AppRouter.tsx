import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from  './src/screens/LandingScreen';
import { ParamList } from './src/types/navigation';
import GetStarted from './src/screens/GetStarted';
import RoleSelection from './src/screens/RoleSelectionScreen';
import OwnerSignupScreen from './src/screens/VehicleOwners/SignupScreen';
import ProviderSignupScreen from './src/screens/ServiceProvider/SignupScreen';


const Stack = createNativeStackNavigator<ParamList>();

export default function AppRouter() {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="RoleSelection"
        component={RoleSelection}
        options={{ headerShown: false }}
      />

<Stack.Screen
        name="VehicleOwnerSignUp"
        component={OwnerSignupScreen}
        options={{ headerShown: false }}
      />

<Stack.Screen
        name="ServiceProviderSignUpStep1"
        component={ProviderSignupScreen}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
}
