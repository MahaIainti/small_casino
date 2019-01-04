import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';  //подключает хранилище базы данных ---reducers
import {Provider} from 'react-redux';  //связывает хранилище и  компоненты ---components
import allReducers from './reducers';
import WebPage from './components/webPage';

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
		<WebPage />
  	</Provider>,
	document.getElementById('fieldToShow')
);
