import React from 'react';
import { View, Pressable, Text } from 'react-native';
import {
  useShow,
  useAppActive,
  useAppInactive,
  useMount,
  useHide,
  useUnmount,
  useResize,
} from 'react-native-tools-next';
import { useNavigation } from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  const navigateTo: Function = (name: string): void => {
    // @ts-ignore
    navigation.navigate(name);
  };

  // Called when the application from background to foreground
  useAppActive(() => {
    console.log('Home useAppActive');
  });

  // Called when the application from foreground to background
  useAppInactive(() => {
    console.log('Home useAppInactive');
  });

  // Called when the page load
  useMount(() => {
    console.log('Home useMount');
  });

  // Called when the page is displayed or in the application from background to foreground
  useShow(() => {
    console.log('Home useShow');
  });

  // Called when the page is hidden or in the application from foreground to background
  useHide(() => {
    console.log('Home useHide');
  });

  // Called when the page is unloaded
  useUnmount(() => {
    console.log('Home useUnmount');
  });

  // Called after the page window resize
  useResize(() => {
    console.log('Home useResize');
  });

  return (
    <View>
      <Text style={{ marginBottom: 10 }}>home/index</Text>
      <Pressable onPress={() => navigateTo('/user/index')}>
        <Text>
          {`Test [
              useShow,
              useAppActive,
              useAppInactive,
              useHide,
              useMount,
              useResize,
              useUnmount
          ]
          `}
        </Text>
      </Pressable>

      <Pressable onPress={() => navigateTo('/test/useWaitRemove')}>
        <Text>Test useWaitRemove</Text>
      </Pressable>
    </View>
  );
};
