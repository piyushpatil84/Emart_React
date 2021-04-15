import React from 'react'
import { Link } from 'react-router-dom';
class laptopScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount(){
      localStorage.setItem('UserName',"")
      localStorage.setItem('Role',"")
      fetch('/product/byCategory/Laptop')
      .then(res => res.json())
      .then(product => {
        this.setState({
          products:product
        });
      });
    }
    handleProductDetails = (obj) =>{
      this.props.history.push('/ProductDetails',obj)
    }
    handlePlaceOrder = () =>{
      if(localStorage.UserName==="")
      {
        this.props.history.push('/signin')
      }
      else
      {
        this.props.history.push('/PlaceOrder')
      }
      
    }
    render(){
        return(
            <ul className="products">
          {this.state.products.map((product) => (
            <li key={product.id}>
              <div className="product">
                {/* <Link to={'/product/' + product._id}> */}
                  <img
                    className="product-image"
                    src={'/images/'+product.url}
                    alt="product"
                  />
                 {/* </Link> */}
                <div className="product-name">
                  <Link to={'/product/' + product.id}>{product.productName}</Link>
                </div>
                <div className="product-brand">{product.description}</div>
                <div className="product-price">Rs.{product.price}</div>
                <div>
                <button className="button primary" style={{width:"48%"}} onClick={this.handlePlaceOrder}>Add to Cart</button>
                <button className="button primary" onClick={(e)=>this.handleProductDetails(product)} style={{width:"48%",float:"right"}}>Details</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        )
    }
}
export default laptopScreen