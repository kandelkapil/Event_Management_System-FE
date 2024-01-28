import React, { useEffect, useState } from "react";
import { NavBarContainer } from "./NavBar.Styled";
import { Link } from "react-router-dom";
import { getLocalStorageKey } from "#utils/localStorage";
import LoginDrawer from "#components/Drawer";
import { useAuth } from "#hooks/useAuthHook";

const NavBar = () => {
  const { user } = useAuth();

  return (
    <NavBarContainer>
      <div className="logo">
        <Link to="/">
          <span>E</span>
          <span>v</span>
          <span>e</span>
          <span>n</span>
          <span>t</span>
          <span>s</span>
          <span>&nbsp;</span>
          <span>M</span>
          <span>a</span>
          <span>n</span>
          <span>a</span>
          <span>g</span>
          <span>e</span>
          <span>r</span>
        </Link>
      </div>

      <div className="nav-middle">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
      </div>

      <div className="nav-right">
        {user?.userId ? (
          <LoginDrawer user={user} />
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
