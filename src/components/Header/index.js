import React from 'react';

const Header = props => {
    return (
      <header id="welcome-section">
        <div className="container">
          <h1>
            <span className="line">I do</span>
            <span className="line">fun things</span>
            <span className="line">
              <span className="color">Include</span> code.
            </span>
          </h1>
          <div className="buttons">
            <a href="#projects">my works</a>
            <a href="#contact" className="cta">
              contact
            </a>
          </div>
        </div>
      </header>
    );
};

export default Header;