import React from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './Sidebar.css';

const Sidebar = props => {
    const content = 
    <CSSTransition
        in={props.show}
        timeout={200}
        classNames="slide-in-left"
        mountOnEnter
        unmountOnExit
    >
        <aside className="side-bar" onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>;
    return (
        <div>
            {createPortal(content, document.getElementById('drawer-hook'))};
        </div>
    );
};

export default Sidebar;