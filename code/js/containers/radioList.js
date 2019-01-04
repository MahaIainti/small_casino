import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {handleClick} from '../actions/index';



class RadioList extends Component {
	showList(){
		return this.props.brends.map((item)=>{			
			return (
      			<label className="radio" >
                	<input
	                  	key={item.brand}
	                    type="radio" 
	                    name="brend"
	                    onClick={()=>this.props.handleClick(item.brand)}
	                    key={item.brand}
	                    ref={(button)=>{this.radi = button}}
                  	/>
                  	<span className="filter">{item.brand}</span>            
                </label>
            )
		});
	};
	render () {
		return (
			<div className="menu">
				{this.showList()}
			</div>
		);
	};

};


function mapStateToProps(state) {
	return {
		brends: state.brends,
	};
}
function matchDispatchToProps (dispatch){
	return bindActionCreators({handleClick: handleClick},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(RadioList);