import React from 'react';
import { View } from 'react-native';

//show stuff to user
const CardSection = (props) => {
	return (
		<View style={styles.constainerStyle}>
			{props.children}
		</View>	
	);
};

const styles = {
	constainerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
};

export default CardSection;
