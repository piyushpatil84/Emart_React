import React , {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductConfig from './screens/ProductConfig';
import LaptopScreen from './screens/LaptopScreen';
import MobileScreen from './screens/MobileScreen';
import ProductDetails from './screens/ProductDetails'
import PlaceOrder from './screens/PlaceOrder'
import Invoice from './screens/Invoice'
import AboutUs from './screens/AboutUs'
import {connect} from 'react-redux';

class menu extends Component{
    constructor(props){
      super(props)

    }
    signout = () =>{
      this.props.history.push('/')
  }
    render(){
      return(
        <BrowserRouter>
        <div className="grid-container">
          <header className="header">
            <div className="brand"> 
               <Link to="/">
               <img src=".\logo.png"></img>
               </Link> 
            </div>
            <div className="header-links">
            <Link to="/AboutUs">About Us</Link>  
            <Link to="/MobileScreen">Mobile</Link>
            <Link to="/LaptopScreen">Laptop</Link>
              {this.props.auth.userName ? (
                // <Link to="/">Sign Out</Link>
                // <button onClick={this.signout}>Sign Out</button>
                this.props.auth.userName
              ) : (
                <Link to="/signin">Sign In</Link>
              )}
              {this.props.auth.Role === "Admin"? (
                <Link to="/ProductConfig">Product Setup</Link>
              ) : (
                   ""
              )}
            </div>
          </header>
          <main className="main">
            <div className="content">
              <Route path="/ProductConfig" component={ProductConfig} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/signin" component={SigninScreen} />
              <Route path="/LaptopScreen" component={LaptopScreen} />
              <Route path="/MobileScreen" component={MobileScreen} />
              <Route path="/ProductDetails" component={ProductDetails} />
              <Route path="/PlaceOrder" component={PlaceOrder} />
              <Route path="/Invoice" component={Invoice} />
              <Route path="/AboutUs" component={AboutUs}/>
              <Route path="/" exact={true} component={HomeScreen} />
            </div>
          </main>
          <footer className="footer">© 2021 Copyright: emart.com &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact Us:1, M J Market, Jalgaon 425508&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Email- Group9@gmail.com</footer>
        </div>
      </BrowserRouter>
      )
    }
}
const mapStateToProps = (state)=>({
  auth:state.auth,
})
export default connect(mapStateToProps) (menu)
