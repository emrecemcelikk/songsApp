/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';

import { Home } from './src/screens/Home';

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor={'#F1F1E8'}/>
        <Home />
      </>
    );
  }
}
