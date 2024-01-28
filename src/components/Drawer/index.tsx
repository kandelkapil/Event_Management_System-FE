import React, { useState, useRef, useEffect } from "react";
import {
  DrawerContainer,
  UserAvatar,
  Icon,
  ProfileButton,
  LogoutButton,
} from "./Drawer.Styled";
import { useNavigate } from "react-router-dom";
import { logOutService } from "./Repositories/Drawer.Remote";
import { useAuth } from "#hooks/useAuthHook";

const LoginDrawer = (user: any) => {
  const profilePic = user?.user?.profile_pic || "";

  const { setUser } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  const navigate = useNavigate();

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = async () => {
    setDrawerOpen(false);
    const logout = await logOutService();
    if (logout) {
      setUser({});
      navigate("/");
    }
  };

  const handleViewProfile = () => {
    setDrawerOpen(false);
    navigate("/profile");
  };

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef?.current?.contains(event.target)) {
        setDrawerOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerRef]);

  return (
    <>
      {profilePic ? (
        <img
          src={`${import.meta.env.VITE_BASE_URL}${profilePic}`}
          alt="user-logo"
          onClick={handleToggleDrawer}
          className="user-logo"
        />
      ) : (
        <UserAvatar onClick={handleToggleDrawer} />
      )}

      <Icon onClick={handleToggleDrawer} />
      {drawerOpen && (
        <DrawerContainer ref={drawerRef}>
          <ProfileButton onClick={handleViewProfile}>
            View Profile
          </ProfileButton>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </DrawerContainer>
      )}
    </>
  );
};

export default LoginDrawer;
