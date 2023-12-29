import React from 'react';
import {FlatList} from 'react-native';
import {Colors, View, Image, ListItem, Text} from 'react-native-ui-lib';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import chats_dummy from '../../data/chats.ts';
import {ChatMessageType} from '../../types.tsx';
import styles from './ChatsScreen.styles.ts';
import {CheckCircle, Check} from 'react-native-feather';

type ChatsScreenProps = {
  navigation: NativeStackNavigationProp<any, 'Chats'>;
};

const ChatsScreen: React.FC<ChatsScreenProps> = ({navigation}) => {
  const chatDetail = (chatProps: ChatMessageType) => {
    navigation.navigate('Chat', {chatProps});
  };
  let keyExtractor = (item: ChatMessageType) => item.chat_id;

  function renderRow(row: ChatMessageType, id: number) {
    const statusColor = row.message.isRead ? Colors.green30 : Colors.grey30;

    return (
      <View>
        <ListItem
          key={id}
          activeBackgroundColor={Colors.grey60}
          activeOpacity={0.3}
          height={77.5}
          onPress={() => chatDetail(row)}>
          <ListItem.Part left>
            <Image source={{uri: row.image}} style={styles.image} />
          </ListItem.Part>
          <ListItem.Part
            middle
            column
            containerStyle={[styles.border, {paddingRight: 17}]}>
            <ListItem.Part containerStyle={{marginBottom: 3}}>
              <Text
                text80H
                style={{flex: 1, marginRight: 10}}
                numberOfLines={1}>
                {row.name}
              </Text>
              <Text grey10 text70 style={{marginTop: 2}}>
                {row.message.last_update.substring(0, 10)}
              </Text>
            </ListItem.Part>
            <ListItem.Part>
              <Text
                style={{
                  flex: 1,
                  marginRight: 10,
                  fontWeight: row.message.isRead ? 'normal' : 'bold',
                }}
                text90M
                blue10
                numberOfLines={2}>
                {row.message.text}
              </Text>
              {row.message.isRead ? (
                <CheckCircle width={16} height={16} stroke={statusColor} />
              ) : (
                <Check width={16} height={16} stroke={statusColor} />
              )}
            </ListItem.Part>
          </ListItem.Part>
        </ListItem>
      </View>
    );
  }

  return (
    <FlatList
      data={chats_dummy}
      renderItem={({item, index}) => renderRow(item, index)}
      keyExtractor={keyExtractor}
    />
  );
};

export default ChatsScreen;
