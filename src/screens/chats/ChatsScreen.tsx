import React from 'react';
import {Alert, FlatList} from 'react-native';
import {Colors, View, Image, ListItem, Text} from 'react-native-ui-lib';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import chats_dummy from '../../data/chats.ts';
import {ChatListType} from '../../types.tsx';
import styles from './ChatsScreen.styles.ts';

type ChatsScreenProps = {
  navigation: NativeStackNavigationProp<any, 'Chats'>;
};

const ChatsScreen: React.FC<ChatsScreenProps> = () => {
  let keyExtractor = (item: ChatListType) => item.chat_id;

  function renderRow(row: ChatListType, id: number) {
    const statusColor = row.message.isRead ? Colors.green30 : Colors.grey30;

    return (
      <View>
        <ListItem
          activeBackgroundColor={Colors.grey60}
          activeOpacity={0.3}
          height={77.5}
          onPress={() => Alert.alert(`pressed on #${id + 1}`)}>
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
              <Text text90 color={statusColor} numberOfLines={1}>
                {row.message.isRead ? 'read' : 'unread'}
              </Text>
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
