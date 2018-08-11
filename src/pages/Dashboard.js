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
import { StyleSheet, Text, View } from 'react-native';
import { onSignOut } from '../Auth';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			username: '',
			password: '',
		};
		this.toLoginScreen = this.toLoginScreen.bind(this)
	}

	toLoginScreen() {
		onSignOut().then(() => {
			this.props.navigation.navigate('Login')
		})
	}

	render() {
		return (
			<View>
				<Header>
					<Body>
						<Title>Dashboard</Title>
					</Body>
				</Header>
				<Button rounded block light onPress={this.toLoginScreen}>
					<Text>Logout</Text>
				</Button>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	btn: {
		color: '#fff'
	},
});


export default Dashboard