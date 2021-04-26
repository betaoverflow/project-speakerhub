import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@material-ui/core';
import useStyles from "./styles";


{/*<Link
to="/"
style={{
  fontFamily: "monospace"
}}
className="col s5 brand-logo center black-text"
>
<i className="material-icons">code</i>
MERN
</Link>*/}



const Navbar = ({totalItems}) =>
{
    const classes = useStyles();
    return (
        <>
          <AppBar position='sticky' className={classes.appBar} color="inhert">
          <Toolbar className={classes.arrange}>
            <Link to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
              >
            <Typography variant="h6" className = {classes.title} color="inherit">
                    <img src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg" height="30px" className={classes.image} />
                    SpeakerHub
                    </Typography>
            </Link>

            <Link to="/register"
              style={{
                fontFamily: "monospace",
                marginLeft:'80%'
              }}
              className="col s5 brand-logo center black-text"
              >
              <Typography variant="h6" className = {classes.title} color="inherit">
                    Join Us
                    </Typography>
            </Link>

            <Link to="/login"
              style={{
                fontFamily: "monospace",
                marginLeft:'1%'
              }}
              className="col s5 brand-logo center black-text"
              >
              <Typography variant="h6" className = {classes.title} color="inherit">
                    Login
                    </Typography>
            </Link>
                <div className={classes.grow} />
            </Toolbar>
          </AppBar>
        </>
    )
}

export default Navbar

{/*
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">code</i>
              MERN
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar; */}
