import styled from "styled-components";
import { FaBolt } from "react-icons/fa";
import { FaEyeSlash, FaEye } from "react-icons/fa";

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #d8dafd;
`;

export const LoginWrapper = styled.div`
  display: flex;
  height: 80%;
  width: 90%;
  background-color: white;
  border-radius: 12px;

  form {
    display: flex;
    overflow: scroll;
    flex-direction: column;
    width: 45%;
    height: 100%;
    padding: 34px 100px;
    border-radius: 12px 0px 0px 12px;

    .form-group-password {
      position: relative;
    }

    .bolt-icon {
      margin-bottom: 42px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
    }

    span.not-registered {
      font-size: 14px;
      font-weight: 400;
      color: black;
      margin-top: 24px;
      white-space: nowrap;
      user-select: none;
    }

    span.copyright {
      font-size: 12px;
      margin-top: auto;
      color: rgb(158 155 179);
    }

    a {
      padding-left: 4px;
      text-decoration: none;
      color: rgb(88 66 234);
      font-weight: 400;
    }

    button.login {
      background-color: rgb(88 66 234);
      color: white;
      border-radius: 25px;
      cursor: pointer;
      padding: 10px 20px;
      user-select: none;
    }
  }

  h2 {
    font-size: 32px;
    font-weight: 500;
  }

  h4 {
    font-weight: 400;
    color: rgb(116 113 137);
    white-space: nowrap;
    font-size: 14px;
    margin-bottom: 32px;
  }

  label {
    font-size: 14px;
    color: black;
    font-weight: 400;
    margin-bottom: 5px;

    span {
      color: rgb(88 66 234);
    }
  }

  input {
    padding: 12px 18px;

    background-color: white;
    border-radius: 25px;
    border: 1px solid rgb(226 224 236);
    color: rgb(140 136 165);
    font-weight: 300;
  }

  div.image-container {
    border-radius: 0px 12px 12px 0px;
    height: 100%;
    width: 55%;
    background-image: url("src/assets/login-image.jpg");
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 100dvh;
    padding: 60px;
    background-color: #d8dafd;

    form {
      width: 100%;
      padding: 0;

      input {
        font-size: 16px;
      }

      span.copyright {
        font-size: 16px;
      }

      label {
        font-size: 24px;
        margin-bottom: 12px;
      }

      input {
        padding: 16px 32px;
      }

      button {
        padding: 16px 32px;
        font-size: 24px;
      }

      button.login {
        padding: 16px 32px;
      }

      .bolt-icon {
        margin-bottom: 12px;
        svg {
          font-size: 72px;
        }
      }

      span.not-registered {
        margin-top: 42px;
        margin-left: auto;
        margin-right: auto;
      }

      h2 {
        font-size: 62px;
        /* margin-bottom: 42px; */
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
      }

      h4 {
        margin-bottom: 42px;
        font-size: 24px;
        margin-left: auto;
        margin-right: auto;
        white-space: unset;
        line-height: 29px;
      }

      .form-group {
        margin-bottom: 42px;
      }

      .form-group-password {
        svg {
          font-size: 32px;
        }
      }
    }

    div.image-container {
      display: none;
    }
  }
`;

export const BoltIcon = styled(FaBolt)`
  fill: rgb(88 66 234);
  font-size: 42px;
`;

export const EyeCross = styled(FaEyeSlash)`
  position: absolute;
  cursor: pointer;
  top: 55%;
  right: 10%;
  fill: rgb(158 155 179);
`;
export const EyeShow = styled(FaEye)`
  position: absolute;
  top: 55%;
  right: 10%;
  fill: rgb(158 155 179);
  cursor: pointer;
`;
