import React, { Component } from 'react'

export default class SizeSetting extends Component {
    changeSize(value){
        this.props.onChangeSize(value)
    }
    render() {
        return (
            <div>
                <h1>Size Setting</h1>
                <p>FontSize: {this.props.fontSize}px</p>
                <div>
                    <button className="btn btn-low" onClick={()=>this.changeSize(-2)}>Low</button>
                    <button className="btn btn-high" onClick={()=>this.changeSize(2)}>High</button>
                </div>
            </div>
        )
    }
}
