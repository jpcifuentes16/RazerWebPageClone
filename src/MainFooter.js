import React, { Component } from 'react';
import './MainFooter.css';


class MainFooter extends Component 
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
    return (
      <div>
        <footer className="main-footer">

        <div className="footer-grid">

          <div>
            <p className="pTitle">Our Network</p>
            <p>Razer.com</p>
            <p>Razer Gold & Silver</p>
            <p>Razer Pay</p>
            <p>Game Deals</p>
          </div>

          <div>
            <p className="pTitle">Shop</p>
            <p>RazerStore (Online)</p>
            <p>Razer Gift Card</p>
            <p>My Account</p>
            <p>Corporate Program</p>
            <p>Education Program</p>
            <p>RazerStore (Retail)</p>
            <p>Partners and Affiliate</p>
          </div>


          <div>
            <p className="pTitle">Software/Services</p>
            <p>Razer ID</p>
            <p>Synapse 3</p>
            <p>Chroma RGB</p>
            <p>Cortex</p>
            <p>Developer Portal</p>
          </div>



          <div>
            <p className="pTitle">Company</p>
            <p>About Razer</p>
            <p>Press Room</p>
            <p>Investor Relations</p>
            <p>Careers</p>
            <p>zVentures</p>
          </div>


          <div>
            <p className="pTitle">Need Help?</p>
            <p>Support</p>
            <p>Warranty</p>
            <p>Store FAQs</p>
            <p>Self-help Returns</p>
            <p>Contact Us</p>
            <p>Store Locator</p>
          </div>

          <div>
            <p className="pTitle">Connect</p>
            <p>Get Started</p>
            <p>Insider</p>
            <p>Newsletter Sign Up</p>
            <p className="Facebook">Facebook</p>
            <p className="Twitter">Twitter</p>
            <p className="Instagram">Instagram</p>
          </div>

        </div>

        <p className="creditos">Copyright © 2019 Razer Inc. All rights reserved. | Legal Terms | Privacy Policy | Cookie Policy</p>

        </footer>
      </div>
    );
    


  }
}

export default MainFooter;