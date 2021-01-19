import React from 'react'

function List(){
    var  shoppingList = ['Milk','Bread','Sugar','Rice','Wheat']

    function getBg(index){
        if(index % 2 === 0){
           return "white"
        }else{
           return  "grey"
        }
    }

    return(
        <ul>
            {
            shoppingList.map((item,index) => 
                <li style={{backgroundColor:getBg(index)}}>{item}</li>
            )
            }
        </ul>   
    )
}

export default List