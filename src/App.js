import logo from './k8s.png';
import logotekno from './logotekno.png';
import './App.css';
import axios from 'axios'
import React, { Component } from 'react'
export default class App extends Component {

  state = {
    data:''
  }


  componentDidMount(){

    const url = "http://192.168.1.23:5000/api/getdata"

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
      <img src={logotekno} className="App-logo2" alt="logo" />
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
