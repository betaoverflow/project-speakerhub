import React from 'react';
import "./Card.css";

export default function Card(props) {

  return (
    <figure class="card">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample-img" />
      <figcaption>
        <img src={props.profile_image} alt="profile-img" class="profile" />
        <h4>{props.name}<span>{props.job}</span></h4>
        <p>{props.bio}</p>
        <button className="contact" onClick={() => { }}>Contact me</button>
        <button className="info" onClick={() => { }}>More Info</button>
      </figcaption>
    </figure>
  );
}
