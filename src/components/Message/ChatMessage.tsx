import {Dimensions, FlatList} from 'react-native';
import {Colors, View, Image, ListItem, Text} from 'react-native-ui-lib';
// import {FlashList} from '@shopify/flash-list';
// import {Message} from '../../types';
import {useKeyboardOffsetHeight, getMessageHeightOffset} from '../../helper/screens.ts';
// import getMessageHeightOffset from '../../helpers/getMessageBoxHeightOffset';
// import BubbleMessage from '../Bubble/BubbleMessage.tsx';
import {
  BubbleMessageProps,
  ChatDetailMessageType,
  MessageType,
} from '../../types.tsx';
// import chats_dummy from '../../data/chats.ts';
import React from 'react';
import styles from '../../screens/chats/ChatsScreen.styles.ts';
import BubbleMessage from '../Bubble/BubbleMessage.tsx';

const windowHeight = Dimensions.get('window').height;

// interface MessageBubbleProps {
//   item: Message;
// }
interface ChatMessagesProps {
  heightOfMessageBox: number;
  messages: ChatDetailMessageType;
}

export default function ChatMessages(props: ChatMessagesProps) {
  // const {heightOfMessageBox} = props;
  // const {heightOfMessageBox, messages} = props;
  const keyBoardOffsetHeight = useKeyboardOffsetHeight();
  // const keyBoardOffsetHeight = 100;
  const renderBubbleMessage = (bubbleProps: MessageType) => {
    return <BubbleMessage {...bubbleProps} />;
  };
  // let keyExtractor = (item: MessageType) => item.id;

  // function renderRow(row: MessageType, id: number) {
  //   // const statusColor = row.isRead ? Colors.green30 : Colors.grey30;
  //
  //   return (
  //     <View>
  //       <ListItem
  //         key={id}
  //         activeBackgroundColor={Colors.grey60}
  //         activeOpacity={0.3}
  //         height={77.5}
  //         // onPress={() => chatDetail(row)}
  //       >
  //         renderBubbleMessage
  //         <ListItem.Part left>
  //           <Image source={{uri: props.messages.image}} style={styles.image} />
  //         </ListItem.Part>
  //         <ListItem.Part
  //           middle
  //           column
  //           containerStyle={[styles.border, {paddingRight: 17}]}>
  //           <ListItem.Part containerStyle={{marginBottom: 3}}>
  //             <Text
  //               text80H
  //               style={{flex: 1, marginRight: 10}}
  //               numberOfLines={1}>
  //               {row.text}
  //             </Text>
  //           </ListItem.Part>
  //         </ListItem.Part>
  //       </ListItem>
  //     </View>
  //   );
  // }

  return (
    <View
      style={{
        height:
          windowHeight * 0.8 -
          keyBoardOffsetHeight * 0.95 -
          getMessageHeightOffset(20, windowHeight),
        // getMessageHeightOffset(heightOfMessageBox, windowHeight),
      }}>
      <FlatList
        data={props.messages.message.reverse()}
        renderItem={({item}) => renderBubbleMessage(item)}
        // keyExtractor={keyExtractor}
        inverted
        // contentContainerStyle={{flexDirection: 'column-reverse'}}
      />
      {/*<BubbleMessage conversation={props.messages.message} />;*/}
    </View>
  );
}
