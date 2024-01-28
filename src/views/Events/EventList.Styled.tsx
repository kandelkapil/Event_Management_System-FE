import styled from "styled-components";

export const EventListContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #d8dafd;
  min-height: calc(100vh - 65px);

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 24px 0px;
  }

  .create-event {
    margin-left: auto;
    background-color: rgb(88 66 234);
    color: white;
    border-radius: 25px;
    cursor: pointer;
    padding: 10px 20px;
    user-select: none;
    border: 0;
  }

  .events-container {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
    width: 100%;
    padding: 24px 0px;
  }

  @media only screen and (max-width: 768px) {

    .wrapper{
      width: 50%;
      align-items: center;
    }

    .create-event{
      margin-left: unset;
      width: fit-content;
    }

}




`;
