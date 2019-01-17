import React, {Component} from 'react';
import image from './about.jpg';

const About = () =>{

  const divSt = {
    backgroundImage:`url(${image})`,
    backgroundSize: 'cover',
    height: '59vw'
  }

  const txtSt ={
    position: 'absolute',
    left: '9vw'
  }
  return(
    <div style = {divSt}>
      <p>If you have something to solve we gonna solve it.</p> 
      <p style={txtSt}>If you gonna pay.</p>
    </div>
  )
}

export default About;