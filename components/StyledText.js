import React from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';


export function FuturaText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'futura-light' }]} />
  );
}
