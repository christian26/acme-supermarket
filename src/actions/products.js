export const ADD_TO_BASKET = 'ADD_TO_BASKET'

export const addToBasket = (item) => {
  return {
	type: ADD_TO_BASKET,
	item: item,
  }
}