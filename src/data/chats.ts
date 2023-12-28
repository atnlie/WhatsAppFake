import {ChatMessageType} from '../types.tsx';

const chats_dummy: Array<ChatMessageType> = [
  {
    chat_id: 'personal-abcdef-12345',
    name: 'Atnlie',
    phone: '+6282123456789',
    my_number: '+6282111111111',
    message: {
      text: 'Great bro! Happy to hear that',
      last_update: 'today',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/d911269bdf7972c9a59ba30440cb3789.jpg_128',
  },
  {
    chat_id: 'personal-abcdef-12346',
    name: 'Budi',
    phone: '+6282123456788',
    my_number: '+6282111111111',
    message: {
      text: 'I would like to introduce friend of mine to you. Are you okay?',
      last_update: 'today',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/cda177_e008aa7681f443b3be63a1fe86c10cfd.jpg_128',
  },
  {
    chat_id: 'group-ghijkl-12345',
    name: 'Beautiful World',
    phone: '+6282223456788, +6282223456787, +6282223456789, +6282223456786',
    my_number: '+6282111111111',
    message: {
      text: 'In entirely be to at settling felicity. Fruit two match men you seven share. ',
      last_update: 'yesterday',
      isRead: false,
    },
    image:
      'https://static.wixstatic.com/media/cda177_f9de629d8c97416f82b398725bd49918.jpg_128',
  },
  {
    chat_id: 'personal-abcdef-12347',
    name: 'Master Deddy',
    phone: '+6282123456787',
    my_number: '+6282111111111',
    message: {
      text: 'Started his hearted any civilly. So me by marianne admitted speaking. ',
      last_update: 'yesterday',
      isRead: false,
    },
    image:
      'https://static.wixstatic.com/media/84770f_c611ded729fd4461a1bb57134d4e9dd2.png_128',
  },
  {
    chat_id: 'group-ghijkl-12346',
    name: 'Amazing Race',
    phone: '+6282223456788, +6282223456787, +6282223456789, +6282223456786',
    my_number: '+6282111111111',
    message: {
      text: 'Continual delighted as elsewhere am convinced unfeeling.',
      last_update: 'yesterday',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/cda177_82d66fece3e54a7aa10d49bda4d98259.jpg_128',
  },

  {
    chat_id: '2personal-abcdef-12345',
    name: 'Atnlie #2',
    phone: '+6282123456789',
    my_number: '+6282111111111',
    message: {
      text: 'hello whats up guys?',
      last_update: 'yesterday',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/d911269bdf7972c9a59ba30440cb3789.jpg_128',
  },
  {
    chat_id: '2personal-abcdef-12346',
    name: 'Budi #2',
    phone: '+6282123456788',
    my_number: '+6282111111111',
    message: {
      text: 'I would like to introduce friend of mine to you. Are you okay?',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/cda177_e008aa7681f443b3be63a1fe86c10cfd.jpg_128',
  },
  {
    chat_id: '2group-ghijkl-12345',
    name: 'Beautiful World #2',
    phone: '+6282223456788, +6282223456787, +6282223456789, +6282223456786',
    my_number: '+6282111111111',
    message: {
      text: 'In entirely be to at settling felicity. Fruit two match men you seven share. ',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: false,
    },
    image:
      'https://static.wixstatic.com/media/cda177_f9de629d8c97416f82b398725bd49918.jpg_128',
  },
  {
    chat_id: '2personal-abcdef-12347',
    name: 'Master Deddy #2',
    phone: '+6282123456787',
    my_number: '+6282111111111',
    message: {
      text: 'Started his hearted any civilly. So me by marianne admitted speaking. ',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: false,
    },
    image:
      'https://static.wixstatic.com/media/84770f_c611ded729fd4461a1bb57134d4e9dd2.png_128',
  },
  {
    chat_id: '2group-ghijkl-12346',
    name: 'Amazing Race #2',
    phone: '+6282223456788, +6282223456787, +6282223456789, +6282223456786',
    my_number: '+6282111111111',
    message: {
      text: 'Continual delighted as elsewhere am convinced unfeeling.',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/cda177_82d66fece3e54a7aa10d49bda4d98259.jpg_128',
  },

  {
    chat_id: '3personal-abcdef-12345',
    name: 'Atnlie #3',
    phone: '+6282123456789',
    my_number: '+6282111111111',
    message: {
      text: 'hello whats up guys?',
      last_update: '2023-08-05T08:40:51.620Z',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/d911269bdf7972c9a59ba30440cb3789.jpg_128',
  },
  {
    chat_id: '3personal-abcdef-12346',
    name: 'Budi #3',
    phone: '+6282123456788',
    my_number: '+6282111111111',
    message: {
      text: 'I would like to introduce friend of mine to you. Are you okay?',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/cda177_e008aa7681f443b3be63a1fe86c10cfd.jpg_128',
  },
  {
    chat_id: '3group-ghijkl-12345',
    name: 'Beautiful World #3',
    phone: '+6282223456788, +6282223456787, +6282223456789, +6282223456786',
    my_number: '+6282111111111',
    message: {
      text: 'In entirely be to at settling felicity. Fruit two match men you seven share. ',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: false,
    },
    image:
      'https://static.wixstatic.com/media/cda177_f9de629d8c97416f82b398725bd49918.jpg_128',
  },
  {
    chat_id: '3personal-abcdef-12347',
    name: 'Master Deddy #3',
    phone: '+6282123456787',
    my_number: '+6282111111111',
    message: {
      text: 'Started his hearted any civilly. So me by marianne admitted speaking. ',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: false,
    },
    image:
      'https://static.wixstatic.com/media/84770f_c611ded729fd4461a1bb57134d4e9dd2.png_128',
  },
  {
    chat_id: '3group-ghijkl-12346',
    name: 'Amazing Race #3',
    phone: '+6282223456788, +6282223456787, +6282223456789, +6282223456786',
    my_number: '+6282111111111',
    message: {
      text: 'Continual delighted as elsewhere am convinced unfeeling.',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/cda177_82d66fece3e54a7aa10d49bda4d98259.jpg_128',
  },

  {
    chat_id: '4personal-abcdef-12345',
    name: 'Atnlie #4',
    phone: '+6282123456789',
    my_number: '+6282111111111',
    message: {
      text: 'hello whats up guys?',
      last_update: '2023-08-05T08:40:51.620Z',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/d911269bdf7972c9a59ba30440cb3789.jpg_128',
  },
  {
    chat_id: '4personal-abcdef-12346',
    name: 'Budi #4',
    phone: '+6282123456788',
    my_number: '+6282111111111',
    message: {
      text: 'I would like to introduce friend of mine to you. Are you okay?',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/cda177_e008aa7681f443b3be63a1fe86c10cfd.jpg_128',
  },
  {
    chat_id: '4group-ghijkl-12345',
    name: 'Beautiful World #4',
    phone: '+6282223456788, +6282223456787, +6282223456789, +6282223456786',
    my_number: '+6282111111111',
    message: {
      text: 'In entirely be to at settling felicity. Fruit two match men you seven share. ',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: false,
    },
    image:
      'https://static.wixstatic.com/media/cda177_f9de629d8c97416f82b398725bd49918.jpg_128',
  },
  {
    chat_id: '4personal-abcdef-12347',
    name: 'Master Deddy #4',
    phone: '+6282123456787',
    my_number: '+6282111111111',
    message: {
      text: 'Started his hearted any civilly. So me by marianne admitted speaking. ',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: false,
    },
    image:
      'https://static.wixstatic.com/media/84770f_c611ded729fd4461a1bb57134d4e9dd2.png_128',
  },
  {
    chat_id: '4group-ghijkl-12346',
    name: 'Amazing Race #4',
    phone: '+6282223456788, +6282223456787, +6282223456789, +6282223456786',
    my_number: '+6282111111111',
    message: {
      text: 'Continual delighted as elsewhere am convinced unfeeling.',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/cda177_82d66fece3e54a7aa10d49bda4d98259.jpg_128',
  },

  {
    chat_id: '5personal-abcdef-12345',
    name: 'Atnlie #5',
    phone: '+6282123456789',
    my_number: '+6282111111111',
    message: {
      text: 'hello whats up guys?',
      last_update: '2023-08-05T08:40:51.620Z',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/d911269bdf7972c9a59ba30440cb3789.jpg_128',
  },
  {
    chat_id: '5personal-abcdef-12346',
    name: 'Budi #5',
    phone: '+6282123456788',
    my_number: '+6282111111111',
    message: {
      text: 'I would like to introduce friend of mine to you. Are you okay?',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/cda177_e008aa7681f443b3be63a1fe86c10cfd.jpg_128',
  },
  {
    chat_id: '5group-ghijkl-12345',
    name: 'Beautiful World #5',
    phone: '+6282223456788, +6282223456787, +6282223456789, +6282223456786',
    my_number: '+6282111111111',
    message: {
      text: 'In entirely be to at settling felicity. Fruit two match men you seven share. ',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: false,
    },
    image:
      'https://static.wixstatic.com/media/cda177_f9de629d8c97416f82b398725bd49918.jpg_128',
  },
  {
    chat_id: '5personal-abcdef-12347',
    name: 'Master Deddy #5',
    phone: '+6282123456787',
    my_number: '+6282111111111',
    message: {
      text: 'Started his hearted any civilly. So me by marianne admitted speaking. ',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: false,
    },
    image:
      'https://static.wixstatic.com/media/84770f_c611ded729fd4461a1bb57134d4e9dd2.png_128',
  },
  {
    chat_id: '5group-ghijkl-12346',
    name: 'Amazing Race #5',
    phone: '+6282223456788, +6282223456787, +6282223456789, +6282223456786',
    my_number: '+6282111111111',
    message: {
      text: 'Continual delighted as elsewhere am convinced unfeeling.',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/cda177_82d66fece3e54a7aa10d49bda4d98259.jpg_128',
  },

  {
    chat_id: '6personal-abcdef-12345',
    name: 'Atnlie #6',
    phone: '+6282123456789',
    my_number: '+6282111111111',
    message: {
      text: 'hello whats up guys?',
      last_update: '2023-08-05T08:40:51.620Z',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/d911269bdf7972c9a59ba30440cb3789.jpg_128',
  },
  {
    chat_id: '6personal-abcdef-12346',
    name: 'Budi #6',
    phone: '+6282123456788',
    my_number: '+6282111111111',
    message: {
      text: 'I would like to introduce friend of mine to you. Are you okay?',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/cda177_e008aa7681f443b3be63a1fe86c10cfd.jpg_128',
  },
  {
    chat_id: '6group-ghijkl-12345',
    name: 'Beautiful World #6',
    phone: '+6282223456788, +6282223456787, +6282223456789, +6282223456786',
    my_number: '+6282111111111',
    message: {
      text: 'In entirely be to at settling felicity. Fruit two match men you seven share. ',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: false,
    },
    image:
      'https://static.wixstatic.com/media/cda177_f9de629d8c97416f82b398725bd49918.jpg_128',
  },
  {
    chat_id: '6personal-abcdef-12347',
    name: 'Master Deddy #6',
    phone: '+6282123456787',
    my_number: '+6282111111111',
    message: {
      text: 'Started his hearted any civilly. So me by marianne admitted speaking. ',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: false,
    },
    image:
      'https://static.wixstatic.com/media/84770f_c611ded729fd4461a1bb57134d4e9dd2.png_128',
  },
  {
    chat_id: '6group-ghijkl-12346',
    name: 'Amazing Race #6',
    phone: '+6282223456788, +6282223456787, +6282223456789, +6282223456786',
    my_number: '+6282111111111',
    message: {
      text: 'Continual delighted as elsewhere am convinced unfeeling.',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/cda177_82d66fece3e54a7aa10d49bda4d98259.jpg_128',
  },

  {
    chat_id: '7personal-abcdef-12345',
    name: 'Atnlie #7',
    phone: '+6282123456789',
    my_number: '+6282111111111',
    message: {
      text: 'hello whats up guys?',
      last_update: '2023-08-05T08:40:51.620Z',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/d911269bdf7972c9a59ba30440cb3789.jpg_128',
  },
  {
    chat_id: '7personal-abcdef-12346',
    name: 'Budi #7',
    phone: '+6282123456788',
    my_number: '+6282111111111',
    message: {
      text: 'I would like to introduce friend of mine to you. Are you okay?',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/cda177_e008aa7681f443b3be63a1fe86c10cfd.jpg_128',
  },
  {
    chat_id: '7group-ghijkl-12345',
    name: 'Beautiful World #7',
    phone: '+6282223456788, +6282223456787, +6282223456789, +6282223456786',
    my_number: '+6282111111111',
    message: {
      text: 'In entirely be to at settling felicity. Fruit two match men you seven share. ',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: false,
    },
    image:
      'https://static.wixstatic.com/media/cda177_f9de629d8c97416f82b398725bd49918.jpg_128',
  },
  {
    chat_id: '7personal-abcdef-12347',
    name: 'Master Deddy #7',
    phone: '+6282123456787',
    my_number: '+6282111111111',
    message: {
      text: 'Started his hearted any civilly. So me by marianne admitted speaking. ',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: false,
    },
    image:
      'https://static.wixstatic.com/media/84770f_c611ded729fd4461a1bb57134d4e9dd2.png_128',
  },
  {
    chat_id: '7group-ghijkl-12346',
    name: 'Amazing Race #7',
    phone: '+6282223456788, +6282223456787, +6282223456789, +6282223456786',
    my_number: '+6282111111111',
    message: {
      text: 'Continual delighted as elsewhere am convinced unfeeling.',
      last_update: '2023-08-06T08:40:51.620Z',
      isRead: true,
    },
    image:
      'https://static.wixstatic.com/media/cda177_82d66fece3e54a7aa10d49bda4d98259.jpg_128',
  },
];

export default chats_dummy;
