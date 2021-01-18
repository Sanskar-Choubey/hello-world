import React from 'react';

// function Message(){
//     return (
//             <h1>Welcome Sanskar</h1>
//     )
// }

const Message = () => {
    return React.createElement('div',{id:'WelcomeMessage'},React.createElement('h1',null,'Welcome Sanskar'));
}

export default Message