import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Courses from '../pages/Courses';
const AuthStack = createStackNavigator();

function AuthRoutes() {
 return (
   <AuthStack.Navigator>
       <AuthStack.Screen name="SignIn"
        component={SignIn}
        options={{headerShown: false}} />

        {/* Tela Cadastro */}
        <AuthStack.Screen name="SignUp"
        component={SignUp}
        options={{headerStyle: {
          backgroundColor: '#0046a8',
          borderBottomColor: '#bdbdbd',
          borderWidth: 1
        },
          headerTintColor: '#fff',
          headerBackTitle: false,
          headerTitle: 'Voltar'
        }} />

   </AuthStack.Navigator>
  );
}


export default AuthRoutes;