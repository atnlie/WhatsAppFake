import {StyleSheet} from 'react-native';
import {BorderRadiuses, Colors} from 'react-native-ui-lib';

export default StyleSheet.create({
  image: {
    width: 54,
    height: 54,
    borderRadius: BorderRadiuses.br100,
    marginHorizontal: 14,
  },
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey70,
  },
});
