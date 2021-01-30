import React, { Component } from 'react'

export default class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors : ['black','red','green','pink','yellow','orange','purple','teal']
        }
    }
    showColor(color){
        return{
            background: color
        }
    }
    setActiveColor(color){
        this.props.onActive(color)
    }
    render() {
        return (
            <div>
                <h1>Color Picker</h1>
                <div className="colors"> 
                    {this.state.colors.map((color,index)=>{
                        return <span 
                            key={index}
                            style={this.showColor(color)}
                            className={this.props.color === color ? 'active' : ''}
                            onClick={()=>this.setActiveColor(color)}
                        ></span>
                    })}
                </div>
            </div>
        )
    }
}
