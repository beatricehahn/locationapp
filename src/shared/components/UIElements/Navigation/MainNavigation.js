import React from 'react';
import { Link } from 'react-router-dom';

import './MainNavigation.css';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import Sidebar from './Sidebar';

const MainNavigation = props => {
    return (
        <React.Fragment>
            <Sidebar>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </Sidebar>
            <MainHeader>
                <button className="main-navigation__menu-btn">
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link>Loci</Link>
                </h1>
                <nav className="main-navigation__header-nav"><NavLinks /></nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation