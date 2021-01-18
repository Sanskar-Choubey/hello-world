import React from 'react';

function ClickHandler(){
    function buttonClickHandler(){
        console.log("Button1 Clicked")
    }
    return (
        <div>
            <button onClick={buttonClickHandler}>Button 1</button>
        </div>
    )
}

export default ClickHandler