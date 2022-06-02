import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {

  const {id}=useParams();
  const [product, setProduct] = useState({})

  useEffect(() => {
    if(id)
    {
      fetch(`http://localhost:8080/products/${id}`)
      .then(r=> r.json())
      .then(data=> setProduct(data) )
    }
  
    
  }, [id])
  
  

  return (
    <div>Product ID:{id} <div>{product.name}</div> </div>
  )
}

export default Product