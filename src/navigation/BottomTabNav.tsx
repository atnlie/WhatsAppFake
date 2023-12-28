import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MessageCircle, Info} from 'react-native-feather';

import ChatsScreen from '../screens/chats/ChatsScreen.tsx';
import InfoScreen from '../screens/InfoScreen.tsx';
import type {BottomTabParamList} from '../types';

const Tab = createBottomTabNavigator<BottomTabParamList>();
function BottomTabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
      }}>
      <Tab.Screen
        key="Chats"
        name="Chats"
        component={ChatsScreen}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({size, focused}) => (
            <MessageCircle
              stroke="gray"
              fill={focused ? '#1805' : 'white'}
              width={size}
              height={size}
            />
          ),
        }}
      />
      <Tab.Screen
        key="Info"
        name="Info"
        component={InfoScreen}
        options={{
          tabBarLabel: 'Info',
          tabBarIcon: ({size, focused}) => (
            <Info
              stroke="gray"
              fill={focused ? '#1805' : 'white'}
              width={size}
              height={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNav;
