import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
class RegisterScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            "userName":"",
            "password":"",
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
       "password":this.state.password,
       "role": "User"
      }
      axios.post('/user',obj)
      .then(res =>{
        localStorage.setItem('UserName',res.data.userName)
        localStorage.setItem('Role',res.data.role)
        this.props.history.push('/')
      })
      .catch(err=>{
        alert(err.response.data.msg)
      })
 }
    render(){
        return(
            <div className="form">
      <ul className="form-container">
        <li>
          <h2>Create Account</h2>
        </li>
        <li>
          <label htmlFor="name">
            Name
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
          <button type="submit" onClick={this.handleLogin} className="button primary">Register</button>
        </li>
        <li>
          Already have an account?
          <Link to={"/signin"} className="button secondary text-center" >Back to Login Page</Link>
        </li>
      </ul>
  </div>
        )
    }
}
export default RegisterScreen