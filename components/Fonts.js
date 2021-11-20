import React, { useState, useEffect } from 'react';

import { Text} from 'react-native';
import AppLoading from 'expo-app-loading';
import {globalStyles} from '../global/styles'
import {
  useFonts,
  UbuntuMono_400Regular,
} from '@expo-google-fonts/ubuntu-mono';

export default () => {
  let [fontsLoaded] = useFonts({
    UbuntuMono_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
       <Text style={{...globalStyles.textLogo,marginTop: props.food.show ? 115 : 250}}>Meal<Text style={{color:"orange"}}>Deal</Text></Text>
    );
  }
};