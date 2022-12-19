import React from 'react';
import { View, Text } from 'react-native';
import { usePermissions, requestPermissions, useShow } from 'react-native-tools-next';
import { Hoc } from '../../../components';
import { PERMISSIONS, RESULTS } from 'react-native-permissions';
const TestPermissions = () => {
  // Check whether multiple permissions are open or request multiple permissions
  // status ()=>Promise<boolean> Whether the current permission is enabled
  // request ()=>Promise<void> Apply to the system for permission
  // openSettings ()=>Promise<void> open setting method
  const [status, request, openSettings] = usePermissions(
    [
      PERMISSIONS.IOS.CAMERA,
      PERMISSIONS.ANDROID.CAMERA,
    ]
  );

  useShow(async () => {

    let pass = await status();
    console.log(pass, '<<<<pass');
    if (!pass) {
      try {
        // Apply to the system for permission
        await request();
      } catch {
        openSettings();
      }
    }

    // Achieve the same effect
    // // requestPermissions() Apply to the system for permission that has not been opened
    // // When obtaining permission fails, return to the open setting method
    // try {
    //   await requestPermissions(
    //     [PERMISSIONS.IOS.CAMERA, PERMISSIONS.ANDROID.CAMERA],
    //     RESULTS.GRANTED,
    //   );
    // } catch (error:any) {
    //   error.openSettings();
    // }
  });


  return (
    <View>
      <Text style={{ marginBottom: 10 }}>test/usePermissions</Text>
    </View>
  );
};

export default Hoc(TestPermissions);
