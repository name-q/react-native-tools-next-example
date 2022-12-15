import React from 'react';
import { View, Text, Alert } from 'react-native';
import { useWaitReturn } from 'react-native-tools-next';
import { Hoc } from '../../../components';

const TestWaitReturn = () => {
  const exitFun = (exit: Function) =>
    Alert.alert(
      'useWaitReturn Test',
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
  useWaitReturn(exitFun);
  return (
    <View>
      <Text style={{ marginBottom: 10 }}>test/useWaitReturn</Text>
      <Text>Hi man click "BACK" above</Text>
    </View>
  );
};

export default Hoc(TestWaitReturn);
