import React, {useState} from "react";
import {Link} from 'react-router-dom';

import Backdrop from './../../UIElements/Backdrop/Backdrop';
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import "./MainNavigation.css";
import SideDrawer from "./SideDrawer";

const MainNavigation = props => {
  const [drawIsOpen,setDrawerOpen]= useState(false);
  const openDrawer = ()=>{
    setDrawerOpen(true)
}

const closeDrawer = ()=>{
  setDrawerOpen(false)
};

  return (
  <React.Fragment>
    {drawIsOpen && <Backdrop onClick={closeDrawer} />}
      <SideDrawer show={drawIsOpen} onClick={closeDrawer} >
    <nav className="main-navigation__drawer-nav">
      <NavLinks />
    </nav>
  </SideDrawer> 
    <MainHeader>
      <button className="main-navigation__menu-btn" onClick={openDrawer}>
        <span />
        <span />
        <span />
      </button>
  

      <h1 className="main-navigation__title">
      <Link to="/">YourPlaces</Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <NavLinks />
      </nav>
    </MainHeader> 
  </React.Fragment>
  );
};

export default MainNavigation;
