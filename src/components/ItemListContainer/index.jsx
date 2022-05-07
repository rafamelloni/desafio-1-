import React from "react";
import ItemCount from "../ItemCount";

export const ItemList = ({texto})=>{

    const onAdd = (quantity)=>{
        console.log(`compreaste ${quantity} de unidades`)
    
    }

    return(
        <>
        <ItemCount initial={1}  stock={3}  onAdd={onAdd}/>
        </>
    )
}