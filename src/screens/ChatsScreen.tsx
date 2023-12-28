import React from 'react';
import {View, Text, Card, Button} from 'react-native-ui-lib';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<any, 'Home'>;
};

const ChatsScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View flex padding-page>
      <Text heading marginB-s4>
        WhatsApp Chats Screen
      </Text>
      <Card height={100} center padding-card marginB-s4>
        <Text>Chat card </Text>
      </Card>

      <Button
        label="Open Chat"
        bg-primaryColor
        square
        onPress={() => navigation.navigate('Info')}
      />
    </View>
  );
};

export default ChatsScreen;
