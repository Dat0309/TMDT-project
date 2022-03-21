import React from 'react'

function Header() {
    return (
        <div className='header_logo'>
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />

            <div className="header_serch">
                <input type="text" className="headerSearchInput" />
                {/* Logo */}

            </div>
        </div>


    )
}

export default Header