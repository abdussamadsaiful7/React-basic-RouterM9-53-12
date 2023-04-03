import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();

    return (
        <div>
            <h3>Every thing about this person here......</h3>
            <h4>Name: {friend.name}</h4>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetail;