import React, { Component } from 'react';

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
   
    buttonClickHandler(){
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={() => this.buttonClickHandler()}>Click Me</button>
            </div>
        )
    }
}

export default Counter