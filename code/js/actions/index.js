export const handleClick = (find) =>{
	if (find==='All') {
		return {
		type: 'GAME_SELECTED',
		payload: '',  //передает объект по действию
	}
	} else {
	return {
		type: 'GAME_SELECTED',
		payload: find,  //передает объект по действию
	}
}
};