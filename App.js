import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  const userSignin ="Krishna";
  const { userInfo } = userSignin;
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button>&#9776;</button>
          <Link to="/">Emart</Link>
        </div>
        <div className="header-links">
        <a href="cart.html">Mobile</a>  
        <a href="cart.html">Laptop</a>
          <a href="cart.html">Cart</a>
          {userInfo ? (
            <Link to="/profile">{userInfo.name}</Link>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
          {userInfo && userInfo.isAdmin && (
            <div className="dropdown">
              <a href="#">Admin</a>
              <ul className="dropdown-content">
                <li>
                  <Link to="/orders">Orders</Link>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
      <main className="main">
        <div className="content">
          {/* <Route path="/orders" component={OrdersScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/products" component={ProductsScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/category/:id" component={HomeScreen} /> */}
          <Route path="/register" component={RegisterScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
        </div>
      </main>
      <footer className="footer">© 2021 Copyright: emart.com</footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
