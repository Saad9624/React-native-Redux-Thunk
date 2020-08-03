import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './../screens/loginForm'; 
import EmployeeList from '../screens/employeeList' ;
import { navigationRef } from './rootnavigation' ;
import EmployeeForm from '../screens/employeeForm' ;



const Stack = createStackNavigator();

function Route() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="List" component={EmployeeList} />
        <Stack.Screen name="EForm" component={EmployeeForm}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;


