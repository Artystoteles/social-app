import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "../styles/navbar.css";

const Sidebar = () => {
  const [user] = useAuthState(auth);
  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="sidebar">
      <div className="sidebar__logoContainer">
        <h1 className="sidebar__logo"> YourPost </h1>
      </div>
      <div className="sidebar__linksContainer">
        <Link className="sidebar__link" to="/">
          Home
        </Link>
        {!user ? (
          <Link className="sidebar__link" to="/login">
            Login
          </Link>
        ) : (
          <Link className="sidebar__link" to="/createpost">
            Create Post
          </Link>
        )}
      </div>
      <div className="sidebar__userContainer">
        {user && (
          <>
            <p className="sidebar__userName">{user?.displayName}</p>
            <div className="sidebar__imageContainer">
              <img
                className="sidebar__userImage"
                src={user?.photoURL || ""}
                width="100"
                height="100"
              />
            </div>
            <button className="sidebar__logOutBtn" onClick={signUserOut}>
              <span className="material-symbols-outlined">
                power_settings_new
              </span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
