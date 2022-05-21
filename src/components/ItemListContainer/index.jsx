import React, {useEffect, useState} from "react";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList"
import {products} from "../../data/product"

export const ItemListContainer = ({texto})=>{
    

    const [productList, setProductList] = useState([])
    


    const getProducts = new Promise((resolve, reject)=>{
        let condition = true
        setTimeout(()=>{
            if(condition){
                resolve(products)
            }else{
                reject("error")
            }
        }, 3000)
    
    })
    
    
    useEffect(()=>{
    getProducts.then((res)=> setProductList(res))
    .catch((error)=> console.log(error))
    
    }, [])



    const onAdd = (quantity)=>{
        console.log(`compreaste ${quantity} de unidades`)
    
    }

    return(
        <>
        <ItemCount initial={1}  stock={3}  onAdd={onAdd}/>
        <ItemList productList={productList}/>
        </>
    )
}

export default ItemListContainer