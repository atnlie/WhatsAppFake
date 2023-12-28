import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Root: undefined;
  Chat: undefined;
  RootInfo: undefined;
};

export type ChatsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Chat'
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
  byMe?: boolean;
};

export type ChatMessageType = {
  chat_id: string;
  name: string;
  phone: string;
  my_number: string;
  message: MessageType;
  image: string;
};

export type ChatDetailMessageType = {
  chat_id: string;
  name: string;
  phone: string;
  my_number: string;
  message: MessageType[];
  image: string;
};
