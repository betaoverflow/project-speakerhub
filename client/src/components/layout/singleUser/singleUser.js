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
                        contact={user.email}
                        job={user.profession}   
                        company={user.company_name} 
                        bio={user.bio}
                        pasttalks1={user.past_talks[0]}
                        pasttalks2={user.past_talks[1]}
                        pasttalks3={user.past_talks[2]}
                        pasttalks4={user.past_talks[3]}
                        profile_image={user.profile_image} 
                    />
                </div>
            ))}
        </div>
    )
}

export default SingleUser

{/*<h1 key={user._id}>{user.name} 🔥</h1>*/}
