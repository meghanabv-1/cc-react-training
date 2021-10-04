import React from 'react'

function List(){
    let values = ["Apple","Banana", "Mango", "Orange", "Kiwi"];
  
    return (
        <div>
          <ol>{
              values.map(value =>{
                  return (<li key ={value}> {value} </li>)
              })
              }
          </ol>
        </div>
    )
}

export default List;