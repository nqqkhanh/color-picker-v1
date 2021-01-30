import React, { Component } from 'react'

export default class Result extends Component {
    setStyle(){
        return{
            color:this.props.color,
            fontSize:this.props.fontSize,
            borderColor:this.props.color
        }
    }
    render() {
        return (
            <div>
                <h1>Result</h1>
                <div className="content" style={this.setStyle()}>
                    <p > Color: {this.props.color} - FontSize: {this.props.fontSize}px</p>
                    <div className="result" >
                       <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis saepe minus neque velit quas, provident itaque eaque vero, assumenda sed maxime voluptatibus fugiat corrupti voluptates labore id et, placeat asperiores.</p>
                    </div>
                </div>
            </div>
        )
    }
}
