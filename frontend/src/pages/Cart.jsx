import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from "../styles/cart.module.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const [list, setList] = useState([]);
  const navigate = useNavigate()

  const getcartData = ()=>{
    setList(JSON.parse(localStorage.getItem("cartList")))
  }

  const handleReturnToMain = ()=>{
    navigate("/")
  }

  useEffect(()=>{
    getcartData()
  }, [])
  return (
    <div>
    <div className={styles.header_box}>
        <h1>Cart Page</h1>
    </div>
    <div className={styles.back_button_box}>
      <button className={styles.back_button} onClick={handleReturnToMain}>Return to main page</button>
    </div>
    <div className={styles.products_outer_box}>
        
        {
            list && list.map((el)=>{
                return <div key={el.id} className={styles.product_boxes}  >
                        <img className={styles.product_images} src={el.image} />
                        <h5>{el.title}</h5>
                        <p>Category: {el.category}</p>
                        <p>Price: {el.price} $</p>
                        <p>ratings: {el.rating.rate}</p>
                    </div>
            })
        }
        
    </div>
</div>
  )
}

export default Cart