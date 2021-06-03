import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  //database stores the potential path to a user's profile image on the server
  const profileImage = userData.profile_image;
  userData.profile_image =
    profileImage != null
      ? "/fileUploads/profilePics/" + userData.email + ".png"
      : "";

  axios
    .post("/api/users/register", userData)
    .then((res) => {
      console.log(res.data);
      //Handle file data
      const data = new FormData();
      data.append("profileImage", profileImage, userData.email);

      //post profile image into server folder
      fetch("/single", {
        method: "POST",
        body: data,
      })
        .then((res) => res.text())
        .then((pathName) => {
          console.log(pathName);
        })
        .catch((err) => {
          console.log(err);
        });

      history.push("/login");
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
//updateUser
export const updateUser = (userData, history) => async (dispatch) => {
  // console.log('hloo')
  //database stores the potential path to a user's profile image on the server
  var profileImage = userData.profile_image;
  // console.log(profileImage)
  if (typeof profileImage == "string") {
    profileImage = await fetch(profileImage)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );

    function dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    }
    profileImage=dataURLtoFile(profileImage,"/fileUploads/profilePics/" + userData.email + ".png")
  }
  console.log(profileImage);
  userData.profile_image =
    profileImage != null
      ? "/fileUploads/profilePics/" + userData.email + ".png"
      : "";
  // console.log('hllo')
  axios
    .put("/api/users/", userData)
    .then((res) => {
      //Handle file data
      const data = new FormData();
      data.append("profileImage", profileImage, userData.email);

      //post profile image into server folder
      fetch("/single", {
        method: "POST",
        body: data,
      })
        .then((res) => res.text())
        .then((pathName) => {
          console.log(pathName);
        })
        .catch((err) => {
          console.log(err);
        });

      history.push("/dashboard");
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response ? err.response.data : err,
      });
    });
};

// Login - get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      // Save to localStorage

      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
