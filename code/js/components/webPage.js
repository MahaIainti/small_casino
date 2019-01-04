import React from 'react';
import RadioList from '../containers/radioList';
import Details from '../containers/details';
import Modal from '../containers/modal';
import '../containers/kazinoStyle.css';

const WebPage = () => (
	<div>
		<Modal/>
		<RadioList/>
		<hr />
		<Details />
	</div>	
);

export default WebPage;