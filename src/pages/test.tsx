import { useEffect, useRef } from 'react';
import {
  AppState,
  AppStateStatus,
  NativeEventSubscription,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const debounce = (fn,wait) => {
  let timer:any = null
  return (...args) => {
    if(timer !== null) clearTimeout(timer)
    timer = setTimeout(()=>{
      fn(args)
      timer = null
    },wait)
  }
}
/**
 * Called when the page is displayed or in the application from background to foreground
 * @public
 */
export function useShow(fn: () => void): void {
  const navigation = useNavigation();
  const AppStateRef = useRef<NativeEventSubscription | null>(null);
  const isAppStateChangeRef = useRef(false);

  const onChange = (state: AppStateStatus) => {
    console.log(state,'<<<<XXXX')
    if (isAppStateChangeRef.current) {
      if (state === 'active') {
        console.log('从后台进入前台！')
        debounce(fn(),1000)
      }
    }
    if (
      state ===
      Platform.select({
        ios: 'inactive',
        android: 'background',
      })
    ) {
      isAppStateChangeRef.current = true;
    }
  };

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => {
      AppStateRef.current = AppState.addEventListener('change', onChange);
    });

    return subscribe;
  }, [navigation]);

  useEffect(() => {
    const subscribe = navigation.addListener('blur', () => {
      AppState.removeEventListener('change', onChange);
    });

    return subscribe;
  }, [navigation]);

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => {
      if (isAppStateChangeRef.current) {
        isAppStateChangeRef.current = false;
      } else {
        console.log('返回当前页面！')
        debounce(fn(),1000)
      }
    });

    return subscribe;
  }, [navigation]);
}
