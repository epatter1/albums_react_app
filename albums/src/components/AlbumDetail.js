import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  return (
  //renders any children passed to it
	<Card>
		<CardSection>
			<Text>{props.album.title}</Text>
		</CardSection>
	</Card>

	
	);
};

export default AlbumDetail;
