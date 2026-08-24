import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard';
import './Products.css'


const Products = () => {
  const[allproducts,setProducts]=useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then ((res) => res.json())
    .then ((data) => setProducts (data))
    .catch ((error) => console.log(error))
  },[]);
  return (
    <div><h1>All products</h1>
    <div className='container'>
      <div className=''>
        {
          allproducts.map((item) => (
            <ProductCard key={item.id} product={item}/>
          ))
        }
      </div>
    </div>
    </div>
    

  )
}

export default Products