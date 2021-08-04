import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DoctorProfile} from '../screens/doctorProfile';
import {History} from '../screens/history';
import {TabNavigator} from './TabNavigator';
import {Settings} from '../screens/settings';
import {CartScreen} from '../screens/cartScreen';
import {AppointmentScreen} from '../screens/appointmentTiming';

const Stack = createStackNavigator();

export const MainScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="DoctorProfile"
          component={DoctorProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppointmentScreen"
          component={AppointmentScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
