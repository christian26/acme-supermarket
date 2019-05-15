import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Styles from '../Styles.js';
import Item from '../components/Item';

class ProductList extends Component {

	render() {

		const lists = this.props.lists.map(product => {

			return (
				<div key={product.id}>
					<Styles.Ul>
						<Item item={product}></Item>
					</Styles.Ul>
				</div>
			)
		})
		return (
			<div>
				{ lists }
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		lists: state.lists,
		company: state.company,
		title: state.title,
		totalAmount: state.totalAmount,
		selectedItems: state.selectedItems,
    msg: state.msg
	}
}

export default connect(mapStateToProps)(ProductList);