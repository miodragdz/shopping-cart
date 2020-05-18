import React, { useContext } from 'react'
import ProductsContext from '../context/products-context'

const CartItem = ({ product }) => {
  const { dispatch } = useContext(ProductsContext)

  const handleInputChange = event => {
    dispatch({ type: 'SET_QUANTITY', productID: product.productID, quantity: parseInt(event.target.value) })
  }

  const handleRemove = (event) => {
    dispatch({ type: 'SET_QUANTITY', productID: product.productID, quantity: 0 })
  }

  return (
    <div className="card" style={{ marginBottom: "10px"}}>
      <div className="card-body">
        <h4 className="card-title">{product.name}</h4>
        <p className="card-text">{product.description}</p>
        <h5 className="card-text"><small>price: </small>${product.unitPrice}</h5>
        <span className="card-text">
          <small>Available Quantity: </small>
          {product.unitsInStock}
        </span>
        <button className="btn btn-sm btn-danger float-right" onClick={handleRemove}>
          Remove from cart
        </button>
        <input 
          type="number" 
          value={product.quantity} 
          name="quantity" 
          min="1" 
          max={product.unitsInStock} 
          onChange={handleInputChange} 
          className="float-right" 
          style={{ width: "60px", marginRight: "10px"}}
        />
      </div>				
    </div>
  )
}

export default CartItem
