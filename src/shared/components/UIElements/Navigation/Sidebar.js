import React from 'react';
import { createPortal } from 'react-dom';

import './Sidebar.css';

const Sidebar = props => {
    const content = <aside className="side-bar"> {props.children} </aside>;
    return (
        <div>
            {createPortal(content,document.getElementById('drawer-hook'))};
        </div>
    );
};

export default Sidebar;