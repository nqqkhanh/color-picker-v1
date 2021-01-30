import React, { Component } from 'react'

import ColorPicker from './components/ColorPicker'
import SizeSetting from './components/SizeSetting'
import Result from './components/Result'
import Reset from './components/Reset'

import './App.css'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'black',
      fontSize: 22
    }
  }

  onActive = (param) =>{
    this.setState({
    color : param
    })
  } 

  onChangeSize = (value) =>{
    this.setState({
      fontSize: (this.state.fontSize + value >=8 && this.state.fontSize + value <= 52 )? this.state.fontSize + value : this.state.fontSize
     })
  }

onReset = ()=>{
    this.setState({
      color: 'black',
      fontSize: 22
    })
}

  render() {
    return (
      <>
      <div className="title">Color Picker App</div>
      <div className="container">
        <div className="top">
            <div className="top-left">
              <ColorPicker color={this.state.color} onActive={this.onActive}/>
            </div>
            <div className="top-right">
            <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize}/>
            <Reset onReset={this.onReset}/>
            </div>
        </div>
        <div className="bottom">
          <Result fontSize={this.state.fontSize} color={this.state.color}/>
        </div>
      </div>
      </>
    )
  }
}
