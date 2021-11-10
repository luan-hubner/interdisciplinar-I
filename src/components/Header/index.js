import './style.css';
import taesaLogo from '../../assets/taesa.png';
import { useState } from 'react';

import { Link } from 'react-scroll';

export default function Header() {
  const [imageHeader, setImageHeader] = useState(taesaLogo);

  document.addEventListener('scroll', function (e) {
    const heigth = e.path[1].pageYOffset;

    const header = document.getElementById('header');
    const image = document.getElementById('image');
    const list = document.getElementById('list');

    if (heigth > 99) {
      setImageHeader(taesaLogo);

      header.style.background = '#232121';
      header.style.height = '80px';
      image.style.width = '80px';
    } else {
      setImageHeader(taesaLogo);

      header.style.background = 'none';
      header.style.height = '100px';
      image.style.width = '114px';
    }
  });

  return (
    <header id="header">
      <div>
        <img id="image" src={imageHeader} />

        <li id="list">
          <Link to="home" smooth={true} duration={600}>
            <ul>HOME</ul>
          </Link>
          <Link to="about-us" smooth={true} duration={600}>
            <ul>SOBRE</ul>
          </Link>
          <Link to="our-products" smooth={true} duration={600}>
            <ul>PRODUTOS</ul>
          </Link>
          <Link to="contact" smooth={true} duration={600}>
            <ul>CONTATO</ul>
          </Link>
        </li>
      </div>
    </header>
  );
}
