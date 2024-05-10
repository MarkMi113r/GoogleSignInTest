import { googleLogout } from "@react-oauth/google";
import { useState } from "react";
import Login from "./Login";

function App() {
  const [user, setUser] = useState<any>();
  const [profile, setProfile] = useState<any>([]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      {profile ? (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          {JSON.stringify(profile)}
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <div className="shadow-2xl">
          <Login setProfile={setProfile} />
        </div>
      )}
    </div>
  );
}
export default App;
