import React, { Component } from 'react';
import './NavPage.css';


class Nav extends Component 
{
    constructor(props)
    {
      super(props)

        
      this.state = 
      {
  
      }
    
    }

  
  render() 
  {
    const logoImgPath=require('../img/logo.svg');
    const lupaImgPath=require('../img/lupa.svg');
    const compraImgPath=require('../img/compras.svg');
    return (
      <ul>
        <li>
          <img className="logo" src={logoImgPath} ></img>
        </li>

        <li><a href="#home">PRODUCTS</a></li>
        <li><a href="#news">SOFTWARE</a></li>
        <li><a href="#contact">COMMUNITY</a></li>
        <li><a href="#about">STORE</a></li>
        <li><a href="#contact">SUPPORT</a></li>

        <li>
          <img className="img lupa" src={lupaImgPath} ></img>
        </li>

        <li>
          <img className="img icon" src={compraImgPath} ></img>
        </li>

        <li>
            <span className="languageMarco">
                <a className="language">
                    <span>US</span>
                </a>
            </span>
        </li>


      </ul>




    );
  }
}

export default Nav;