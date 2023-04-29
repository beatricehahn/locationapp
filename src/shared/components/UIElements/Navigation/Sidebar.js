import React from 'react';

import './Sidebar.css';

const Sidebar = props => {
    return <aside className="side-bar"> {props.children} </aside>
};

export default Sidebar;