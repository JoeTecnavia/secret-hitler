import React from 'react'; // eslint-disable-line
import { shallow } from 'enzyme';
import Moderation from './Moderation';

describe('Moderation', () => {
	it('should initialize correctly', () => {
		const initialState = {
			selectedUser: '',
			userList: [],
			actionTextValue: '',
			log: [],
			playerListShown: true,
			broadcastText: '',
			playerInputText: '',
			resetServerCount: 0,
			logCount: 1,
			modLogToday: false,
			nonSeasonalSetStats: false,
			logSort: {
				type: 'date',
				direction: 'descending'
			}
		};

		const component = shallow(<Moderation socket={{ on: jest.fn(), emit: jest.fn() }} />);

		expect(component.state()).toEqual(initialState);
	});
});
