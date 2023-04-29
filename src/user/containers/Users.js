import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id:'001', 
            name: 'Jane Doe',
            image: 'https://www.petlandtexas.com/wp-content/uploads/2016/08/Red_Bunny_Petland_Puppy.jpg', 
            places: 2
        }
    ];
    return <UsersList items={USERS} />
}

export default Users;