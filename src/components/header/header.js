import React, {Component} from 'react';
import backImg from './head.jpeg';
import Menu from '../menu-header'
import './header.css'

export default class Header extends Component{

  state = {
    hideMenu: false
  }

 showMenu = ()=> {
    this.setState({hideMenu:!this.state.hideMenu})
  }

  render(){
    let bacStyle = {
      padding: '300px',
      backgroundSize: 'cover',
      backgroundImage: `url(${backImg})`,
    }
    
    const {hideMenu} = this.state;
    const menuha = hideMenu ? <Menu/>:null
    return(
      <div className = 'head-top' style={bacStyle}>
      <button className='btn-menu' onClick={this.showMenu}>&#9776;</button>
      {menuha}
        <span>Nazariy Solutions Company</span>
      </div>
    )
  }
}