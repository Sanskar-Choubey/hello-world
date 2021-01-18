import React,{Component} from 'react';

class Bind extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Hello! this is Sanskar'
        }
        // this.clickHandler  =  this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: "I'm a front-end developer"
    //     })
    //     console.log(this);

    clickHandler = () => {
        this.setState({
            message: "I'm a front-end developer"
        })
    }
    
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={()=> this.clickHandler()}>Click</button> */}
                {/* <button onClick={this.clickHandler}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Bind