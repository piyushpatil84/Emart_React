import axios from 'axios'
import React ,{Component} from 'react'
import {Label,Card,CardHeader,CardBody,CardFooter,FormGroup,Button,Col,Input} from 'reactstrap'

class productconfig extends Component {
    constructor(props){
       super(props)
       this.state = {
        "productName": "",
        "price":0,
        "quantity":0,
        "url": "",
        "description": "",
        "category": ""
       }
    }
    onChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onChangeFile = (e) => {
        this.setState({
          [e.target.name]: e.target.files[0].name
        })
      }
     handleSaveProduct = () =>{
         if(this.state.productName==="" || this.state.price === 0 || this.state.quantity === 0 || 
         this.state.url === "" || this.state.description === "" || this.state.category === "")
         {
             alert("Please Enter Mandatory Field")
         }
         else
         {
               const obj = {
                "productName":this.state.productName,
                "price":this.state.price,
                "quantity":this.state.quantity,
                "url":this.state.url,
                "description":this.state.description,
                "category":this.state.category
               }
               axios.post('/product',obj)
               .then(res=>{
                   alert("Product Added Successfully")
                   this.props.history.push('/')
               })
               .catch(err=>{
                   alert(err.response.data.msg)
               })
         }
     } 
    render(){
        return(
            <Card style={{fontSize:"20px"}}>
                <CardHeader >
                    Product Setup
                </CardHeader>
                <CardBody>
                    <FormGroup row>
                        <Col md="2">
                            <Label>Product Name:</Label>
                        </Col>
                        <Col md="4">
                            <Input type="text" name="productName" value={this.state.productName} onChange={this.onChange}></Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="2">
                            <Label>Price:</Label>
                        </Col>
                        <Col md="4">
                            <Input type="text" name="price" value={this.state.price} onChange={this.onChange}></Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="2">
                            <Label>Quantity:</Label>
                        </Col>
                        <Col md="4">
                            <Input type="text" name="quantity" value={this.state.quantity} onChange={this.onChange}></Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="2">
                            <Label>Discription:</Label>
                        </Col>
                        <Col md="4">
                            <Input type="text" name="description" value={this.state.description} onChange={this.onChange}></Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="2">
                            <Label>Category:</Label>
                        </Col>
                        <Col md="4">
                            <Input type="select" name="category" value={this.state.category} onChange={this.onChange}>
                                <option value="">Select Category</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Laptop">Laptop</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="2">
                            <Label>Image:</Label>
                        </Col>
                        <Col md="4">
                            <Input type="file" name="url" onChange={this.onChangeFile}></Input>
                        </Col>
                    </FormGroup>
                </CardBody>
                <CardFooter style={{textAlign:"center"}}>
                    <Button color="primary" style={{fontSize:"20px"}} onClick={this.handleSaveProduct} size="sm">Save</Button>
                </CardFooter>
            </Card>
        )
    }
}
export default productconfig