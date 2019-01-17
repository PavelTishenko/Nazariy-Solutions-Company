import React, {Component} from 'react';
import './menu-header.css'

export default class Menu extends Component{
 
 
  render(){
  return(
    <div>

    <ul id="trans-nav">
      <li><a href="#">Home</a>
    <ul>
        <li><a href="#">Widgets</a></li>
        <li><a href="#">Thingamabobs</a></li>
        <li><a href="#">Doohickies</a></li>
    </ul>
    </li>
    <li><a href="#">About</a>
      <ul>
        <li><a href="#">Widgets</a></li>
        <li><a href="#">Thingamabobs</a></li>
        <li><a href="#">Doohickies</a></li>
      </ul>
    </li>
    <li><a href="#">Products</a>
      <ul>
        <li><a href="#">Widgets</a></li>
        <li><a href="#">Thingamabobs</a></li>
        <li><a href="#">Doohickies</a></li>
      </ul>
    </li>
    <li><a href="#">Contact</a>
      <ul>
        <li><a href="#">Widgets</a></li>
        <li><a href="#">Thingamabobs</a></li>
        <li><a href="#">Doohickies</a></li>
      </ul>
    </li>
</ul>
    </div>
    )
  }
}

 