import React, {Component}from 'react';
import './header.css';


class Header extends Component{
  render(){
    return(
      <div className="header">
        <header>
        <div className="center">
        <nav id='menu'>
          <ul type='disc'>
            <li><a href={`deus`}> De qual Deus(a) grego(a) você nasceu? </a></li>
            <li><a href={`home`}> Acampamento Meio-Sangue</a></li>
            <li><a href={`batalha`}> Batalha da Bandeira</a></li>
          </ul>
        </nav>
        </div>
        </header>
        
      </div>

    );
  }
}
export default Header;