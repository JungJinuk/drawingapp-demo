import React, { Component, PropTypes } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="my-navbar">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Drawing Something</a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-question-sign"></span></a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

NavBar.propTypes = {

};

export default NavBar;