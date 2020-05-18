import React, { useContext } from 'react'
import ProductsContext from '../context/products-context'

const ProductItem = ({ product }) => {
  const { dispatch } = useContext(ProductsContext)

  const handleAddToCart = () => {
		dispatch({ type: 'SET_QUANTITY', productID: product.productID, quantity: 1 })
  }
  
  const handleAddProductView = () => {
		dispatch({ type: 'INCREMENT_VIEWS', productID: product.productID })
	}

  return (
    <div className="card" style={{ marginBottom: "10px"}}>
      <img src={product.image} className="card-img-top" alt="..." onClick={handleAddProductView}></img>
      <div className="card-body">
        <h4 className="card-title">{product.name}</h4>
        <p className="card-text">{product.description}</p>
        <h5 className="card-text"><small>price: </small>${product.unitPrice}</h5>
        <span className="card-text"><small>Available Quantity: </small>{product.unitsInStock}</span>       
        { product.unitsInStock > 0 
          ?  <button className="btn btn-sm btn-dark float-right" disabled={product.quantity > 0} onClick={handleAddToCart}>Add to cart</button>
          : <p className="text-danger"> product is out of stock </p>
        }
      </div>
    </div>
  )
}

export default ProductItem
