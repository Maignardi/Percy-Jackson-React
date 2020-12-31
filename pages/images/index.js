import React, {Component}from 'react';
import './camp.css';
import camp from './camp.png'


class Image extends Component{
  render(){
    return(
        <div className="logo">
        <img  src={camp}/>
        </div>

    );
  }
}
export default Image;
