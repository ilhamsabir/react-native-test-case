import React, { Component } from 'react';
import Login from './src/pages/Login';
import { Main } from './src/pages/Main';
import { isSignedIn } from "./src/Auth";


class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			signedIn: false,
			checkedSignIn: false
		};
	}

	componentDidMount() {
		isSignedIn()
			.then(res => {
				console.log('res', res)
				this.setState({ signedIn: res, checkedSignIn: true })
			})
			.catch(err => alert("An error occurred"));
	}

	get app() {
		let view = this.state.signedIn ? <Main /> : <Login />
		return view
	}

	render() {
		return this.app
	}
}

export default App


