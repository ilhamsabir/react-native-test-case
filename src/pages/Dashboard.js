import React, { Component } from 'react';
import {
	Container,
	Header,
	Content,
	Body,
	List,
	ListItem,
	Title,
	Button,
	Icon,
	Right,
	Grid,
	Col,
} from 'native-base';
import { StyleSheet, Text } from 'react-native';
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
		var items = [
			'Simon Mignolet',
			'Nathaniel Clyne',
			'Dejan Lovren',
			'Mama Sakho',
			'Emre Can'
		];
		return (
			<Container>
				<Header>
					<Body>
						<Title>Dashboard</Title>
					</Body>
					<Right>
						<Button transparent style={styles.btn} onPress={this.toLoginScreen}>
							<Icon name='person' />
						</Button>
						<Button transparent style={styles.btn} onPress={this.toLoginScreen}>
							<Icon name='close' />
						</Button>
					</Right>
				</Header>
				<Content style={styles.content}>
					<Grid>
						<Col style={{ height: 50, width: '100%' }}>
							<Button block light>
								<Text>+ Add Favourite Food</Text>
							</Button>
						</Col>
					</Grid>
					<Grid>
						<Col>

							<List dataArray={items}
								renderRow={(item) =>
									<ListItem>
										<Text>{item}</Text>
									</ListItem>
								}>
							</List>
						</Col>
					</Grid>


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
		height: 40
	}
});


export default Dashboard