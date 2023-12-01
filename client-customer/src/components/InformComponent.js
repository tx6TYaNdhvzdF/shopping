import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';

class Inform extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="border-bottom">
      <div className="float-left">
        {this.context.token === '' ?
          <ul className='inform'>
            <button className='inform-login'>
              <Link to='/login'>Login</Link> 
            </button>
            <button className='inform-signup'>
              <Link to='/signup'>Sign-up</Link>   
            </button>  
            <button className='inform-active'>
            <Link to='/active'>Active</Link>
            </button>  
          </ul>
          :
          <div>Hello <b>{this.context.customer.name}</b> | <Link to='/home' onClick={() => this.lnkLogoutClick()}>Logout</Link> | <Link to='/myprofile'>My profile</Link> | <Link to='/myorders'>My orders</Link></div>
        }
      </div>
      <div className="float-right">
        <Link to='/mycart'>My cart</Link> have <b>{this.context.mycart.length}</b> items
      </div>
        <div className="float-clear" />
      </div>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }
}
export default Inform;