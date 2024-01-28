import styled from "styled-components";

export const EventCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.5px solid #6a5acd;
  border-radius: 16px 16px 16px 16px;
  max-height: 325px;
  height: 325px;
  overflow: scroll;


  .delete-event{
    margin-left: 10px;
    margin-bottom: 10px;
    border: 0;
    width: fit-content;
    background-color: lightcoral;
    color: white;
    border-radius: 25px;
    cursor: pointer;
    padding: 10px 20px;
    user-select: none;
    border: 0;
  }

  .register-event {
    margin-left: 10px;
    margin-bottom: 10px;
    border: 0;
    width: fit-content;
    background-color: rgb(88 66 234);
    color: white;
    border-radius: 25px;
    cursor: pointer;
    padding: 10px 20px;
    user-select: none;
    border: 0;
  }

  .cancel-event {
    margin-left: 10px;
    margin-bottom: 10px;
    border: 0;
    width: fit-content;
    background-color: rgb(116 113 137);
    color: white;
    border-radius: 25px;
    cursor: pointer;
    padding: 10px 20px;
    user-select: none;
    border: 0;
  }

  .venue_time {
    color: rgb(88 66 234);
    font-size: 12px;
    padding: 10px 16px;
  }

  .attendee-div {
    width: 100%;
    display: flex;
    border-radius: 0px 0px 16px 16px;
    overflow: hidden;
    padding: 10px 16px;

    .details {
      margin-left: auto;
      font-size: 12px;
      font-weight: 500;
      color: rgb(90 104 128);
      cursor: pointer;
    }
  }

  .name {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
    padding: 10px 16px;
  }

  .event-picture {
    border-radius: 16px;
    min-height: 150px;
    min-width: 200px;
    width: 200px;
    height: 150px;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .attendee-fallback {
    border: 0.5px solid #6a5acd;
    width: 20px;
    height: 20px;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 25px;
    margin-right: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
`;
