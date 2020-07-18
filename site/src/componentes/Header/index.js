import React from 'react';

class Header extends React.Component{
  render(){
    return(
      <div className="headerMario">
        <ul className="headerMario-lista">
          <li className="headerMario-item">Home</li>
          <li className="headerMario-item">Portifólio</li>
          <li className="headerMario-item">Currículo</li>
          <li className="headerMario-item">Redes sociais</li>
        </ul>
      </div>
    )
  }
}

export default Header;