export const addToBasket = (item) => {
  return {
	type: 'ADD_TO_BASKET',
	item: item,
  }
}

export const removeFromBasket = (item) => {
  return {
	type: 'REMOVE_FROM_BASKET',
	item: item,
  }
}