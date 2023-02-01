import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import {Hoc} from '../../../components';
import {
  ImageBackground,
  StatusBar,
  Animated,
  Dimensions,
  Image,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import _ from 'lodash';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

const QrCode = () => {
  let prvData = useRef('');
  const onBarCodeRead = _.debounce(
    (result: {data: string}) => {
      const {data} = result;
      console.log(data);
      if (prvData.current === data) {
        return;
      }
      //扫码后的操作
      console.log(data);
    },
    1000,
    {leading: true},
  );

  return (
    <View style={{flex: 1, backgroundColor: '#999'}}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <RNCamera
        captureAudio={false}
        autoFocus={RNCamera.Constants.AutoFocus.on} /*自动对焦*/
        style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}
        type={RNCamera.Constants.Type.back} /*切换前后摄像头 front前back后*/
        flashMode={RNCamera.Constants.FlashMode.auto} /*相机闪光模式*/
        onBarCodeRead={onBarCodeRead}>
        <ImageBackground
          source={require('../../../../ui/wechatqrcode.png')}
          style={{flex: 1}}
        />
        <FadeInOutView>
          <Image
            source={require('../../../../ui/pic.png')}
            resizeMode="stretch"
            style={{
              width: screenWidth - 40,
              height: 40,
              marginLeft: 20,
              opacity: 0.8,
            }}
          />
        </FadeInOutView>
      </RNCamera>
    </View>
  );
};

const FadeInOutView = (props: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // 透明度初始值设为0
  const fadeAnimx = useRef(new Animated.Value(1)).current; // 透明度初始值设为0

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(
            fadeAnim, // 动画中的变量值
            {
              toValue: 300,
              duration: 2500,
              useNativeDriver: false,
            },
          ),
          Animated.timing(
            fadeAnimx, // 动画中的变量值
            {
              toValue: 0.3,
              duration: 2500,
              useNativeDriver: false,
            },
          ),
        ]),
      ]),
    ).start(); // 开始执行动画
  }, [fadeAnim, fadeAnimx]);

  return (
    <Animated.View
      style={{
        ...props.style,
        position: 'absolute',
        top: screenHeight / 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: fadeAnim,
        opacity: fadeAnimx,
      }}>
      {props.children}
    </Animated.View>
  );
};

export default Hoc(QrCode);
