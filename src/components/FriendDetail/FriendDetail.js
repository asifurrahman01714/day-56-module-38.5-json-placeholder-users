import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    let {FriendId} = useParams();
    const [ friend, setFriend] = useState({});
    const {name, email, phone} = friend;
    useEffect(()=>{
        const url = `http://jsonplaceholder.typicode.com/users/${FriendId}`;
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setFriend(data);
        })
    },[]);

    const friendStyle ={
        border: '2px solid lightgrey',
        margin: '5px',
        padding: '10px'
    }
    return (
        <div style={friendStyle}>
            <h1>This is Detail of: {FriendId}</h1>
            <h2>Name: {name}</h2>
            <h2>Name: {email}</h2>
            <h2>Phone: {phone}</h2>
        </div>
    );
};

export default FriendDetail;