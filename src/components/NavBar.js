import React from "react";
import './NavBar.css'
import logo from "./imgs/logotugeder.jpg"

const Header = () =>{
    return(
        <div>
          <img src={logo} alt=""/>
         <h1>Bienvenidos a Tugeder Custom Designs</h1>
         <nav>
            <a href="#">Productos</a>
            <a href="#">Nosotros</a>
            <a href="#">BLog</a>
         </nav>
        </div>
    )
}

export default Header