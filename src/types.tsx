import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Root: undefined;
  RootChats: undefined;
  RootInfo: undefined;
};

export type ChatsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'RootChats'
>;

export type InfoScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'RootInfo'
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

// message
type MessageType = {
  text: string;
  last_update: string;
  isRead: boolean;
};

export type ChatListType = {
  chat_id: string;
  name: string;
  phone: string;
  message: MessageType;
  image: string;
};
