import React, { useState, useEffect, useReducer } from 'react'
import {  BrowserRouter, Route,  Switch, Redirect } from 'react-router-dom'
import Products from './components/Products'
import TopViewed from './components/TopViewed'
import Cart from './components/Cart'
import Navigation from './components/Navigation'
import { getProducts } from './api/api'
import ProductsContext from './context/products-context'
import productsReducer from './reducers/products'
import './App.css';

//For Top-5 viewed page one mouse click on product image simulates one view of the product

const App = () => {
  const [products, dispatch] = useReducer(productsReducer, [])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
    .then(({ products }) => {
      const productsArray = products.map(item => ({...item, views: 0, quantity: 0}))
	    dispatch({ type: 'POPULATE_PRODUCTS', products: productsArray })
    })
    .catch((error) => setError(true))
    setLoading(false)
  }, [])

  return (
    <ProductsContext.Provider value={{ products, dispatch, error, loading }}>
      <BrowserRouter>
        <Navigation />
        <div className="container container-top">
          <br/>
          <Switch>
            <Route exact path="/products" component={Products} />           
            <Route exact path="/topviewed" component={TopViewed} />           
            <Route exact path="/cart" component={Cart} />
            <Redirect exact from="/" to="/products" />
          </Switch>
        </div>
      </BrowserRouter>
    </ProductsContext.Provider>
  )
}

export default App;
