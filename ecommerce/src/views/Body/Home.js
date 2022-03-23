import React from 'react'
import Product from '../Product/Product'
import "./Home.css"

function Home() {
  return (
    <div className='home'>
        <div className="home_container">
            <img src="https://img.freepik.com/free-vector/online-shopping-banner-with-3d-shopping-cart-clouds-social-icons-vector-illustration_548887-100.jpg?t=st=1648001878~exp=1648002478~hmac=8dce297d3f9397d45d05d58c88d177b14b591ef9bf8655b3e60f6735a0bc75de&w=2800" 
            alt="" 
            className="home_image" />

            <div className="home_row">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>


    </div>
  )
}

export default Home