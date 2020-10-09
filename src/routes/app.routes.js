import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'; 

import Home from '../pages/Home';
import CustomDrawer from '../customDrawer/DrawerCustoms';
import {createStackNavigator} from '@react-navigation/stack';
import Courses from '../pages/Courses';
import Cadastro from '../pages/Cadastro';
import Conquistas from '../pages/Consquistas';
import Provas from '../pages/Provas';
const Drawer = createDrawerNavigator(); 
const Stack = createStackNavigator();

function AppSRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home"
         component={DrawerRoute} 
          options={{
          title: 'M T D',
          headerStyle:{
            backgroundColor: '#0046a8'
          },
          headerTintColor: '#fff',
          // Tirar header
          headerShown: false
        }}
        />

        <Stack.Screen name="Courses"
         component={Courses} 
          options={{
          title: 'Cursos',
          headerStyle:{
            backgroundColor: '#0046a8'
          },
          headerTintColor: '#fff',
          // Tirar header
          headerShown: true
        }}
        />

          <Stack.Screen name="Cadastro"
         component={Cadastro} 
          options={{
          title: 'Cadastro',
          headerStyle:{
            backgroundColor: '#0046a8'
          },
          headerTintColor: '#fff',
          // Tirar header
          headerShown: true
        }}
        />

<Stack.Screen name="Conquistas"
         component={Conquistas} 
          options={{
          title: 'Conquistas',
          headerStyle:{
            backgroundColor: '#0046a8'
          },
          headerTintColor: '#fff',
          // Tirar header
          headerShown: true
        }}
        />

<Stack.Screen name="Provas"
         component={Provas} 
          options={{
          title: 'Provas',
          headerStyle:{
            backgroundColor: '#0046a8'
          },
          headerTintColor: '#fff',
          // Tirar header
          headerShown: true
        }}
        />
    </Stack.Navigator>
  );
}

// function AppSRoutes() {
//  return (
//   <AppDrawer.Navigator drawerContent={props=><CustomDrawer {...props}/>}>
//   <AppDrawer.Screen name="Home"
//    component={Home}
//    options={{headerShown: true}} />
// </AppDrawer.Navigator>
//   );
// }

function DrawerRoute() {
  return (
      <Drawer.Navigator drawerContent={props=><CustomDrawer {...props}/>}>
        <Drawer.Screen name="Home"
         component={Home} 
         options={{headerShown: true}}
         />

      </Drawer.Navigator>
  );
}


export default AppSRoutes;