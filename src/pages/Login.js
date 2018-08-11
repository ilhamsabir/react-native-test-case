import React, { Component } from 'react'
import {
	Header,
	Body,
	Form,
	Item,
	Input,
	Title,
	Button,
	Label,
	Content,
	Container
} from 'native-base'
import { StyleSheet, Text, View } from 'react-native'
import { onSignIn, isSignedIn } from "../Auth"
import { checkEmail } from '../utils/helper'

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			email: '',
			password: '',
			erroLogin: false,
			message: '',
		};
		this.clickLogin = this.clickLogin.bind(this)
		this.assignLogin = this.assignLogin.bind(this)
	}

	clickLogin() {
		const testEmail = checkEmail(this.state.email)
		let status = true

		if (this.state.email === '' || testEmail) {
			status = false
		}

		if (testEmail === false) {
			status = false
		} else {
			status = true
		}

		if (this.state.password === '') {
			status = false
		}

		if (status) {
			this.assignLogin()
		} else {
			alert('Incorret email or password')
		}
	}

	assignLogin() {
		onSignIn().then(() => {
			this.checkIsSigned()
			console.log('click')
		})
	}

	checkIsSigned() {
		isSignedIn()
			.then(res => {
				console.log('isLogin', res)
				if (res) {
					this.props.navigation.navigate('Dashboard')
				}
			})
			.catch(() => alert("An error occurred"));
	}

	onEmailChange(e) {
		this.setState({
			email: e
		})
	}

	onPasswordChange(e) {
		this.setState({
			password: e
		})
	}

	render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title>Login</Title>
					</Body>
				</Header>
				<Content style={styles.content}>
					<Form>
						<Item stackedLabel>
							<Label>Email</Label>
							<Input
								type="email"
								value={this.state.email}
								onChangeText={(e) => this.onEmailChange(e)}></Input>
						</Item>
						<Item stackedLabel>
							<Label>Password</Label>
							<Input
								secureTextEntry={true}
								value={this.state.password}
								onChangeText={(e) => this.onPasswordChange(e)}></Input>
						</Item>
					</Form>

					<Button style={styles.btnLogin} rounded block onPress={() => this.clickLogin()}>
						<Text style={styles.btn}>Login</Text>
					</Button>
				</Content>
			</Container >
		);
	}
}

const styles = StyleSheet.create({
	btn: {
		color: '#fff'
	},
	content: {
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 10,
	},
	btnLogin: {
		marginTop: 34
	}
});


export default Login