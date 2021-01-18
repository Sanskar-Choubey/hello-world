import React from 'react';

const Message = (props) => {
    console.table(props);
    return(
        <h1>Hello {props.name} aka {props.heroName}</h1>
    );
}

export default Message;