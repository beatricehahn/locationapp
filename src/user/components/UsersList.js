import React from 'react';
import './UsersList.css';
import UserItem from './UsersItem';

const UsersList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <h2>No Users Found</h2>
            </div>
        );
    }
    else {
        return (
            <ul>
                {props.items.map(user => (
                    <UserItem 
                        key={user.id} 
                        name={user.name} 
                        image={user.image} 
                        placeCount={user.places}
                    />
                ))}
            </ul>
        )
    }
}

export default UsersList;