import React from 'react';
import {Dimensions, FlatList} from 'react-native';
import {View} from 'react-native-ui-lib';
import {
  useKeyboardOffsetHeight,
  getMessageHeightOffset,
} from '../../helper/screens.ts';
import {ChatDetailMessageType, MessageType} from '../../types.tsx';

import BubbleMessage from '../Bubble/BubbleMessage.tsx';

const windowHeight = Dimensions.get('window').height;

interface ChatMessagesProps {
  heightOfMessageBox: number;
  messages: ChatDetailMessageType;
}

export default function ChatMessages(props: ChatMessagesProps) {
  const keyBoardOffsetHeight = useKeyboardOffsetHeight();
  const heightOfMessageBox: number = 20;
  const renderBubbleMessage = (bubbleProps: MessageType) => {
    return <BubbleMessage {...bubbleProps} />;
  };

  return (
    <View
      style={{
        height:
          windowHeight * 0.8 -
          keyBoardOffsetHeight * 0.95 -
          getMessageHeightOffset(heightOfMessageBox, windowHeight),
        // getMessageHeightOffset(heightOfMessageBox, windowHeight),
      }}>
      <FlatList
        data={props.messages.message.reverse()}
        renderItem={({item}) => renderBubbleMessage(item)}
        // keyExtractor={keyExtractor}
        inverted
        // contentContainerStyle={{flexDirection: 'column-reverse'}}
      />
    </View>
  );
}
