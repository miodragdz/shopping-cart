const productsReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_PRODUCTS':
      return action.products
    case 'INCREMENT_VIEWS':
      return state.map(product => {
        return product.productID === action.productID ? {...product, views: product.views + 1 } : product
      })
    case 'SET_QUANTITY':
      return state.map(product => {
        return product.productID === action.productID ? {...product, quantity: action.quantity} : product
      })
    case 'CLEAR_CART':
      return state.map(product => {
        return product.quantity !== 0 ? {...product, quantity: 0 } : product
      })
    default:
      return state
  }
}

export default productsReducer