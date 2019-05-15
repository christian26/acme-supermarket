import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import * as Styles from '../Styles.js';
import { connect } from 'react-redux';
import { removeFromBasket } from '../actions/ProductActions';

class Item extends Component {
	constructor(props) {
	    super(props);
	    this.handleClick= this.handleClick.bind(this);
	}
	handleClick() {	
		return this.props.removeFromBasket(this.props.item);
	}

	render() {
		const { item } = this.props 
		
		return (			
			<Styles.List key={item.id} onClick={this.handleClick}>
	 			<span>{item.name}</span>	
	 			<Styles.span>£{item.price} <span>X</span></Styles.span>	 			
			</Styles.List>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
  return { removeFromBasket : (item) => {dispatch(removeFromBasket(item))} };
}

export default connect(null,mapDispatchToProps)(Item);