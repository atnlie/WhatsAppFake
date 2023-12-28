import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Chats: undefined;
  Info: {placeId: number};
};

export type ChatsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Chats'
>;

export type InfoScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Info'
>;

export type BottomTabParamList = {
  Info: undefined;
  Chats: undefined;
};

export type ChatsDetailsTabProps = BottomTabScreenProps<
  BottomTabParamList,
  'Chats'
>;

export type InfoDetailsTabProps = BottomTabScreenProps<
  BottomTabParamList,
  'Info'
>;
