const initialState = '';

export default function (state=initialState,action){
	switch (action.type){
		case 'GAME_SELECTED':
			return action.payload;
			break;
		default:
			return state;
	}
}