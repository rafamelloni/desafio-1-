import React, {useEffect, useState} from "react";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import {products} from "../../data/product";
import axios from "axios";


export const ItemListContainer = ({texto})=>{
   
    const [productList, setProductList] = useState([])
   /// traer API 
   const [teclados, setTeclados] = useState([])
   useEffect (()=>{
    axios.get("https://api.mercadolibre.com/sites/MLA/search?q=teclados")
    .then ((response)=>setTeclados(response.data.results))
    .catch ((error)=>console.error(error))

   },[])
console.log(teclados)



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
    
        
       
        
   
        </>
    )
}

export default ItemListContainer