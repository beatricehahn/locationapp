import React from 'react';
import { createPortal } from 'react-dom';

import './Backdrop.css';

const Backdrop = props => {
    const backContent = <div className="backdrop" onClick={props.onClick}></div>
    return (
        <div>
            {createPortal(backContent, document.getElementById('backdrop-hook'))};
        </div>
    );
}

export default Backdrop;