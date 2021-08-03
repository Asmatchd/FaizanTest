import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {DashBoard} from '../screens/dashboard';
import {Settings} from '../screens/settings';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: '#000',
        // showLabel: false,
        tabStyle: {
          backgroundColor: 'white',
          // eslint-disable-next-line no-undef
          borderTopColor: 'rgba(0,0,0,0.05)',
          borderTopWidth: w('0.5%'),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={DashBoard}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'home'} color={color} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'ios-settings-sharp'} color={color} size={18} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
