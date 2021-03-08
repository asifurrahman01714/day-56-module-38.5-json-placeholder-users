import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
      const url = 'http://jsonplaceholder.typicode.com/users';
      fetch(url)
      .then(response => response.json())
      .then(data =>{
        setFriends(data);
        console.log(data);
      })
    },[])

    return (
        <div>
            <h1>Total friends:{friends.length} </h1>
            {
                friends.map(fd=> <Friend friends={fd}></Friend>)
            }
        </div>
    );
};

export default Home;