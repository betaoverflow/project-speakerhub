import React from 'react';
import "./Card.css";

export default function Card(props) {

  return (
    <figure class="card">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample-img" />
        <figcaption>
          <img src="https://leebyron.com/_next/static/images/me-c4e5529383c4d9314b95ef084571f150.jpg" alt="profile-img" class="profile" />
          <h4>{props.name}<span>Web Developer</span></h4>
          <p>GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. </p>
          <button className="contact" onClick={() => {}}>Contact me</button>
          <button className="info" onClick={() => {}}>More Info</button>
        </figcaption>
    </figure>
  );
}
