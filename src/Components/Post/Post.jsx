import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const {id, title, body} =post;
    const navigate = useNavigate()


    const handleNavigation =()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h5>ID: {id}</h5>
            <h4>{title}</h4>
            <Link to ={`/post/${id}`}>Details</Link>
            <Link to ={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleNavigation}>Button Handler</button>
        </div>
    );
};

export default Post;