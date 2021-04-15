import React from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
class homeScreen extends React.Component{
    constructor(props){
        super(props)
        this.flag = 0;
        this.state = {
            products: [],
            count :this.props.location.state
        }
    }
    componentDidMount= () =>{
      localStorage.setItem("QTY","")
      fetch('/product')
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
    handlePlaceOrder = (id) =>{
      localStorage.setItem('QTY',id)
      if(this.props.auth.userName==="")
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
                <button className="button primary" style={{width:"48%"}} onClick={(e)=>this.handlePlaceOrder(product.id)}>Add to Cart</button>
                <button className="button primary" onClick={(e)=>this.handleProductDetails(product)} style={{width:"48%",float:"right"}}>Details</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        )
    }
}
const mapStateToProps = (state)=>({
  auth:state.auth,
})
export default connect(mapStateToProps) (homeScreen)