import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Products = () => {

  const [Products, setProducts] = useState([])

  const navigate=useNavigate();

  useEffect(() => {
    const fetchProducts= async ()=> {
      fetch(`http://localhost:8080/products`)
      .then(res=> res.json())
      .then(data=> setProducts(data))
    }
    
    fetchProducts()
    
  }, [])
  
  const handleOnClick=()=> {
        navigate('/')
  }



  return (
    <div>
      <h2>Products:</h2>
      {
        Products.map(list=> {
          return(
            <div key={list.id}>
              <Link to={`/products/${list.id}`}>{list.name}</Link>
            </div>
          )
        })
      }
      <Outlet/>
      <button onClick={handleOnClick}>Home</button>
      
    </div>
  )
}

export default Products