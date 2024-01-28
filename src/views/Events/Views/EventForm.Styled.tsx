import styled from "styled-components";

export const EventFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 32px 0px 32px 0px;
  background-color: #d8dafd;
  min-height: calc(100vh - 65px);

  div.upload > div {
    width: 200px;
    height: 200px;
    cursor: pointer;
    border: 1px solid rgb(226 224 236);
    border-radius: 25px;
    font-size: 14px;
    color: black;
    font-weight: 400;
    margin-bottom: 32px;
  }

  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    width: fit-content;
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 32px;
  }

  .form-group {
    width: 50%;
    margin-bottom: 32px;
  }

  .form-group.upload {
    svg {
      fill: #888;
    }
  }

  .form-group.upload > div {
    background: white;
  }

  label {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 5px;
  }

  input,
  textarea {
    padding: 12px 18px;
    background-color: white;
    border-radius: 25px;
    border: 1px solid rgb(226 224 236);
    color: rgb(140 136 165);
    font-weight: 300;
    width: 100%;
  }

  textarea {
    resize: none;
  }

  button.create-event {
    background-color: rgb(88 66 234);
    color: white;
    border-radius: 25px;
    cursor: pointer;
    padding: 10px 20px;
    user-select: none;
    border: none;
  }

  input[type="datetime-local"] {
    cursor: pointer;
  }
`;
