import React from 'react';
import './styles.scss';

const Menu = () => {
  return (
    <div className="MenuContainer">
      <div className="LogoContainer">
        <div className="Logo"></div>
      </div>
      <div className="NavbarContainer">
        <nav class="menu">
        <ul class="menu__list">
          <li class="menu__group"><a href="#0" class="menu__link">Strona główna</a></li>
          <li class="menu__group"><a href="#0" class="menu__link">O Nas</a></li>
          <li class="menu__group"><a href="#0" class="menu__link">Atrakcje</a></li>
          <li class="menu__group"><a href="#0" class="menu__link">Pokoje</a></li>
          <li class="menu__group"><a href="#0" class="menu__link">Kontakt</a></li>
        </ul>
      </nav>
      </div>
    </div>
  );
}

export default Menu;
