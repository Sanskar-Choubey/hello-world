import React from 'react';

const Message = (props) => {
    console.table(props);
    return(
        <div>
             <h1>Hello {props.name} aka {props.heroName}</h1>

             {props.children}
        </div>
    );
}

export default Message;