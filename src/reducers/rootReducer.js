//API calls
import Lists from '../products-data.json';

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
		case 'ADD_TO_BASKET':

      const { item = {} } = action
      const { code = '' } = item
      const { price = 0 } = item
      const { name = '' } = item

      let newItems = state.selectedItems
      newItems.push(item)
      let total = 0
      let msg = null

      // buy-one-get-one-free offers
      if(item.rules && item.rules.get_one_free) {
        const cloneItem = Object.assign({}, item )
        cloneItem.price = 0
        newItems.push(cloneItem)
        msg = `Buy one ${name} get one free`
      }

      // price discount for bulk purchases more than 3 £4.50 per item
      const quantity = state.selectedItems.filter(item => item.code === code)

      if(
        item.rules &&
        item.rules.discount &&
        item.rules.discount.min_quantity &&
        item.rules.discount.price &&
        quantity.length > item.rules.discount.min_quantity-1
      ) {
        newItems = newItems.filter(item => item.code === code)
          .map(x => {

            x.price = item.rules.discount.price
            return x
          })
        msg = `10% Discount when buy 3 or more ${name}`
      }

      newItems.map(item => total += item.price)
      // console.log(newItems)

    return {
      ...state,
      selectedItems: newItems,
      totalAmount: total,
      msg: msg
    }

    return {
      ...state,
      selectedItems: removeItem,
      totalAmount: amount,
      msg: `${action.item.name} successfully removed`
    }

    default:
      return state
  	}
}

export default rootReducer;