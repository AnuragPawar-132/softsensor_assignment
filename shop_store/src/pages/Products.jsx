import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Products = () => {

    const [productList, setProductList] = useState([]);

    const fetchProductsApi = () =>{
        axios(`https://fakestoreapi.com/products`)
        .then((res)=>setProductList(res.data))
        .catch((err)=>console.log(err))
    }
    console.log(productList)

    useEffect(()=>{
        fetchProductsApi()
    }, [])

  return (
    <div>
        <div>
            
        </div>
        <div>
            {
                productList && productList.map((el)=>{
                    return <div>
                        <img src={el.image} />
                        <h5>{el.title}</h5>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Products