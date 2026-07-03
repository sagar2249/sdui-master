import React from 'react';
import { View } from 'react-native';

// Notice the { height } up here! The server decides how tall this is.
export default function Spacer({ height }) {
  return (
    <View style={{ height: height }} />
  );
}