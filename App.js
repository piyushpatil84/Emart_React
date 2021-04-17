import React , {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {Provider} from "react-redux";
import Menu from './Menu'
import store from "./store";

class App extends Component{
    render(){
      return(
        <Provider store={store}>
        <BrowserRouter>
              <Route path="/" exact={true} component={Menu} />
      </BrowserRouter>
      </Provider>
      )
    }
}
export default App
