import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";

const DrawerContainer = styled.div`
  position: absolute;
  top: 100%; /* Position below the UserAvatar */
  right: 0;
  backdrop-filter: blur(10px);
  background-color: rgba(180, 182, 253, 0.8);
  border: 1px solid rgba(180, 182, 253, 0.8);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;

`;

const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f0f0f0;
  border-radius: 50%;
  cursor: pointer;
`;

const Icon = styled(FaAngleDown)`
  cursor: pointer;
  color: #888;
  font-size: 32px;
`;

const ProfileButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  padding: 8px 16px;
  border-bottom: 1px solid gray;
`;

const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  padding: 8px 16px;
`;

export { DrawerContainer, UserAvatar, Icon, ProfileButton, LogoutButton };
