import React from "react";
import "./UserDetails.css";

export default function UserDetails(props) {
  return(
    <section className="User_Page">
     <div className="User_Image">
      <img className="images" src={props.profile_image}/>
     </div>

     <div className="user_container">
      <div style={{color: "#141414",
        fontSize: "40px",
        textDecoration: "none",
        fontWeight: "bold",
        padding: "10px",
        margin: "10px"}}>
        ABOUT ME
      </div>
      <p className="quote"><i>"Quote provided by the user"</i></p>
      <div className="User_intro">
       <p className="user_name">{props.username}</p>
       <p className="job"><span>Profession: </span>{props.job}</p>
       <p className="company"><span>Company: </span>{props.company}</p>
         <div className="User_join_date">
          <p className="date">{props.joindate}</p>
         </div>
      </div>

      <div className="User_bio">
       <p>Bio</p>
       <p className="info"><span></span>{props.bio}</p>
      </div>

      <div className="User_past_talks">
       <p>Past Talks</p>
       <li className="past_talks">{props.pasttalks1}</li>
       <li className="past_talks">{props.pasttalks2}</li>
       <li className="past_talks">{props.pasttalks3}</li>
       <li className="past_talks">{props.pasttalks4}</li>
      </div>

      <div className="User_social_media">
       <p>Contact Me</p>
       <a href="#" class="contact">{props.contact}</a>
      </div>
     </div>
    </section>
  );
}
