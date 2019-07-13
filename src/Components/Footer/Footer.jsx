import React from 'react';
import './Footer.scss';

export default function Footer() {
  
  return (
    
    <footer className="footer">
      <div className="copyright">
      {/* <img src="https://camo.githubusercontent.com/ad43068920f851501ddc49ead12ea1cb5079676d/68747470733a2f2f692e696d6775722e636f6d2f714842554358702e706e67" alt="logoScary" height="50"></img> */}
      <p className="TitleFooter" >AlexMovies</p>
      </div>
      <div className="social">
        <a href="contact us" className="support">Contact Us</a>
        <a href="facebook" className="face">f</a>
        <a href="t" className="tweet">t</a>
        <a href="in" className="linked">in</a>
      </div>
    </footer>    
  );
}
