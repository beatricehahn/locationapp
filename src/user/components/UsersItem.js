import React from 'react';
import './UsersItem.css';

const UsersItem = props => {
    return (
        <li>
            <div className="user-item__content">
                <div className="user-item__content">  
                    <img src={props.image} alt={props.name} />
                </div>
                <div className="user-item__info">
                    <h2>{props.name}</h2>
                    <h3>
                            {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
                    </h3>
                </div>
            </div>
        </li>
    );
}

export default UsersItem;