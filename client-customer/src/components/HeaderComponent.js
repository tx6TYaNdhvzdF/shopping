import React, { Component } from 'react';
import '../header.css'
import Menu from './MenuComponent';
import Inform from './InformComponent';
const Header = () => {
    return (
        <header className="header">
          <div className="header-container">
            <Menu />
            <Inform />
          </div>
        </header>
        
      )
    
}
export default Header