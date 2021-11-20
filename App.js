
import React from 'react';
import Navigator from './drawer/drawer'
import {Provider} from 'react-redux'
import store from './global/store/store'
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {APP_ID,JS_KEY} from '@env'
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';



Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(APP_ID,JS_KEY);
Parse.serverURL = 'https://parseapi.back4app.com/';

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
      <Navigator/>
    </Provider>
    );
  }

}

