import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    console.log(props);
    console.log(props.friends);
    const {name, email, id} = props.friends;
    const friendStyle ={
        border: '2px solid lightgrey',
        margin: '5px',
        padding: '10px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            <Link to={`/friend/${id}`}>
                <button>see details of Id: {id}</button>
            </Link>
        </div>
    );
};

export default Friend;