import React, { useEffect, useState } from "react";
import { NavBarContainer } from "./NavBar.Styled";
import { Link } from "react-router-dom";
import LoginDrawer from "#components/Drawer";
import { useAuth } from "#hooks/useAuthHook";

const NavBar = () => {
  const { user } = useAuth();

  return (
    <NavBarContainer>
      <div className="logo">
        <Link to="/">Events Manager</Link>
      </div>

      <div className="nav-middle">
        <Link to="/events">Events</Link>
      </div>

      <div className="nav-right">
        {user?.userId ? (
          <LoginDrawer profilePicture={user?.profile_pic} />
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
