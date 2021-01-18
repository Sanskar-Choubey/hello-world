import React,{Component} from 'react';

class Button extends Component{
    button2ClickHandler(){
        console.log("Button2 clicked");
    }

    inputChangeHandler(event){
        console.log(event.target.value);
    }
    render(){
        return(
                <div>
                    <button onClick={this.button2ClickHandler}>Button 2</button>

                    <textarea onChange={this.inputChangeHandler}></textarea>
                </div>
        )
    }
}

export default Button