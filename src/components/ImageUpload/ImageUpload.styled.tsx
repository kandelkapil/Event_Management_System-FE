import styled from "styled-components";
import { AiOutlineCloudUpload } from "react-icons/ai";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvatarOverlay = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const FileInput = styled.input`
  cursor: pointer;
  display: none;
`;

export const ErrorMessage = styled.p`
  font-size: 10px;
  color: red;
`;

export const AvatarImage = styled(AiOutlineCloudUpload)`
  width: 50%;
  height: 50%;
  fill: #d3d3d3;
  object-fit: "cover";
  cursor: pointer;
`;
