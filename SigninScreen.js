import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import {authfetch} from '../action/authAction'
import {connect} from 'react-redux';
class signinScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            "userName":"",
            "password":""
        }
    }
    onChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleLogin = () =>{
         const obj ={
          "userName":this.state.userName,
          "password":this.state.password
         }
         axios.post('/user/login',obj)
         .then(res =>{
           const objauth = {
            userName:res.data.userName,
            Role:res.data.role
           } 
          this.props.authfetch(objauth);
          //  localStorage.setItem('UserName',res.data.userName)
          //  localStorage.setItem('Role',res.data.role)
          //  //window.location.reload('/')
          //  this.props.history.push('/')
         }) 
         .catch(err=>{
           alert(err.response.data.msg)
         })
    }
    componentWillReceiveProps=(nextProps)=>{
      this.props.history.push('/')
    }
    render(){
        return(
            <div className="form">
              <ul className="form-container">
                <li>
                  <h2>Sign-In</h2>
                </li>
                <li>
                  <label htmlFor="email">
                    user name
                  </label>
                  <input type="text" name="userName" value={this.state.userName} onChange={this.onChange}>
                  </input>
                </li>
                <li>
                  <label htmlFor="password">Password</label>
                  <input type="password" value={this.state.password} name="password" onChange={this.onChange}>
                  </input>
                </li>
                <li>
                  <button type="submit" onClick={this.handleLogin}  className="button primary">Signin</button>
                </li>
                <li>
                  New to Emart?
                </li>
                <li>
                  <Link to={"/register"} className="button secondary text-center" >Create New Account</Link>
                </li>
              </ul>
          </div>
        )
    }
}
const mapStateToProps = (state)=>({
  auth:state.auth,
})
export default connect(mapStateToProps,{authfetch}) (signinScreen)