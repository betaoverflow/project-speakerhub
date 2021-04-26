import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserDetails from "../Card/UserDetails";

function SingleUser({match})
{

    useEffect(() =>
    {
        fetchUser();
        console.log(match);
    }, []);

    const [user, setUser] = useState([]);

    const fetchUser = async () =>
    {
        console.log("this is id",match.params)
        const fetchUser = await fetch(`http://localhost:5000/api/users/${match.params.id}`);
        const user = await fetchUser.json();
        setUser(user);
        console.log(user);
    };
    console.log("this is id",match.params)

    return (
        <div>
            {user && user.map(user => (
                <div key={user._id}  style={{ backgroundColor: "#fafafa" }}>
                  <UserDetails
                    key={user._id}
                    username={user.name}
                    contact={user.email}/>
                </div>


            ))}
        </div>
    )
}

export default SingleUser

{/*<h1 key={user._id}>{user.name} 🔥</h1>*/}
