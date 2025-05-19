import React from 'react';
import "../styles/Header.css"
import Logo from "../assets/logo.png"
import Whatsapp from "../assets/Whatsapp.png"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo da Fundição" />
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Empresa</a></li>
          <li><a href="#services">Produtos</a></li>
          <li><a href="#contact">Processo De Fundição</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
      <div className="contact-info">
        <img src={Whatsapp} alt=""  className='whatsappicon'/>
        <a href="tel:+1234567890" className="phone">Cotação Online</a>
      </div>
    </header>
  );
};

export default Header;
