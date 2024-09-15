import React from 'react'
import "./styles.css";

function Header() {
  function logoutFun(){
    alert('Logout Successful');
  }
  return (
    <div className='navbar'>
      <p className='logo'>FinanceFusion</p>
      <p className='logo link' onClick={logoutFun}>LogOut</p>
    </div>
  )
}

export default Header