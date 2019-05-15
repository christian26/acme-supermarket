//API calls
import Lists from '../products-data.json';
import { ADD_TO_BASKET } from '../actions/products'

const initState = {
	lists: Lists,
	company: 'ACME Supermarket',
	title: 'Select Products',
	totalAmount: 0,
	selectedItems: [],
	msg: null
};

const rootReducer = (state = initState, action) => {

	switch (action.type) {
		case ADD_TO_BASKET:

      const { item = {} } = action      
      const { code = '' } = item      
      const { name = '' } = item
      
      let newItems = state.selectedItems          
      let msg = null
      let total = 0

      newItems.push(item)  

      // buy-one-get-one-free
      if(item.offers && item.offers.get_one_free) {
        const cloneItem = Object.assign({}, item )
        cloneItem.price = 0
        newItems.push(cloneItem)
        msg = `Buy one ${name} get one free`
      }
      
      // price discount for bulk purchases more than 3 £4.50 per item
      const quantity = state.selectedItems.filter(item => item.code === code)

      if(
        item.offers &&
        item.offers.discount &&
        item.offers.discount.min_quantity &&
        item.offers.discount.price &&
        quantity.length > item.offers.discount.min_quantity-1
      ) {
        newItems.map(item => {
          if(item.code === code) {            
            return item.price = item.offers.discount.price            
          }
        })              
        msg = `10% Discount when buy 3 or more ${name}`
      }
      
      newItems.map(item => total += item.price)    
      
    return {
      ...state,
      selectedItems: newItems,
      totalAmount: total,
      msg: msg
    }
    
    default:
      return state
  	}
}

export default rootReducer;