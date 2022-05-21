import React from 'react'

const  ItemList =({ productList }) => {
  
  return (
    <div>
      <p>lista de productos</p>
      {productList.map((products)=> <p key={products.id}>{products.name}</p>)}
      
      </div>
  )
}

export default ItemList