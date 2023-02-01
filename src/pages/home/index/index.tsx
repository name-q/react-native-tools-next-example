import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {usePermissions, useShow} from 'react-native-tools-next';
import {useNavigation} from '@react-navigation/native';
import {PERMISSIONS} from 'react-native-permissions';

export default () => {
  const navigation = useNavigation();

  const navigateTo: Function = (name: string): void => {
    // @ts-ignore
    navigation.navigate(name);
  };

  const [status, request, openSettings] = usePermissions([
    PERMISSIONS.IOS.CAMERA,
    PERMISSIONS.ANDROID.CAMERA,
  ]);

  useShow(async () => {
    let pass = await status();
    if (!pass) {
      try {
        await request();
        navigateTo('qrcode');
      } catch {
        openSettings();
      }
    } else {
      navigateTo('qrcode');
    }
  });

  return (
    <View style={{backgroundColor: '#333', flex: 1}}>
      <SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text>获取相机扫码权限</Text>
      </SafeAreaView>
    </View>
  );
};
