import React from 'react'
import logo from '../../assets/img/logo.png'
import searchIcon from '../../assets/img/search-icon.svg'
import shoppingCart from '../../assets/img/shopping-cart.png'
import userIcon from '../../assets/img/user-icon.png'

function Header() {
  return (
    <>
      <header>
        <div class="header">
            <img class="logo" src={logo} alt="" />
            <div class="icons">
                <img class="icon" src={searchIcon} alt="" />
            <img class="icon" src={shoppingCart} alt="" />
            <img class="icon" src={userIcon} alt="" />
            </div>
        </div>

    </header>
    
    
    
    
    
    </>
  )
}

export default Header