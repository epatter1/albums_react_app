// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
// Create a component
// return statement and brackets are optional
const App = () => (
	//flex: 1 expands to fill as much content as possible
   //scrolled fine without flex: 1 for me
   <View style={{ flex: 1 }}>
     <Header headerText={'Albums'} />
     <AlbumList />
   </View>
);

// Render to device
AppRegistry.registerComponent('albums', () => App);
