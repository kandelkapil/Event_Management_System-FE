import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #d8dafd;

  .errors {
    margin-top: 2px;
    font-size: 10px;
    font-weight: 300;
    color: lightcoral;
  }

  div.image-container {
    background-image: url("src/assets/signup.jpg");
  }

  h4 {
    margin-bottom: 12px !important;
  }

  form {
    padding: 22px 100px !important;
  }

  .checkbox-container {
    display: flex;
    margin: 0px 0px 12px 0px;

    label.not-registered {
      margin-top: unset !important;
      padding-left: 4px;
      white-space: nowrap;
      margin-bottom: 0;
      cursor: pointer;
    }

    .terms {
      text-decoration: none;
      color: rgb(88 66 234);
      font-weight: 400;
    }
  }

  .bolt-icon {
    margin-bottom: unset !important;
  }

  .form-group {
    margin-bottom: 12px !important;
  }

  .not-registered {
    margin-top: 12px !important;
    margin-top: 12px !important;
  }

  @media (max-width: 767px) {
    .bolt-icon {
      margin-bottom: unset;
    }
  }
`;
