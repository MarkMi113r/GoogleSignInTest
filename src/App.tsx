import { googleLogout } from "@react-oauth/google";
import React, { useState } from "react";
import "./App.css";
import Timer from "./components/Countdown/Timer";
import Preloader from "./components/Preloader/Preloader";

function App() {
  const [user, setUser] = useState<any>();
  const [profile, setProfile] = useState<any>([]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  function onSignIn(googleUser: any) {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  class Login extends React.Component {
    constructor(props: any) {
      super(props);
      //@ts-ignore
      window.handleCredentialResponse = this.handleCredentialResponse;
    }

    handleCredentialResponse(response: any) {
      console.log(response);
    }

    render() {
      return (
        <div className="g_id_onload" data-callback="handleCredentialResponse" />
      );
    }
  }

  return (
    // <div>
    //   <h2>React Google Login</h2>
    //   <br />
    //   <br />
    //   {profile ? (
    //     <div>
    //       <img src={profile.picture} alt="user image" />
    //       <h3>User Logged in</h3>
    //       <p>Name: {profile.name}</p>
    //       <p>Email Address: {profile.email}</p>
    //       <br />
    //       <br />
    //       {JSON.stringify(profile)}
    //       <button onClick={logOut}>Log out</button>
    //     </div>
    //   ) : (
    //     <div className="shadow-2xl">
    //       <Login setProfile={setProfile} />
    //     </div>
    //   )}
    // </div>
    <>
      {/* <div
        id="g_id_onload"
        data-client_id="6820783371-5i5301c4dcmcrhpq6pv08dbh5497qp2i.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="redirect"
        data-login_uri="localhost:8080/api/login"
        data-auto_prompt="false"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div> */}
      {/* <Login />
      <div className="g-signin2"></div> */}
      <div className="App">
        <div className="container">
          <h1>
            MessageUniverse
            <br />
            <span className={"cs"}>Coming Soon</span>
          </h1>
          <Timer />
          {/* <Optin /> */}
          <Preloader />
        </div>
      </div>
    </>
  );
}
export default App;
