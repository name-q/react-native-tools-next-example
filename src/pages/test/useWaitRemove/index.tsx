import React from 'react';
import { View, Text, Alert } from 'react-native';
import { useWaitRemove } from 'react-native-tools-next';
import { Hoc } from '../../../components';

const TestWaitRemove = () => {
  const exitFun = (exit: Function) =>
    Alert.alert(
      'useWaitRemove Test',
      'Are you sure to discard them and leave the screen?',
      [
        {
          text: "Don't leave",
          style: 'cancel',
          onPress: () => { },
        },
        {
          text: 'Discard',
          style: 'destructive',
          onPress: () => exit(),
        },
      ],
    );
  useWaitRemove(exitFun);
  return (
    <View>
      <Text style={{ marginBottom: 10 }}>test/useWaitRemove</Text>
      <Text>Hi man click "BACK" above</Text>
    </View>
  );
};

export default Hoc(TestWaitRemove);
