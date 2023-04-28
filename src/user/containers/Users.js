// import react
import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS=[{id:'001', name: 'Jane Doe', image: 'none', places:2}];
    return <UsersList items={USERS} />
}

export default Users;