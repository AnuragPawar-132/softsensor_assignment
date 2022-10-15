import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RenderIfVisible from 'react-render-if-visible'
import styles from "../styles/products.module.css";
import { useNavigate } from "react-router-dom";

const Products = () => {

    const [productList, setProductList] = useState([]);
    const navigate = useNavigate()

    const fetchProductsApi = () =>{
        axios({
            method: `GET`,
            url: `https://pacific-lake-49830.herokuapp.com/products`
            // params: {page: page}
        })
        .then((res)=>setProductList(res.data))
        .catch((err)=>console.log(err))
    }
    
    const handleAddToCart = (id, title, image, category, price, rating)=>{
        let cartData = JSON.parse(localStorage.getItem("cartList")) || []
        for(let i=0; i<cartData.length; i++)
        {
            if(cartData[i].id===id)
            {
                return alert("Item already added in cart")
            }
        }
        let obj = {
            id: id,
            title: title, 
            image: image,
            category: category,
            price: price,
            rating: rating
        }
        cartData.push(obj)
        localStorage.setItem("cartList", JSON.stringify(cartData))
        navigate("/cart")
    }

    useEffect(()=>{
        fetchProductsApi()
    }, [])

  return (
    <div>
        <div className={styles.header_box}>
            <h1>Fresh Stock</h1>
        </div>
        <div className={styles.middle_div} ></div>
        <div className={styles.products_outer_box}>
            
            {
                productList && productList.map((el)=>{
                    return <RenderIfVisible defaultHeight={-100} key={el.id}>
                        <div key={el.id} className={styles.product_boxes}  >
                            <img className={styles.product_images} src={el.image} />
                            <h5>{el.title}</h5>
                            <p>Category: {el.category}</p>
                            <p>Price: {el.price} $</p>
                            <p>ratings: {el.rating.rate}</p>
                            <button className={styles.add_to_cart_button} onClick={()=>handleAddToCart(el.id, el.title, el.image, el.category, el.price, el.rating.rate)} >Add to Cart</button>
                        </div>
                    </RenderIfVisible>
                })
            }
            
        </div>
    </div>
  )
}

export default Products