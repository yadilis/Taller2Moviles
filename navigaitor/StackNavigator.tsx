import { createStackNavigator } from '@react-navigation/stack'
import React, { useState } from 'react'
import { PRIMARY_COLOR } from '../commons/contsns';

import { Registro } from '../src/screen/Registro';
import { Inicio } from '../src/screen/Inicio';
import { Tienda } from '../src/screen/TiendaScreen/Tienda';

export interface User{
  id: number;
  email: string;
  password: string;
}



const Stack =createStackNavigator();

export const StackNavigator = () => {
  const users : User[] =[
    { id: 1, email: 'yadira@gmail.com', password:'123456' },
    { id: 2, email: 'estalin@gmail.com', password:'547166' },
    { id: 3, email: 'nelly@gmail.com', password:'547166' }
];
  //lista de usurios para iniciar-registrar
  const[listUsers, setListUser]=useState(users);

  const handleAddUser=(user:User)=>{


    setListUser([...listUsers,user]);
  }
  return (
    <Stack.Navigator
    screenOptions={{
        cardStyle:{
            backgroundColor:PRIMARY_COLOR
        }
    }}>
      <Stack.Screen name="Home" options={{ headerShown: false }} 
      children={()=> <Inicio users={listUsers}/> } />
      <Stack.Screen name="Register" options={{
         headerShown: false }} 
       children={()=><Registro users={listUsers} 
       handleAddUse={handleAddUser}/>}/>

       <Stack.Screen name='Tienda' options={{headerShown:false}} component={Tienda}/>
    
      </Stack.Navigator>
      );
}
