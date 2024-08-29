import React from 'react'
import "./NavBar.css"
import CartWidge from '../CartWidge/CartWidge'

const NavBar = () => {
  return (
   <header>
    <h1>CatVeterinaria</h1>

    <nav>
        <ul>
            <li>Cachorros</li>
            <li>Adultos</li>
            <li>Dietéticos</li>
            <li>Urinarios</li>
            <li>Hipoalargénicos</li>
        </ul>
    </nav>

    <CartWidge/>
   </header>
  )
}

export default NavBar
