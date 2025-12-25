export const selectCartItems = (state)=>state.cart.items;

export const totalItems = (state)=>state.cart.items.reduce((sum , item)=>sum+item.quantity,0);

export const totalPrice = (state)=>state.cart.items.reduce((sum,item)=>sum+item.quantity*item.price,0);