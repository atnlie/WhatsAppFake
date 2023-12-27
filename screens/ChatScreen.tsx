import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { View, Text, Button } from "react-native";

type ChatScreenProps = {
  navigation: NativeStackNavigationProp<any, 'Home'>;
};
//
// const generateDummyMessages = (): IMessage[] => {
//   const messages: IMessage[] = [];
//   for (let i = 0; i < 20; i++) {
//     messages.push({
//       _id: i.toString(),
//       text: 'test',
//       createdAt: new Date(),
//       user: {
//         _id: Math.round(Math.random()).toString(),
//         name: 'Anton',
//         avatar: '',
//       },
//     });
//   }
//   return messages;
// };

const ChatScreen: React.FC<ChatScreenProps> = ({navigation}) => {
  // const {chatId} = route.params;
  // const messages = generateDummyMessages();

  // const onSend = () => {
  //   // Handle sending messages (not implemented for dummy)
  // };

  return (
    <View>
      <Text>WhatsApp Home Screen</Text>
      <Button title="Go To Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default ChatScreen;
