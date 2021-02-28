export const removeFromCart = id => ({
	type: 'REMOVE_FROM_CART',
	payload: id
});

export const addToCart = (obj) => ({
	type: 'ADD_TO_CART',
	payload: obj
});