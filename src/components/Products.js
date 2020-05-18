import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import ProductsContext from '../context/products-context'

const Products = () => {
  const { products } = useContext(ProductsContext)
  return (
    <div className=" container">
      <h3 className="card-title">List of Available Products</h3>
      <hr/>
      {products && products.map((product) => <ProductItem product={product} key={product.productID} />)}
      <hr/>
      <br/><br/>
    </div>
  );
}

export default Products
