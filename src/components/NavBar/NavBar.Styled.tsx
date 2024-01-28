import styled from "styled-components";

export const NavBarContainer = styled.nav`
  position: sticky;
  height: 65px;
  z-index: 90;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  backdrop-filter: blur(10px);
  background-color: rgba(180, 182, 253, 0.8);
  border: 1px solid rgba(180, 182, 253, 0.8);

  .user-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: cover;
  }

  a {
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
  }

  .logo a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 1.2em;
  }

  .nav-middle a,
  .nav-right a {
    text-decoration: none;
    color: black;
    margin: 0 15px;
  }


  .nav-right{
    display: flex;
    align-items: center;
  }

`;
