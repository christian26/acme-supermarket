//API calls
import Lists from '../products-data.json';

const initState = {
	lists: Lists,
	company: 'ACME Supermarket',
	title: 'Select Products',
	totalAmount: 0,
	selectedItems: [],
	error: null	
};

const rootReducer = (state = initState, action) => {	
   	
	switch (action.type) {
		case 'ADD_TO_BASKET':
      
      const { code } = action.item
      let newItem = action.item

      // buy-one-get-one-free offers
      if(code === 'FR1') {

      }

      // price discount for bulk purchases more than 3 £4.50 per item
      if(code === 'SR1') {

      }
    
    return {
      ...state,
      selectedItems: [...state.selectedItems, newItem ],
      totalAmount: state.totalAmount + action.item.price,
      error: null				
    }
    
    case 'REMOVE_FROM_BASKET':
			const removeItem = state.selectedItems.filter(item => {				
			  return item.id !== action.item.id				
			})

    return {
      ...state,
      selectedItems: removeItem,
      totalAmount: state.totalAmount - action.item.price,
      error: null
    }			

    default:
      return state
  	}	
}

export default rootReducer;