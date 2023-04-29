import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import Sidebar from './Sidebar';
import Backdrop from '../Backdrop';

import './MainNavigation.css';

const MainNavigation = props => {
    const [sidebarIsOpen, setSidebar] = useState(false);

    const openSidebar = () => {
        setSidebar(true);
    }

    const closeSidebar = () => {
        setSidebar(false);
    }

    return (
        <React.Fragment>
            {sidebarIsOpen && <Backdrop onClick={closeSidebar} />}
            {sidebarIsOpen && 
            <Sidebar>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </Sidebar>
            }
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openSidebar}>
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

export default MainNavigation;