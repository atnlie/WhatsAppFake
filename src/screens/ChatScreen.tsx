import React from 'react';
import {Button, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ChatScreenProps = {
  navigation: NativeStackNavigationProp<any, 'Chat'>;
};
const ChatScreen: React.FC<ChatScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Your chat go here</Text>
      <Button title="Go To Chats" onPress={() => navigation.navigate('Chats')} />
    </View>
  );
};

export default ChatScreen;
