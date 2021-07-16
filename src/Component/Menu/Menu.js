import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">

            <div className="navbar-header">
              <a className="navbar-brand">TesT API </a>
            </div>
  
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a >Trang chủ </a></li>
                <li className><a >Quản lý Trạng Thái </a></li>
              </ul>
            </div>
          </nav>
        );
    }
}

export default Menu;