import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Products from './Products'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Products/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes