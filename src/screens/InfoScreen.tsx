import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';

type ChatScreenProps = {
  navigation: NativeStackNavigationProp<any, 'Home'>;
};

const InfoScreen: React.FC<ChatScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>WhatsApp Home Screen</Text>
      <Button title="Go To Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default InfoScreen;
