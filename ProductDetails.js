import React ,{Component} from 'react'
import {Card,Button,FormGroup,Col} from 'reactstrap'
import ReactStars from "react-rating-stars-component";
import Magnifier from "react-magnifier";
class productdetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            ProductDescription:this.props.location.state.description,
            ProductName:this.props.location.state.productName,
            ProductPice:this.props.location.state.price,
            sImage:this.props.location.state.url
        }
    }
    componentDidMount(){
        
    }
    handleBack = () =>{
        this.props.history.push("/")
    }
    handlePlaceOrder = () =>{
        this.props.history.push("/PlaceOrder")
    }
     render(){
         return(
             <div>
                 <FormGroup row>
                     <Col md="5">
                        <Card className="Product-Cart-Details">
                            <Magnifier src={'/images/'+this.state.sImage} className="Product-Image-Details" alt="Simple"/>
                        </Card>
                     </Col>
                     <Col md="6">
                            <Card className="Product-Information">
                            <div className="ProductDetails-Name">{this.state.ProductName}</div>
                            <div className="Product-PriceDetails">
                            <div style={{color:"gray"}}><b>Rating:</b></div>&nbsp;    
                            <ReactStars count={5} size={50} value={4} edit={false} activeColor="#ffd700"/>
                            </div>
                            <div className="Product-PriceDetails">
                                <div style={{color:"gray"}}><b>Price:</b></div>&nbsp;
                                <div style={{color:"red",fontSize:"20px"}}>{this.state.ProductPice}</div>
                            </div>
                            <div className="Product-PriceDetails">
                                <div style={{color:"gray"}}><b>Description:</b></div>
                                <div style={{textAlign:"left"}}>
                                    <label>{this.state.ProductDescription}</label>
                                </div>
                            </div>
                            <div style={{width:"100%"}}>
                                    <Button color="success" style={{width:"20%",fontSize:"20px"}} size="sm" onClick={this.handlePlaceOrder}>Buy Now</Button>
                                    <Button color="danger" style={{marginLeft:"2%",width:"20%",fontSize:"20px"}} size="sm" onClick={this.handleBack}>Back</Button>
                            </div>
                        </Card>
                     </Col>
                 </FormGroup>
             </div>
         )
     }   
}
export default productdetails