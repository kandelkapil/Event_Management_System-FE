import styled from "styled-components";
import { AiOutlineEdit } from "react-icons/ai";

const UserProfileWrapper = styled.div`
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  padding: 80px 40px;
  background: white;
`;

const UserHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
  border: 2px solid #6a5acd;
`;

const UserInfo = styled.div`
  width: 65%;
`;

const UserName = styled.h2`
  margin-bottom: 5px;
`;

const Username = styled.span`
  font-weight: bold;
`;

const Followers = styled.span`
  display: block;
  margin-bottom: 10px;
`;

const UserDetails = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputLabel = styled.label`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  background: white;
`;

const TextAreaField = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  resize: none;
  background: white;
`;

const SubmitButton = styled.button`
  background-color: #6a5acd;
  color: #fff;
  padding: 8px 15px;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

const SaveIcon = styled.button`
  padding: 8px 16px;
  background: #5642ea;
  color: white;
  width: 80px;
  &:hover {
    background: #725ff5;
  }
`;
const EditIcon = styled(AiOutlineEdit)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export {
  SubmitButton,
  TextAreaField,
  InputField,
  UserAvatar,
  UserHeader,
  UserProfileWrapper,
  UserInfo,
  Followers,
  InputLabel,
  UserName,
  Username,
  UserDetails,
  SaveIcon,
  EditIcon,
  ButtonContainer,
};
