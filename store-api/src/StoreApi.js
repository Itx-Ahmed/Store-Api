import React, { useEffect, useState } from 'react'

const StoreApi = () => {
const [products,setProducts] = useState([])
const FetchApi =  async () => {
     const data =  await fetch('https://fakestoreapi.com/products'); 
     const response = await data.json();
     console.log(response);
     setProducts(response)
}
 useEffect(() => {
     FetchApi();
 },[])
  return (
    <>
            <h1>The Store API</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Description</th>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.category}</td>
                            <td>{product.description}</td>
                            <td>{product.id}</td>
                            <td><img src={product.image} alt={product.title} style={{ width: '50px', height: '50px' }} /></td>
                            <td>{product.price}</td>
                            <td>{product.rating.rate} ({product.rating.count} reviews)</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
      
  )
}

export default StoreApi