import React , {Component} from 'react'
import {connect} from 'react-redux';

class invoice extends Component {
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
            <div className="container"> 
         <div className="row">  
					<div className="col-xs-12">
						<div className="grid invoice">
							<div className="grid-body">
								<div className="invoice-title">
									<div className="row">
										<div className="col-xs-12">
											<img src=".\logo.png" alt="" height="35"/>
										</div>
									</div>
									<br/>
									<div className="row">
										<div className="col-xs-12">
											<h2>invoice<br/>
											<span className="small">order #1082</span></h2>
										</div>
									</div>
								</div>
								<hr/>
								<div className="row">
									<div className="col-xs-6">
										<address>
											<strong>Billed To:</strong><br/>
											Mumbai, India.<br/>
											Borivali (W) – Link Rd,<br/>
											Yogi Nagar, MHB Colony,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
											<abbr title="Phone">P:</abbr> +91 9922559988
										</address>
									</div>
									<div className="col-xs-6 text-right">
										<address>
											<strong>Shipped To:</strong><br/>
											Mumbai, India.<br/>
											Borivali (W) – Link Rd,,<br/>
											Yogi Nagar, MHB Colony,<br/>
											<abbr title="Phone">P:</abbr> +91 9922559988
										</address>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-6">
										<address>
											<strong>Payment Method:</strong><br/>
											Visa ending **** 1234<br/>
											h.elaine@gmail.com<br/>
										</address>
									</div>
									<div className="col-xs-6 text-right">
										<address>
											<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Order Date:</strong><br/>
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;17/06/14
										</address>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<h4 style={{textAlign:"center"}}>ORDER SUMMARY</h4>
										<table className="table table-striped">
											<thead>
												<tr className="line">
													<td><strong>#</strong></td>
													<td className="text-center"><strong>Particulers</strong></td>
                                                    <td className="text-right"><strong>QTY</strong></td>
													<td className="text-right"><strong>RATE</strong></td>
													<td className="text-right"><strong>SUBTOTAL</strong></td>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>1</td>
													<td><strong>{this.state.productName}</strong></td>
                                                    <td className="text-right">1</td>
													<td className="text-center">{this.state.price}</td>
													<td className="text-right">{this.state.price}</td>
												</tr>
                                                </tbody>
										</table>
									</div>									
								</div>
								<div className="row">
									<div className="col-md-12 text-right identity">
										<p>Designer identity<br/><strong>E-Mart</strong></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
</div>
        )
    }
}
const mapStateToProps = (state)=>({
    auth:state.auth,
  })
  export default connect(mapStateToProps) (invoice)