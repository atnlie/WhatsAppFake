import {CheckCircle, Check} from 'react-native-feather';
import {Colors, View, Text} from 'react-native-ui-lib';
import styles from './BubbleMessage.styles.ts';
import {MessageType} from '../../types.tsx';
import dayjs from 'dayjs';

export default function BubbleMessage(message: MessageType) {
  const statusColor = message.isRead ? Colors.green30 : Colors.grey30;
  const isMyMessage = message.byMe;
  const isMessageRead = message.isRead;
  return (
    <View
      style={{
        ...styles.messageContainer,
        alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
        backgroundColor: isMyMessage ? '#dfffc7' : '#fcfcfc',
        borderTopLeftRadius: isMyMessage ? 5 : 0,
        borderTopRightRadius: isMyMessage ? 0 : 5,
      }}>
      <View
        style={{
          ...styles.leftMessageArrow,
          display: isMyMessage ? 'none' : 'flex',
        }}
      />
      <Text
        style={{
          ...styles.messageText,
          left: isMyMessage ? 10 : 0,
        }}>
        {message.text}
      </Text>
      <View
        style={{
          ...styles.timeAndReadContainer,
          left: isMyMessage ? 23 : 13,
        }}>
        <Text text90L>{dayjs(message.last_update).format('HH:mm A')} </Text>
        <View>
          {isMessageRead ? (
            <CheckCircle width={16} height={16} stroke={statusColor} />
          ) : (
            <Check width={16} height={16} stroke={statusColor} />
          )}
        </View>
        <View
          style={{
            ...styles.rightMsgArrow,
            display: isMyMessage ? 'flex' : 'none',
          }}
        />
      </View>
    </View>
  );
}
