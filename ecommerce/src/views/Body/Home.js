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
          <Product
            id="123654"
            title="Nhà giả kim"
            price={29.99}
            image="https://salt.tikicdn.com/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg"
            rating={5}
          />
          <Product 
            id="126589"
            title="Rừng Nauy"
            price={39.99}
            image="https://upload.wikimedia.org/wikipedia/vi/thumb/2/28/Norwegian-wood_poster.jpg/220px-Norwegian-wood_poster.jpg"
            rating={5}
          />
          <Product 
            id="123668"
            title="Thiên niên ký chim vặn dây cót"
            price={25.99}
            image="https://theki.vn/wp-content/uploads/bien-nien-ky-chim-van-day-cot-haruki-murakami.png"
            rating={4}
          />
          <Product 
            id="124514"
            title="Kafka bên bờ biển"
            price={29.99}
            image="https://salt.tikicdn.com/ts/product/80/b8/a3/dc94a0e515719973c553b6fb2b51c98f.jpg"
            rating={3}
          />
        </div>
      </div>


    </div>
  )
}

export default Home