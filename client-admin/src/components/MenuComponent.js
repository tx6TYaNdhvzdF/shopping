import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom';


class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="border-bottom">
        <div className="float-left">
            <ul className="menu" >
                <button className='menu-home'>
                  <li className="menu"><Link to='/admin/home'>Home</Link></li>
                </button> 
                <button className='menu-category'>
                  <li className="menu"><Link to='/admin/category'>Category</Link></li>
                </button>
                <button className='menu-product'><li className="menu"><Link to='/admin/product'>Product</Link></li></button>
                <button className='menu-order'>
                  <li className="menu"><Link to='/admin/order'>Order</Link></li>
                </button>
                <button className='menu-customer'>
                  <li className="menu"><Link to='/admin/customer'>Customer</Link></li>
                </button>
            </ul>
        </div>
        <div className="float-right">
          Hello <b>{this.context.username}</b> |
          <Link to='/admin/home' onClick={() => this.lnkLogoutClick()}>Logout</Link>
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }
}
export default Menu;