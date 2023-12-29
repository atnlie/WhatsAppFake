import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-ui-lib';

export default StyleSheet.create({
  messageContainer: {
    width: '75%',
    marginVertical: 3,
    marginHorizontal: 16,
    paddingVertical: 10,
    // paddingBottom: 5,
    // flexDirection: 'column', // row
    flexDirection: 'row',
    borderRadius: 5,
  },
  leftMessageArrow: {
    height: 0,
    width: 0,
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderTopColor: '#fcfcfc',
    borderTopWidth: 10,
    alignSelf: 'flex-start',
    borderRightColor: 'black',
    right: 10,
    bottom: 10,
  },
  messageText: {
    fontSize: 16,
    width: '65%',
  },
  timeAndReadContainer: {
    flexDirection: 'row',
  },
  timeText: {
    fontSize: 12,
    color: Colors.grey30,
  },
  rightMsgArrow: {
    height: 0,
    width: 0,
    borderRightWidth: 10,
    borderRightColor: 'transparent',
    borderTopColor: '#dfffc7',
    // borderTopColor: Colors.green,
    borderTopWidth: 10,
    alignSelf: 'flex-start',
    left: 3,
    bottom: 10,
  },
});
