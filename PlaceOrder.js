import React , {Component} from 'react'
import {Card,CardFooter,CardImg,FormGroup,Col,Input,Button} from 'reactstrap'
import ReactStars from "react-rating-stars-component";

class placeOrder extends Component{
    constructor(props){
        super(props)
        this.state = {
            "productName":"",
            "price":0,
            "quantity":0,
            "url":"",
            "description":"",
        }
    }
    onPlaceOrder = () =>{
        alert("Your Order Was SuccessFully Placed")
        this.props.history.push("/Invoice")
    }
    componentDidMount(){
        fetch('/product/'+localStorage.QTY)
      .then(res => res.json())
      .then(product => {
        this.setState({
            productName:product.productName,
            price:product.price,
            quantity:product.quantity,
            url:product.url,
            description:product.description,
        });
      });
    }
    render(){
        return(
            <div>
                <FormGroup row>
                    <Col md="4">
                        <Card style={{border:"0px"}}>
                                <CardImg top width="100%" src={'/images/'+this.state.url} alt="Card image cap"></CardImg>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card style={{border:"0px"}}>
                        <div className="ProductDetails-Name">{this.state.productName}</div>
                            <div className="Product-PriceDetails">
                            <div style={{color:"gray"}}><b>Rating:</b></div>&nbsp;    
                            <ReactStars count={5} size={50} value={4} edit={false} activeColor="#ffd700"/>
                            </div>
                            <div className="Product-PriceDetails">
                                <div style={{color:"gray"}}><b>Price:</b></div>&nbsp;
                                <div style={{color:"red",fontSize:"20px"}}>{this.state.price}</div>
                            </div>
                            <div className="Product-PriceDetails">
                            <div style={{color:"gray"}}><b>Delivery:</b></div>&nbsp;
                                <div style={{color:"red"}}>Delivery in 7 Days</div>
                            </div>
                              {/*<div style={{width:"30%",marginTop:"2%"}}>
                             <{Button color="primary" style={{float:"left",fontSize:"20px"}} size="sm">Save For Later</Button>
                                <Button color="danger" style={{float:"right",fontSize:"20px"}} size="sm">Delete</Button> 
                            </div>*/}
                            <CardFooter style={{marginTop:"2%"}}>
                                  <Button color="success" size="sm" style={{fontSize:"20px"}} onClick={this.onPlaceOrder}>Place Order</Button>
                             </CardFooter>
                        </Card>
                    </Col>
                </FormGroup>
            </div>
        )
    }
}
export default placeOrder