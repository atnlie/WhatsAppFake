import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

export function useKeyboardOffsetHeight(): number {
  const [keyBoardOffsetHeight, setKeyboardOffsetHeight] = useState(0);

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      'keyboardWillShow',
      e => {
        setKeyboardOffsetHeight(e.endCoordinates.height);
      },
    );
    const keyboardWillHideListener = Keyboard.addListener(
      'keyboardWillHide',
      () => {
        setKeyboardOffsetHeight(0);
      },
    );

    return () => {
      keyboardWillHideListener.remove();
      keyboardWillShowListener.remove();
    };
  }, []);

  return keyBoardOffsetHeight;
};

export const getMessageHeightOffset = (
  heightOfMessageBox: number,
  windowHeight: number,
): number => {
  const maxHeightOfMessageBox = windowHeight * 0.3;
  if (heightOfMessageBox > maxHeightOfMessageBox) {
    return maxHeightOfMessageBox - windowHeight * 0.05;
  }
  if (heightOfMessageBox > 24) {
    return heightOfMessageBox - windowHeight * 0.035;
  }
  return 0;
};
