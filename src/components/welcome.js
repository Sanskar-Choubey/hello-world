import React, { Component } from 'react';

class Welcome extends Component {
    render(){
        return (
            <div>
                 <h4>Hello {this.props.name} a.k.a {this.props.heroName}</h4>

                 {this.props.children}
            </div>
        );
    }
}

export default Welcome