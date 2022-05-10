import React, { useState } from "react"
import "./ItemCount.css"

 export const ItemCount = ({initial, stock, onAdd})=>{
    const [count, setCount] = useState(initial);
    const decrease = ()=>{
      setCount(count - 1);
    }

    const increase = ()=>{
      setCount(count + 1);
    }

    return(
        <>
<div className="botones">
      
      <input disabled={count <= 1}  type="button" value="-" className="botonResta" onClick={decrease} />
      <p> remera zara {count}</p>
      <input disabled= {count >= stock} type="button" value="+" className="botonSuma" onClick={increase}/>  
      
      </div>
      <div>
        
      <input type="button" value="Agergar Al Carrito" disabled= {stock <= 0 } onClick={()=> onAdd(count)} />
      </div>
      </>
    )
}

export default ItemCount;