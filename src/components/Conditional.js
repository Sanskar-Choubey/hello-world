import React,{Component} from 'react';

class Conditional extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn : true
        }
    }
    render(){
        // This is the first approach 

        // if(this.state.isLoggedIn) {
        //     return(
        //         <div>Welcome Sanskar</div>
        //     )
        // }else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }
        
        // this is the second approach 

        // let message;
        // if (this.state.isLoggedIn){
        //     message = <div>Welcome Sanskar</div>
        // }else {
        //     message = <div>Welcome Guest</div>
        // }

        // this is the third approach 
        // return(
            
        //         // this.state.isLoggedIn ? <div>Welcome Sanskar</div> :
        //         // <div>Welcome Guest</div>
        // )

        // this is the fourth approach 
         return(
             this.state.isLoggedIn && <div>Welcome Sanskar</div>
         )
    }
}

export default Conditional