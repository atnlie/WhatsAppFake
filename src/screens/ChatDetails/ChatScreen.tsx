import React from 'react';
import {Button, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ChatMessageType} from '../../types.tsx';

type ChatScreenProps = {
  navigation: NativeStackNavigationProp<any, 'Chats'>;
  route: ChatMessageType | any;
};
const ChatScreen: React.FC<ChatScreenProps> = ({
  navigation,
  route: {params},
}) => {
  return (
    <View>
      <Text>Your chat go here {params.chatProps.chat_id} </Text>
      <Button
        title="Go To Chats"
        onPress={() => navigation.navigate('Chats')}
      />
    </View>
  );
};

export default ChatScreen;
