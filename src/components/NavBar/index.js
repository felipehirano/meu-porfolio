/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const NavBar = props => {
    return (
      <React.Fragment>
        <nav id="navbar">
          <div className="nav-wrapper">
            <p className="brand">
              Felipe
              <strong>Ken</strong>
            </p>
            <a
              onClick={props.toggleMenu}
              className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
            >
              <span />
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
};

export default NavBar;