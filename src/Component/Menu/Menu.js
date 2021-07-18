import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

function MyLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });
  return (
    <Link className={match ? "menu-item active" : "menu-item"} to={to}>{label} </Link>
  );
}
class Menu extends Component {
    render() {
        return (
           
            <nav className="navbar navbar-default" role="navigation">

            <div className="navbar-header">
              <a className="navbar-brand">TesT API </a>
            </div>
  
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav  ">
                <li ><MyLink to='/addstatus' label='Thêm Trạng Thái'></MyLink></li>
                <li ><MyLink to='/managerstatus' label='Quản lý Trạng Thái'></MyLink></li>
              </ul>
            </div>
          </nav>
         
        );
    }
}

export default Menu;