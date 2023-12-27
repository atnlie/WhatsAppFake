import React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<any, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>WhatsApp Home Screen</Text>
      <Button
        title="Open Chat"
        onPress={() => navigation.navigate('Chat', {chatId: '1'})}
      />
    </View>
  );
};

export default HomeScreen;
