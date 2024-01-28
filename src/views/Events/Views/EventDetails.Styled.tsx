import styled from "styled-components";

export const EventDetailsContainer = styled.div`
  display: flex;
  background-color: #d8dafd;
  justify-content: center;
  min-height: calc(100vh - 65px);
  width: 100%;
  padding: 24px 0px;

  .venue-time-sm {
    display: none;
  }

  .attendees-sm {
    display: none;
  }

  .attendees {
    color: black;
    font-size: 16px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 90%;
  }

  .edit-event {
    margin-left: auto;
    background-color: rgb(88 66 234);
    color: white;
    border-radius: 25px;
    cursor: pointer;
    padding: 10px 20px;
    user-select: none;
    border: 0;
  }

  .event-detail-wrapper {
    width: 90%;
    display: flex;
    justify-content: space-between;

    .contents {
      display: flex;
      flex-direction: column;
      width: 48.5%;
      height: fit-content;
      min-height: 400px;

      .venue-time {
        color: rgb(88 66 234);
        font-size: 16px;
      }

      .name {
        font-size: 32px;
        font-weight: 500;
      }

      .name-sm {
        display: none;
      }

      .desc {
        font-weight: 400;
        color: rgb(153 161 177);
        font-size: 18px;
        word-break: break-all;
      }
    }

    .image-container {
      width: 48.5%;

      .event-image {
        height: 400px;
        width: 400px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .venue-time-sm {
      display: block;
      color: rgb(88 66 234);
      font-size: 18px;
      margin-bottom: 10px;
    }

    .attendees-sm {
      display: block;
      font-size: 16px;
      font-weight: 500;
    }

    .attendees {
      display: none;
    }

    .name {
      display: none;
    }

    .desc {
      margin-top: 10px;
    }

    .name-sm {
      display: block;
      font-size: 32px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    .wrapper {
      width: 85%;
      .event-detail-wrapper {
        flex-direction: column-reverse;
        width: 100%;
        padding-top: 32px;
        .contents {
          width: 100%;

          .venue-time {
            display: none;
          }
        }

        .image-container {
          width: 100%;
          img {
            width: 100%;
            height: 400px;
          }
        }
      }
    }
  }
`;
