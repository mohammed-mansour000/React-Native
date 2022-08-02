import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './MainStack';
import AuthStack from './AuthStack';


 
const Stack = createStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          { 
            false ? MainStack(Stack) : AuthStack(Stack)
          }
        </Stack.Navigator>
    </NavigationContainer>
  )
}

