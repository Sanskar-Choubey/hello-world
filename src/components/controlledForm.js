import React,{Component} from 'react'

class Form extends Component{

    constructor(){
        super()
        this.state = {
            username : " ",
            comment: ""
        }
    }

    userHandler = (event) => {
        this.setState({
            username:event.target.value
        })
    }
 
    commentHandler = (event) => {
        this.setState({
            comment:event.target.value
        })
    }

    submitHandler = (event) => {
        alert(`${this.state.username} ${this.state.comment}`)
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <div>Form Component</div>
                <div>
                    <label>Username : </label>
                    <input type="text" value={this.state.username} onChange={this.userHandler}></input>
                </div>
                <div>
                    <label>Comment :</label>
                    <textarea value={this.state.comment} onChange={this.commentHandler}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form