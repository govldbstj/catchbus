import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigations/StackNavigation';
import { StationProvider } from './src/context/Station';
import { BusProvider } from './src/context/Bus';
import { AlertProvider } from './src/context/Alert';
import Notification from './modules/Notification'
import { TrainProvider } from './src/context/Train';
import RealTime from './modules/RealTime';
import { LogBox } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

const App = () => {
  LogBox.ignoreAllLogs();
    console.disableYellowBox = true;
    const [fontsLoaded]=useFonts({
      'BinggraeSamanco':require('./assets/fonts/BinggraeSamanco.ttf'),
      'MobilePOP':require('./assets/fonts/ONE Mobile POP.ttf'),
      'MobileBold':require('./assets/fonts/ONEMobileBold.ttf'),
      'MobileLight':require('./assets/fonts/ONE Mobile Light.ttf'),
      'MobileRegular':require('./assets/fonts/ONE Mobile Regular.ttf'),
    });
   
    // 폰트 적용
    
/*  const [delay, setDelay] = useState(10000);
    const [count, setCount] = useState(0);
    function useInterval(callback, delay) {
    
    const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.
    useEffect(() => {
      savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
    }, [callback]);
    useEffect(() => {
      function tick() {
        savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
      }
      if(delay!==null){
        let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
        return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
      }
      }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
};
  useInterval(() => {
    const date = new Date();
    console.log(date, "hello it is working");
  }, ); 
  */
  function sleep(time){
    return new Promise(
      resolve=>setTimeout(resolve,time)
    );
   }
 async function delay_splash(){
  await SplashScreen.preventAutoHideAsync();
  await sleep(5000);
  await SplashScreen.hideAsync();
 }
  delay_splash();
    return (
   
        <StationProvider>
        <BusProvider>
        <AlertProvider>
        <TrainProvider>
        <NavigationContainer>
            <StackNavigation/>
            <Notification/>
            <RealTime/>
        </NavigationContainer>
        </TrainProvider>
        </AlertProvider>
        </BusProvider>
        </StationProvider>
    );
}

export default App;