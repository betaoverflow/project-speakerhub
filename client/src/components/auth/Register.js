import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      profession: "",
      company_name: "",
      past_talks: "",
      past_talks2: "",
      past_talks3: "",
      past_talks4: "",
      profile_image: null,
      bio: "",
      facebook: "",
      instagram: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      bio: this.state.bio,
      profession: this.state.profession,
      company_name: this.state.company_name,
      facebook: this.state.facebook,
      instagram: this.state.instagram,
      past_talks: [this.state.past_talks,
         this.state.past_talks2,
         this.state.past_talks3,
         this.state.past_talks4],
      profile_image: this.state.profile_image
    };
    
    console.log(newUser.profile_image);

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <label htmlFor="name">Name</label>
                <span className="red-text">{errors.name}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.profession}
                  error={errors.profession}
                  id="profession"
                  type="text"
                  className={classnames("", {
                    invalid: errors.profession
                  })}
                />
              <label htmlFor="profession">Profession</label>
                <span className="red-text">{errors.profession}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.company_name}
                  error={errors.company_name}
                  id="company_name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.company_name
                  })}
                />
              <label htmlFor="company_name">Name of the Company</label>
                <span className="red-text">{errors.company_name}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.bio}
                  error={errors.bio}
                  id="bio"
                  type="text"
                  className={classnames("", {
                    invalid: errors.bio
                  })}
                />
              <label htmlFor="Bio">Bio</label>
                <span className="red-text">{errors.bio}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.past_talks}
                  error={errors.past_talks}
                  id="past_talks"
                  type="text"
                  className={classnames("", {
                    invalid: errors.past_talks
                  })}
                />
                <input
                  onChange={this.onChange}
                  value={this.state.past_talks2}
                  error={errors.past_talks2}
                  id="past_talks2"
                  type="text"
                  className={classnames("", {
                    invalid: errors.past_talks2
                  })}
                />
                <input
                  onChange={this.onChange}
                  value={this.state.past_talks3}
                  error={errors.past_talks3}
                  id="past_talks3"
                  type="text"
                  className={classnames("", {
                    invalid: errors.past_talks3
                  })}
                />
                <input
                  onChange={this.onChange}
                  value={this.state.past_talks4}
                  error={errors.past_talks4}
                  id="past_talks4"
                  type="text"
                  className={classnames("", {
                    invalid: errors.past_talks4
                  })}
                />
              <label htmlFor="past_talks">Past Talks and Presentations</label>
                <span className="red-text">{errors.past_talks}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.facebook}
                  error={errors.facebook}
                  id="facebook"
                  type="url"
                  className={classnames("", {
                    invalid: errors.facebook
                  })}
                />
              <label htmlFor="facebook">Facebook</label>
                <span className="red-text">{errors.facebook}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.instagram}
                  error={errors.instagram}
                  id="instagram"
                  type="url"
                  className={classnames("", {
                    invalid: errors.instagram
                  })}
                />
              <label htmlFor="instagram">Instagram</label>
                <span className="red-text">{errors.instagram}</span>
              </div>

              <div className="input-field col s12">
              <label htmlFor="profile_image" style={{ marginTop: "-10px"}}>Profile Image</label>
                <input
                  style={{ paddingLeft: "100px"}}
                  onChange={this.onChange}
                  value={this.state.profile_image}
                  id="profile_image"
                  type="file"
                  className={classnames("", {
                    invalid: errors.profile_image
                  })}
                />
                <span className="red-text">{errors.profile_image}</span>
              </div>

              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
