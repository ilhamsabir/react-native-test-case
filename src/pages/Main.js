import {
	createStackNavigator
} from 'react-navigation';

import Dashboard from './Dashboard'
import User from './User'
import Login from './Login'

export const Main = createStackNavigator({
	Dashboard: {
		screen: Dashboard,
		navigationOptions: {
			header: null,
		}
	},
	User: {
		screen: User,
		navigationOptions: {
			header: null,
		}
	},
	Login: {
		screen: Login,
		navigationOptions: {
			header: null,
		}
	},
});