import {combineReducers} from 'redux';
import games from './game';
import brends from './brend';
import finds from './find';

const allReducers = combineReducers ({
	games,
	brends,
	finds,
});

export default allReducers