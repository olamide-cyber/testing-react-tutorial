import React, { useState, useEffect } from 'react';

const Users = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const usersResponse = fetch('https://jsonplaceholder.typicode.com/users');
        usersResponse.then(response => {
            if (!response.ok) {
                alert('Unable to fetch usernames, Please check your internet connection and try again.')
            }
            return response.json();
        }).then(jsonResponse => setData(jsonResponse))
    }, []);

    return (
        <>
            {
                data.length === 0 ?  <h1>Loading usernames, please wait...</h1> : (
                    <>
                        <h1>Usernames</h1>
                        <ul>
                            {
                                data.map(user => {
                                    return <li key={user.name}>{user.name}<span className='email'>{user.email}</span></li>
                                })
                            }
                        </ul>
                    </>
                )
            } 
        </>
    );
}

export default Users;