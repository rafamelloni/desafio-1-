import React, {useEffect, useState} from "react";
import ItemCount from "../ItemCount";
import itemList from "../itemList/itemList"

export const ItemList = ({texto})=>{
    const [productList, setProductList] = useState([])
    
    const products = [
    {id: "1", name: "nombre 1", description:"lorem ipsum dolor",img:"/public/img/imgteclado1" ,stock:5},
    {id: "2", name: "nombre 2", description:"lorem ipsum dolor",img:"/public/img/imgteclado2" ,stock:3},
    {id: "3", name: "nombre 3", description:"lorem ipsum dolor",img:"/public/img/imgteclado3" ,stock:4},
    {id: "4", name: "nombre 4", description:"lorem ipsum dolor",img:"/public/img/imgteclado4", stock:1},
]

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
        <itemList productList={productList}/>
        </>
    )
}