// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';
// Create a component
// return statement and brackets are optional
const App = () => (
  <Header headerText={'Do IT!!!'} />
);

// Render to device
AppRegistry.registerComponent('albums', () => App);
