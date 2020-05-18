import React, { useContext } from 'react'
import CartItem from './CartItem'
import ProductsContext from '../context/products-context'

const Cart = () => {
  const { products, dispatch } = useContext(ProductsContext)
  const productsInCart = products.filter(product => product.quantity > 0)
  const total = productsInCart.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0)

  const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' })
  }
  
  return (
    <div className=" container">
      <h3 className="card-title">Cart</h3>
      <hr/>
      {productsInCart.map((product) => <CartItem product={product} key={product.productID}/>)}
      <hr/>
      {productsInCart.length ? 
        <div><h4><small>Total Amount:</small><span className="float-right text-dark">${total}</span></h4><hr/></div> : 
        <h3 className="text-danger">No items on the cart</h3>}
      <button className="btn btn-danger float-right" onClick={clearCart}>
        Clear Cart
      </button>
      <br/><br/><br/>
    </div>
  );
}

export default Cart
