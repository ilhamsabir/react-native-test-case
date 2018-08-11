import React, { Component } from 'react';
import {
	Container,
	Header,
	Content,
	Body,
	Form,
	Item,
	Input,
	Title,
	Button
} from 'native-base';
import { Platform, StyleSheet, Text, View } from 'react-native';

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			username: '',
			password: '',
		};

	}

	render() {
		return (
			<View>
				<Header>
					<Body>
						<Title>User</Title>
					</Body>
				</Header>
				<Title>Test</Title>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	btn: {
		color: '#fff'
	},
});


export default User