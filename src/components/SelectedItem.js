import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import * as Styles from '../Styles.js';
import { connect } from 'react-redux';

class Item extends Component {

	render() {
		const { item } = this.props

		return (
			<Styles.List key={item.id}>
	 			<span>{item.name}</span>
	 			<Styles.span>£{item.price}</Styles.span>
			</Styles.List>
		)
	}
}

export default connect(null,null)(Item);