import React , {Component} from 'react'
import {Card,CardImg,CardBody,CardText,CardTitle} from 'reactstrap'

class aboutus extends Component{
    render(){
        return(
           <Card>
                  <CardImg top width="50%" height="500px" src="/images/aboutus.jpg" alt="Card image cap" />
                  <CardBody>
                  <CardTitle tag="h1" style={{fontSize:"25px"}}>E-Mart</CardTitle>
                  <CardText style={{fontSize:"20px"}}>Emart is a value-creating company Our aim is to create and provide joyful lifestyle for our customers, and to become a company that shares growth with local community.
                  The emart is the part of the sample application that provides customers with online shopping. Through a Web browser, a customer can browse the catalog, place items to purchase into a virtual shopping cart, create and sign in to a user account, and purchase the shopping cart contents by placing an order with a credit card.
                  </CardText>
                  </CardBody>
           </Card>
        )
    }
}
export default aboutus