import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {throttle} from 'react-native-tools-next';
import {Hoc} from '../../../components';

const {height, width} = Dimensions.get('window');
const GRADIENT_HEIGHT = height * 10;

const TestThrottle = () => {
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [beforeScrollHeight, setBeforeScrollHeight] = useState<number>(0);

  const handleScroll = useCallback(
    throttle((event: NativeSyntheticEvent<NativeScrollEvent>) => {
      event?.nativeEvent?.contentOffset?.y &&
        setScrollHeight(event.nativeEvent.contentOffset.y);
    }, 100),
    [],
  );

  const beforeHandleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      event?.nativeEvent?.contentOffset?.y &&
        setBeforeScrollHeight(event.nativeEvent.contentOffset.y);
    },
    [],
  );

  return (
    <View>
      <Text
        style={{
          marginBottom: 10,
        }}>
        test/throttle: {scrollHeight}
      </Text>
      <ScrollView
        scrollEventThrottle={16}
        style={{height: height / 2}}
        onScroll={handleScroll}>
        <LinearGradient colors={['#80DEEA', '#00B0FF', '#80DEEA']}>
          <View style={styles.gradientContainer} />
        </LinearGradient>
      </ScrollView>

      <Text
        style={{
          marginBottom: 10,
        }}>
        beforeScrollHeight: {beforeScrollHeight}
      </Text>

      <ScrollView
        scrollEventThrottle={16}
        style={{height: height / 3}}
        onScroll={beforeHandleScroll}>
        <LinearGradient colors={['#FFCDD2', '#F44336', '#FFCDD2']}>
          <View style={styles.gradientContainer} />
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    height: GRADIENT_HEIGHT,
    width,
  },
});

export default Hoc(TestThrottle);
