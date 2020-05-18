import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import ProductsContext from '../context/products-context'

const Navigation = () => {
  const { products } = useContext(ProductsContext)
  const totalItemsInCart = products.reduce((acc, product) => acc + product.quantity, 0)
  return (
    <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/products">Products</NavLink>
            <NavLink className="nav-item nav-link" to="/topviewed">Top-5 viewed</NavLink>
          </div>
        </div>
        <Link className="nav-item nav-link" to="/cart">
          <span className="fa-stack fa-2x has-badge" data-count={totalItemsInCart}>
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation