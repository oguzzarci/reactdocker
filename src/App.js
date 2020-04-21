import logo from './k8s.png';
import './App.css';
import axios from 'axios'
import React, { Component } from 'react'
export default class App extends Component {

  state = {
    data:''
  }


  componentDidMount(){

    const url = "http://localhost:5000/api/getdata"

    axios.get(url).then(response=> {
      this.setState({
        data:response.data.message
      })
    });

  }



  render() {
      return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kubernetes React Web APP         
        </p>
        <p>
          Api Get Data : {this.state.data}        
        </p>
      </header>
    </div>
      )
  }
}
