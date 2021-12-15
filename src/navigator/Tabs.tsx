import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Navigator from './Navigator';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab2Screen} from './Tab2';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Navigation"
        component={Navigator}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={22} name="list-outline" />
          ),
          tabBarLabelStyle: {fontSize: 12, marginBottom: 5, fontWeight: 'bold'},
        }}
      />
      <Tab.Screen
        name="Tab2Screen"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={22} name="search-outline" />
          ),
          tabBarLabelStyle: {fontSize: 12, marginBottom: 5, fontWeight: 'bold'},
        }}
      />
    </Tab.Navigator>
  );
};
