/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StatusBar} from 'react-native';

import Route from './src/screens/route';


class App extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor={'#FFF4D8'}/>
        <Route/>
      </>
    );
  }
}
export default App;
