import React from 'react'

const itemList =({ productList }) => {
  
  return (
    <div>
      <p>lista de productos</p>
      {productList.map((product)=> <p key={product.id}>producto.name</p>)}
      
      </div>
  )
}

export default itemList