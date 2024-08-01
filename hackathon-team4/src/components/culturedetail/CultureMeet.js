import React from "react";
import styled from "styled-components";

const CultureMeet = ({ clubs }) => {
  return (
    <MeetContainer>
      {clubs.map((club) => (
        <MeetCard key={club.clubId}>
          <div className="top">
            <img
              className="profile-img"
              src={club.leaderProfileImageUrl}
              alt="프로필 이미지"
            />
            <div className="meet-name">{club.cultureName} 모임</div>
            <div className="location">{club.regionName}</div>
          </div>
          <div className="culture-type">{club.title}</div>
          <button
            className="meet-play-btn"
            onClick={() => {
              /*여기에 모임링크*/
            }}
          >
            {new Date(club.meetingDate).toLocaleDateString()} 모임
          </button>
          <div className="tag-container">
            <p>
              #{club.genderRestriction} #{club.ageRestriction}
            </p>
            <p>
              {club.currentParticipant}/{club.maxParticipant}
            </p>
          </div>
        </MeetCard>
      ))}
    </MeetContainer>
  );
};

const MeetContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-items: center;
  padding: 20px;
  margin: 20px;
`;

const MeetCard = styled.div`
  width: 478px;
  height: 167px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset,
    0px 4px 14.1px 0px rgba(0, 0, 0, 0.25);
  border: none;
  font-family: KoddiUDOnGothic-Regular;
  padding: 20px;
  margin: 20px 40px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 10px 5px 10px;
  }

  .profile-img {
    width: 40px;
    height: 40px;
  }
  .meet-name {
    font-size: 20px;
    font-weight: 400;
    color: #000;
    flex-grow: 1;
    margin-left: 10px;
  }
  .location {
    color: #e02525;
    font-size: 18.727px;
    font-weight: 400;
  }
  .culture-type {
    color: #e02525;
    font-size: 30px;
    font-weight: 700;
    margin: 0px 55px;
  }
  .meet-play-btn {
    width: 372px;
    height: 36px;
    background-color: #cb3939;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset,
      0px 4px 14.1px 0px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    color: #fff;
    font-size: 18px;
    font-family: KoddiUDOnGothic-Regular;
    font-weight: 700;
    border: none;
    margin: 10px 55px;
    cursor: pointer;
  }

  p {
    color: #7c7c7c;
    font-size: 18.727px;
    font-weight: 400;
    margin: 0px 10px 0px 55px;
  }

  .tag-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default CultureMeet;
