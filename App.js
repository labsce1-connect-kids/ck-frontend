import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  try{
    await Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        //default font
        'futura-light': require('./assets/fonts/FUTURA_LIGHT.ttf'),
        'futura-light-caps': require('./assets/fonts/FUTURA_LIGHT_ALLCAPS.ttf'),
      })
    ])
  } catch (error) {handleLoadingError(error)}
}// async

function handleLoadingError(error: Error) {
  const myErrFormat = `App.js--${error.code}--${error.message}`;
  // console.log('error:', myErrFormat);
  // console.warn('error');
  console.error('error:', myErrFormat);
  // // console.error('App.js:', error.code, error.message, {stack: error.stack})
}

function handleFinishLoading(setLoadingComplete) {
  // alert('here');
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
