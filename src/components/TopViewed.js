import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import ProductsContext from '../context/products-context'

const TopViewed = () => {
  const { products } = useContext(ProductsContext)
  const topViewed = products.sort((a,b) => b.views - a.views).slice(0, 5)
  return (
    <div className=" container">
      <h3 className="card-title">Top 5 viewed products</h3>
      <hr/>
      {topViewed && topViewed.map((product) => 
        <ProductItem product={product} key={product.productID} />) 
      }
      <hr/>
      <br/><br/>
    </div>
  );
}

export default TopViewed
