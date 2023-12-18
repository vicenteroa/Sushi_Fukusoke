// En Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../img/logo.png';
import shoppingCartIcon from '../img/contents/shopping-cart.jpg';
import CarritoCounts from '../components/CarritoCounts.jsx';  // Asegúrate de tener la ruta correcta

export default function Header({ link1, link2, link3, link4, text1, text2, text3, text4, textBackground, showBackground, showShoppingCartIcon }) {
  const cantidadCarrito = 0; // Reemplaza esto con la lógica real para obtener la cantidad del carrito

  return (
    <>
      <header className={showBackground ? "header-with-background" : "header-without-background"}>
        <div className="header_pag">
          <img src={logo} alt="logo de la empresa" className="logo_principal" />
          <nav className="nav_links">
            <Link to={link1}>{text1}</Link>
            <Link to={link2}>{text2}</Link>
            <Link to={link3}>{text3}</Link>
            <Link to={link4}>{text4}</Link>
          </nav>
        </div>

        <h1 className="tit1">{textBackground}</h1>
        <p className="slogan">LO MEJOR EN SUSHI</p>
        {showShoppingCartIcon && (
          <Link to="/carrito" className="shopping-cart-link">
            <CarritoCounts cantidadCarrito={cantidadCarrito} rutaIcono={shoppingCartIcon}/>
          </Link>
        )}
      </header>
    </>
  );
}

