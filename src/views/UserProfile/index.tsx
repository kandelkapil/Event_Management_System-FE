import {
  Followers,
  InputField,
  InputLabel,
  SaveIcon,
  EditIcon,
  TextAreaField,
  UserAvatar,
  UserDetails,
  UserHeader,
  UserInfo,
  UserName,
  UserProfileWrapper,
  Username,
  ButtonContainer,
  UserProfileContainer,
} from "./UserProfile.Styled";
import ImageUpload from "#components/ImageUpload";
import useProfileController from "./Controllers/useProfileController";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles

const UserProfile = () => {
  const {
    handleEditClick,
    handleFileSelect,
    handleInputChange,
    handleSubmit,
    isEditing,
    user,
  } = useProfileController();

  return (
    <UserProfileContainer>
      <UserProfileWrapper>
        <ToastContainer autoClose={500} />
        <UserHeader>
          <UserAvatar>
            <ImageUpload
              onFileSelect={handleFileSelect}
              image={user?.profile_pic}
            />
          </UserAvatar>
          <UserInfo>
            <UserName>{`${user?.firstName || ""} ${
              user?.lastName || ""
            }`}</UserName>
            <Username>@{user?.username}</Username>
            <Followers>{user?.followers} Followers</Followers>
            {<EditIcon onClick={handleEditClick} />}
          </UserInfo>
        </UserHeader>
        <UserDetails>
          <InputLabel style={!isEditing ? { cursor: "not-allowed" } : {}}>
            First Name:
            <InputField
              type="text"
              value={user?.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              disabled={!isEditing}
              style={!isEditing ? { cursor: "not-allowed" } : {}}
            />
          </InputLabel>

          <InputLabel style={!isEditing ? { cursor: "not-allowed" } : {}}>
            Last Name:
            <InputField
              type="text"
              value={user?.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              disabled={!isEditing}
              style={!isEditing ? { cursor: "not-allowed" } : {}}
            />
          </InputLabel>

          <InputLabel style={!isEditing ? { cursor: "not-allowed" } : {}}>
            Address:
            <InputField
              type="text"
              value={user?.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              disabled={!isEditing}
              style={!isEditing ? { cursor: "not-allowed" } : {}}
            />
          </InputLabel>
          <InputLabel style={!isEditing ? { cursor: "not-allowed" } : {}}>
            Phone No:
            <InputField
              type="number"
              max={10}
              min={10}
              value={user?.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              disabled={!isEditing}
              style={!isEditing ? { cursor: "not-allowed" } : {}}
            />
          </InputLabel>
          <InputLabel style={!isEditing ? { cursor: "not-allowed" } : {}}>
            Description:
            <TextAreaField
              value={user?.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              disabled={!isEditing}
              rows={10}
              style={!isEditing ? { cursor: "not-allowed" } : {}}
            />
          </InputLabel>
          {isEditing && (
            <ButtonContainer>
              <SaveIcon onClick={handleSubmit}>Save</SaveIcon>
            </ButtonContainer>
          )}
        </UserDetails>
      </UserProfileWrapper>
    </UserProfileContainer>
  );
};

export default UserProfile;
