import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './AppRouter'

export default function App() {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );
}


