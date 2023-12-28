import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNav from './BottomTabNav.tsx';
import {RootStackParamList} from '../types.tsx';
import ChatScreen from '../screens/ChatScreen.tsx';

function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNav}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RootChats"
        component={ChatScreen}
        options={{
          headerBackTitle: '',
          // header: ({navigation}) => <ChatHeader navigation={navigation} />,
        }}
      />
      {/*<Stack.Screen*/}
      {/*  name="CreateNewChat"*/}
      {/*  component={CreateNewChat}*/}
      {/*  options={{*/}
      {/*    headerBackTitle: "",*/}
      {/*    header: ({ navigation }) => (*/}
      {/*      <CreateChatHeader navigation={navigation} />*/}
      {/*    ),*/}
      {/*  }}*/}
      {/*/>*/}
    </Stack.Navigator>
  );
}

export default Navigation;
