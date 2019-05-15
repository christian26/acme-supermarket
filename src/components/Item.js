import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToBasket} from '../actions/products';
import * as Styles from '../Styles.js';

class Item extends Component {
	constructor(props) {
	    super(props);
	    this.handleClick= this.handleClick.bind(this);
	}
	handleClick() {
		const newItem = Object.assign(this.props.item)
		return this.props.addToBasket(this.props.item);
	}

	render() {
		const { item } = this.props
		return (
			<Styles.List key={item.id} onClick={this.handleClick}>
	 			<span>{item.name}</span>
	 			<Styles.span>£{item.price}</Styles.span>
			</Styles.List>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
  return { addToBasket : (item) => {dispatch(addToBasket(item))} };
}

export default connect(null,mapDispatchToProps)(Item);