import React, { useState } from "react"
import "./ItemCount.css"

export default ItemCount = ()=>{
    const [count, setCount] = useState(0);
    const handleCount = () => {
        if (count < 5){
          setCount (count + 1)
        } 
       }
    return(
        <>
<div className="botones">
      
      <input type="button" value="-" className="botonResta" onClick={()=> setCount(count - 1)} />
      <p> remera zara  {count}</p>
      <input type="button" value="+" className="botonSuma" onClick={handleCount}/>  
      
      </div>
  
      <div>
        
      <input type="button" value="Agergar Al Carrito" />
      </div>
      </>
    )
}