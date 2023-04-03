import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate()
    const {id, title, useId, body} = post;

    const handleGoBack = () =>{
        navigate(-1);
    }
    //console.log(post);
    return (
        <div>
            <h3>Details about your post: {id}</h3>
            <h5>{title}</h5>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;