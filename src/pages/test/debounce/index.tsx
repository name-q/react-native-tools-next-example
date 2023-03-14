import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {debounce} from 'react-native-tools-next';
import {Hoc} from '../../../components';

const TestDebounce = () => {
  let [count, setCount] = useState(0);
  return (
    <View>
      <Text style={{marginBottom: 10}}>test/debounce: {count}</Text>
      <Pressable
        onPress={() => {
          setCount(count++);
        }}>
        <Text>Click me ++</Text>
      </Pressable>
      <Pressable
        onPress={debounce(() => {
          setCount(count++);
        }, 1000)}>
        <Text>Click me debounce ++ </Text>
      </Pressable>
    </View>
  );
};

export default Hoc(TestDebounce);
