import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './components/ProductList';
import SelectedItem from './components/SelectedItem';
import * as Styles from './Styles.js';

class App extends Component {
    render() {
    	
    	const selectedItems = this.props.selectedItems.length ?
			this.props.selectedItems.map((item,idx) => {
		
				return (
					<div key={idx}>						
						<Styles.Ul>						
						  <SelectedItem item={item}></SelectedItem>												
						</Styles.Ul>				
					</div>
				)
			})
		: (
			<p>No product selected</p>
		)

        return (
        	<div>
        		<Styles.Topbar>
    	    		<Styles.Title>{this.props.company}</Styles.Title>
				</Styles.Topbar>

				<Styles.Main>

					<Styles.Card>

						<Styles.SubTitle>{this.props.title}</Styles.SubTitle>

						<ProductList lists={this.props.lists}/>

					</Styles.Card>

					<Styles.Card primary>
						<Styles.SubTitle>Total Amount</Styles.SubTitle>
						<Styles.totalAmount>£{this.props.totalAmount}</Styles.totalAmount>
						<Styles.SubTitle>Products Selected</Styles.SubTitle>						
                        
						{selectedItems}
                        
						<Styles.SubTitle error>{this.props.error}</Styles.SubTitle>
					</Styles.Card>

				</Styles.Main>
			</div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		lists: state.lists,
		company: state.company,
		title: state.title,
		totalAmount: state.totalAmount,
		selectedItems: state.selectedItems,
        error: state.error,
        diner: state.diner,
	}
}

export default connect(mapStateToProps)(App);
