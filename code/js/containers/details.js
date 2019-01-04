import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component{
	gameList(){
		return this.props.games.map((item)=>{
			return (
      			<li className={'catalog_item'+' '+ item.Brand.name} key={item.string_id} id={item.string_id}>
          			<img src={item.src} />
         		 	<div className="content_item">
	            		<span>{item.bonus}</span>
	            		<a className="but">Play</a>
	            		<span>{item.name}</span>
          			</div>
        		</li>
    		)
		});
	};
	render(){
		return(
			<ul className="catalog">
				{this.gameList()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		games: state.games.filter(item=>item.Brand.name.includes(state.finds))
	};
}
export default connect(mapStateToProps)(Details);