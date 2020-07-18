import React from 'react';

class Header extends React.Component{
  render(){
    return(
      <div className="headerSite">
        <li className="header__item">Home</li>
        <li className="header__item">Portifólio</li>
        <li className="header__item">Currículo</li>
        <li className="header__item">Redes sociais</li>
      </div>
    )
  }
}

export default Header;