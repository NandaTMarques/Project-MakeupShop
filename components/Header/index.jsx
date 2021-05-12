import React from 'react';
import './header.css';
import imagemMakeup from '../imagens/imgmakeup.png';
import cart from '../imagens/cart.png'

function Header(){
  return (
    <div className="header">
      <img src={imagemMakeup} className="makeup-logo" alt="logo"/>
      <h1>Makeup Store</h1>
      <img src={cart} className="cart" alt="cart" />
    </div>
  )
}

export default Header;