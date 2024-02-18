import React from 'react'

function Child(props) {   //here we read name by "props" nd we can pass data by using "state"
  return (   // here we write data but it should comes from Parent
    <div>  
      <h3>Child Name: {props.name} </h3>  
     <button className='btn btn-outline-info' onKeyDown={()=>props.setName("Jessica")} onDoubleClick={()=>props.setName("Nikita")} onClick={()=>props.setName("Nishika")}>Click me</button>  
      </div> //here we update vaishnavi to nishika
    )
}

export default Child;

//Created for changing parent from child as Assignment