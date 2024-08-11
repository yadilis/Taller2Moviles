
import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Inicio } from './src/screen/Inicio';
import { StackNavigator } from './navigaitor/StackNavigator';

 const App = () => {
  return (
   <NavigationContainer>
   <StackNavigator/>
   </NavigationContainer>
  )
}

export default App;