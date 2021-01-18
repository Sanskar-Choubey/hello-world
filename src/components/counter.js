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
                <h1>Welcome to the Like Counter</h1>
                <p>Count:{this.state.count}</p>
                <button onClick={() => this.buttonClickHandler()}>Click Me</button>
            </div>
        )
    }
}

export default Counter