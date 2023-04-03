import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {email, name, id, phone} = props.friend;
    console.log(props.friend);
    return (
        <div className='friend'>                                                                                                                                                                                                                                                                                                                                                                                          
            <h3>{name}</h3>
            <p>ID: {id}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><Link to={`/friend/${id}`}>Show Details</Link></p>
        </div>
    );
};

export default Friend;