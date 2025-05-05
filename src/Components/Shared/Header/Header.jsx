import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="Header py-5">
      <div className="inner-header-section">
        <div className="container">
          <div className="inner-header-nav">
            <div className="left-image-header">

            </div>
            <div className="right-navigation-header">
              <nav>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
