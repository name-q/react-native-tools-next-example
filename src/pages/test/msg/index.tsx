import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { msg } from 'react-native-tools-next';
import { Hoc } from '../../../components';

const TestMsg = () => {
  return (
    <View>
      <Text style={{ marginBottom: 10 }}>test/msg</Text>
      <Pressable onPress={
        () => {
          const result = msg.emit('home', 'hellow home');
          console.log(result, '< boolean');
        }}
      >
        <Text>Click me to send a message to the home page</Text>
      </Pressable>
      <Pressable onPress={() => msg.off('home')}>
        <Text>Click me to uninstall home page subscribe</Text>
      </Pressable>
    </View>
  );
};

export default Hoc(TestMsg);
