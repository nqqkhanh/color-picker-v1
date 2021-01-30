import React, { Component } from 'react'

export default class Reset extends Component {
    resetDefault(){
        this.props.onReset(true)
    }
    render() {
        return (
            <div>
                <h1>Reset</h1>
                <button className="btn btn-reset" onClick={()=>this.resetDefault()}>Reset</button>
            </div>
        )
    }
}
