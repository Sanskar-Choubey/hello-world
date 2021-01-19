import React,{Component} from 'react'

 var form = {
    padding:'5px',
    margin:'2px'
}

class Controlled extends Component{

    constructor(){
        super()
        this.state = {
            username: '',
            comment: '',
            value:'React'
        }
    }

    inputChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    commentChangeHandler = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    selectChangeHandler = (event) => {
        this.setState({
            value:event.target.value
        })
    }

    submitHandler = () => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.value}`);
    }
    render(){
        return(
            <form style={form} onSubmit={this.submitHandler}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={this.state.username} onChange={this.inputChangeHandler} />
                </div>
                <div>
                    <label>Comments:</label>
                    <textarea value={this.state.comment} onChange={this.commentChangeHandler}></textarea>
                </div>
                <div>
                    <select value={this.state.value} onChange={this.selectChangeHandler}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <button type="submit" onClick>Submit</button>
            </form>
        )
    }
}

export default Controlled