import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card/Card";
import SearchBar from "./SearchBar/SearchBar";
import Hero from './Hero';
import About from "./About";

function Landing()
{
  const [users, setUsers] = useState();
  useEffect(() =>
  {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function ()
    {
      if (request.readyState === 4 && request.status == 200)
      {
        const response = JSON.parse(request.response)
        setUsers(response)
      }
    };
    request.open('GET', 'http://localhost:5000/api/users/api', true);
    request.send();
  }, [])

  useEffect(() =>
  {
    console.log(users)
  }, [users])


 return (
<div>
  <Hero/>
  <About/>
    <div
      style={{ height: "100vh", width:"100vw", marginTop: '5%'}}
      className="container valign-wrapper">
        
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Speaker</b> is the key for your {" "}
            <span style={{ fontFamily: "monospace", fontSize: "2.2rem" }}>EVENT</span> so here we are 🔥
          </h4>
          <SearchBar />
            <div style={{
               display: "grid",
               gridTemplateRows: "auto",
               gridTemplateColumns: "2fr 2fr 2fr 2fr",
               gridColumnGap: "20px",
               paddingTop: "10px",

               }}>
              {users && users.map(user => <Link to={`id/${ user._id }`}>
                <Card
                 key={user._id} 
                 name={user.name} 
                 job={user.profession}
                 bio={user.bio} 
                 profile_image={user.profile_image}
                 />
                </Link>)}
             </div>

          <br />
        </div>
      </div>
    </div>
    </div>
  );
}




export default Landing;


// beautiful buttons

{/*<div className="col s6">
            <Link
              to="/register"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
            </Link>
          </div>
          <div className="col s6">
            <Link
              to="/login"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large btn-flat waves-effect white black-text"
            >
              Log In
            </Link>
          </div> */}
