import React from 'react'
import { Row, Col } from 'react-bootstrap'
import data from '../../data/product'


const  ItemList =({ productList }) => {
  
  return (
    <div>
      <Col>
      <p>lista de productos</p>
      {productList.map((products)=> <p key={products.id}>{products.name}</p>)}
      </Col>
      </div>
  )
}

export default ItemList