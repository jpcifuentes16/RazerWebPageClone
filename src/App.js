import React, { Component } from 'react';
import './App.css';
import NavPage from './NavPage';
import ContImg from './ContImg';
import MainFooter from './MainFooter';


class App extends Component 
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
    const img1=require('../img/portada.jpg');
    const title1="Early access to Cyber Weekend"
    const text1="Shop Now" 

    const img2=require('../img/pcPink.jpg');
    const title2="Even Prettier in Quartz Pink"
    const text2="Razer.com Exclusive"
    const text2_2="The New Razer Blade 15"

    const img3=require('../img/headPhones.jpg');
    const title3="Make Sound Your Weapon"
    const text3="Razer Kraken Ultimate"

    const img4=require('../img/laptop.jpg');
    const title4="Score Exclusive Savings and Gifts"
    const text4="Shop Razer Blade 17 Today"

    const img5=require('../img/phones.jpg');
    const title5="Now for a Limited Time $299.99"
    const text5="Score Razer Phone 2"

    const img6=require('../img/mouse.jpg');
    const title6="Customizability Unleashed"
    const text6="Razer Basilisk Ultimate"

    const img7=require('../img/cards.jpg');
    const title7="Razer Gift Card"
    const text7="Available Exclusively on Razer.com"

    const img8=require('../img/phone.jpg');
    const title8="Lose the Heat, Win the Game"
    const text8="Shop Razer Arctech"

    const img9=require('../img/publico.jpg');
    const title9="Join the Discussion on All Things Razer"
    const text9="Get in on Razer Insider"

    return (
      <div>
        <NavPage/>
        <ContImg imgSRC={img1} title={title1} text={text1} text2={null}/>
        <ContImg imgSRC={img2} title={title2} text={text2} text2={text2_2}/>
        <ContImg imgSRC={img3} title={title3} text={text3} text2={null}/>

        <div className="grid-container">
          <ContImg position="right" imgSRC={img4} title={title4} text={text4} text2={null}/>
          <ContImg position="right" imgSRC={img5} title={title5} text={text5} text2={null}/>
          <ContImg position="right2" imgSRC={img6} title={title6} text={text6} text2={null}/>
          <ContImg position="right2" imgSRC={img7} title={title7} text={text7} text2={null}/>
          <ContImg position="right2" imgSRC={img8} title={title8} text={text8} text2={null}/>
          <ContImg position="right2" imgSRC={img9} title={title9} text={text9} text2={null}/>
        </div>

        <MainFooter/>

      </div>      
    );
  }
}

export default App;