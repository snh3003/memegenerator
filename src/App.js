import React, { Component } from 'react'
import Header from './Header'
import MemeGenerator from './MemeGenerator'
import './App.css'
class App extends React.Component {
  constructor(){
    super()
    this.state={
      on: false,
      mode: "Dark Mode",
      backgroundColor: "white",
      color: "black"
    }
    this.colorChange=this.colorChange.bind(this)
  }
  colorChange(){
    if(this.state.on===false){
      return this.setState({
        on: true,
        mode: "Dark Mode",
        backgroundColor: "#262833",
        color: "white"
      })
    } return this.setState({
      on: false,
      mode: "White Mode",
      backgroundColor: "white",
      color: "black"
    })
  }

  render(){
    return (
      <div style={{backgroundColor: this.state.backgroundColor, color:this.state.color, height: '100vh'}}>
      <Header tColor={this.state.color}/>
      <MemeGenerator />
      <label className="switch">

        <input type="checkbox" onChange={this.colorChange}/>
        <span className="slider round">{this.state.mode}</span>
      </label>

      </div>
    )
  }
}
export default App
