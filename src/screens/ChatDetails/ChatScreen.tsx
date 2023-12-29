import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ChatDetailMessageType, ChatMessageType} from '../../types.tsx';
import {View, LoaderScreen, Colors} from 'react-native-ui-lib';
import styles from './ChatScreen.styles.ts';
import ChatMessages from '../../components/Message/ChatMessage.tsx';

type ChatScreenProps = {
  navigation: NativeStackNavigationProp<any, 'Chats'>;
  route: ChatMessageType | any;
};
const ChatScreen: React.FC<ChatScreenProps> = ({
  navigation,
  route: {params},
}) => {
  //get data by params
  const id = params.chatProps.chat_id;
  console.log(id);

  // const renderBubbleMessage = (props: BubbleMessageProps) => {
  //   const {conversation} = props;
  //   return <BubbleMessage message={conversation} />;
  // };

  const messages: ChatDetailMessageType = {
    chat_id: 'personal-abcdef-12345',
    image:
      'https://static.wixstatic.com/media/d911269bdf7972c9a59ba30440cb3789.jpg_128',
    message: [
      {
        id: 1,
        text: 'Halo Apa kabar, kenapa ini bisa mepet banget gini ya',
        last_update: '2023-08-06T08:41:51.620Z',
        isRead: true,
        byMe: true,
      },
      {
        id: 2,
        text: 'Yes, Bro! \nkenapa ini bisa mepet banget gini yakenapa ini bisa mepet banget gini ya',
        last_update: '2023-08-06T08:42:51.620Z',
        isRead: true,
        byMe: false,
      },
      {
        id: 3,
        text: 'What I can help you?',
        last_update: '2023-08-06T08:43:51.620Z',
        isRead: true,
        byMe: false,
      },
      {
        id: 4,
        text: 'I want to go to the hospital',
        last_update: '2023-08-06T08:45:51.620Z',
        isRead: false,
        byMe: true,
      },
    ],
    my_number: '+628211111111',
    name: 'budi',
    phone: '+6282123456789',
  };
  return messages ? (
    <View style={styles.mainContainer}>
      <ChatMessages heightOfMessageBox={100} messages={messages} />
    </View>
  ) : (
    <View style={styles.mainContainer}>
      <LoaderScreen message={'Loading data'} color={Colors.grey40} />
    </View>
  );
  // const messages = ChatDetailMessageType ? ChatDetailMessageType.messages : [];
  // return conversation ? (
  //   <View style={styles.mainContainer}>
  //     <ImageBackground
  //       style={styles.backgroundImg}
  //       source={require(whatsappBackgroundImg)}
  //       resizeMode="cover"
  //     >
  //       <ChatMessages
  //         heightOfMessageBox={heightOfMessageBox}
  //         messages={messages}
  //       />
  //       <SendButton
  //         setIsTyping={setIsTyping}
  //         isTyping={isTyping}
  //         setHeightOfMessageBox={setHeightOfMessageBox}
  //         heightOfMessageBox={heightOfMessageBox}
  //         thisConversation={conversation}
  //       />
  //     </ImageBackground>
  //   </View>
  // ) : (
  //   <Text>Loading</Text>
  // );

  // return (
  //   <View>
  //     <Text>Your chat go here {params.chatProps.chat_id} </Text>
  //     <Button
  //       title="Go To Chats"
  //       onPress={() => navigation.navigate('Chats')}
  //     />
  //   </View>
  // );
};

export default ChatScreen;
