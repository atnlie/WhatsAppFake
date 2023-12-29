import {ChatDetailMessageType} from '../types.tsx';

const chats_detail_dummy: Array<ChatDetailMessageType> = [
  {
    chat_id: 'personal-abcdef-12345',
    name: 'Atnlie',
    phone: '+6282123456789',
    my_number: '+6282111111111',
    message: [
      {
        byMe: true,
        text: 'Hi...',
        last_update: '2023-08-05T09:00:51.620Z',
        isRead: true,
      },
      {
        byMe: true,
        text: 'hello whats up guys?',
        last_update: '2023-08-05T10:13:00.620Z',
        isRead: true,
      },
      {
        byMe: true,
        text: 'Do you willing to explore more about react-native?',
        last_update: '2023-08-05T10:13:05.620Z',
        isRead: true,
      },
      {
        byMe: false,
        text: "Hi, There. That's cool. Wondering to learn more",
        last_update: '2023-08-05T10:13:08.620Z',
        isRead: true,
      },
      {
        byMe: true,
        text: 'Great bro! Happy to hear that',
        last_update: '2023-08-05T10:15:08.620Z',
        isRead: true,
      },
    ],
    image:
      'https://static.wixstatic.com/media/d911269bdf7972c9a59ba30440cb3789.jpg_128',
  },
  {
    chat_id: 'personal-abcdef-12346',
    name: 'Budi',
    phone: '+6282123456788',
    my_number: '+6282111111111',
    message: [
      {
        byMe: true,
        text: 'Hi...',
        last_update: '2023-08-05T9:13:08.620Z',
        isRead: true,
      },
      {
        byMe: false,
        text: "What's up Man?",
        last_update: '2023-08-05T10:15:15.620Z',
        isRead: true,
      },
      {
        byMe: true,
        text: 'Do you open to part-time work?',
        last_update: '2023-08-05T10:15:20.620Z',
        isRead: true,
      },
      {
        byMe: true,
        text: 'I would like to introduce friend of mine to you. Are you okay?',
        last_update: '2023-08-05T10:15:23.620Z',
        isRead: true,
      },
    ],
    image:
      'https://static.wixstatic.com/media/cda177_e008aa7681f443b3be63a1fe86c10cfd.jpg_128',
  },
];

export default chats_detail_dummy;
