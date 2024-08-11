import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { PRIMARY_COLOR } from '../commons/contsns';

import { Inicio } from '../src/screen/Inicio';
import { Registro } from '../src/screen/Registro';



const Stack =createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        cardStyle:{
            backgroundColor:PRIMARY_COLOR
        }
    }}>
      <Stack.Screen name="Home" options={{ headerShown: false }}  component={Inicio} />
      <Stack.Screen name="Register" options={{ headerShown: false }}  component={Registro} />
    
      </Stack.Navigator>
      );
}
