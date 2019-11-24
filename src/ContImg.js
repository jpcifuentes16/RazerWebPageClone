import React, { Component } from 'react';
import './Container.css';


class ContImg extends Component 
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
    if(this.props.position==="right")
    {
      return (
        <div className="container rightItem" style={{ backgroundImage : `url(${this.props.imgSRC})` }}>
          <div className="cenetered">
            <div className="title2">{this.props.title}</div>
            <div className="text">{this.props.text}&nbsp; <span className="arrow">&gt;</span> </div>
          </div>
        </div>
    );

    }
    if(this.props.position==="right2")
    {
      return (
        <div className="container rightItem2" style={{ backgroundImage : `url(${this.props.imgSRC})` }}>
          <div className="cenetered">
            <div className="title2">{this.props.title}</div>
            <div className="text">{this.props.text}&nbsp; <span className="arrow">&gt;</span> </div>
          </div>
        </div>
    );

    }

    if(this.props.text2===null)
    {
      return (
        <div className="container" style={{ backgroundImage : `url(${this.props.imgSRC})` }}>
          <div className="cenetered">
            <div className="title">{this.props.title}</div>
            <div className="text">{this.props.text}&nbsp; <span className="arrow">&gt;</span> </div>
          </div>
        </div>
    );
    }

    return (
        <div className="container" style={{ backgroundImage : `url(${this.props.imgSRC})` }}>
          <div className="cenetered">
            <div className="title">{this.props.title}</div>
            <div className="text">{this.props.text} <br/> {this.props.text2}&nbsp; <span className="arrow">&gt;</span> </div>
          </div>
        </div>
    );



  }
}

export default ContImg;