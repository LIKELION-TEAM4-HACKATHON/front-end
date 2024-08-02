import React from "react";
import styled from "styled-components";

const CultureMeet = ({ clubs }) => {
  return (
    <MeetContainer>
      {clubs.map((club) => (
        <MeetCard key={club.clubId}>
          <div className="chat">
            <div className="popular-chat-content">
              <div className="chat-title-box">
                <img
                  className="profile-img"
                  src={club.leaderProfileImageUrl}
                  alt="프로필 이미지"
                />
                <div className="chat-title">{club.cultureName} 모임</div>
              </div>
              <div className="region">{club.regionName}</div>
              <div className="category">{club.title}</div>
              <button
                className="due-date"
                onClick={() => {
                  /*여기에 모임링크*/
                }}
              >
                {new Date(club.meetingDate).toLocaleDateString()} 모임
              </button>
              <div className="hashtags-box">
                <div className="hashtags-left">
                  <span className="hashtag">#{club.genderRestriction}</span>
                  <span className="hashtag">#{club.ageRestriction}</span>
                </div>
                <div className="hashtags-right">
                  <span className="limit">
                    {club.currentParticipant}/{club.maxParticipant}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </MeetCard>
      ))}
    </MeetContainer>
  );
};

const MeetContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  justify-items: center;
  padding: 20px;
  margin: 20px;

  .chat {
    margin: 0 200px 84px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(478px, 1fr));
    gap: 40px;
  }
`;

const MeetCard = styled.div`
  width: 478px;
  height: 167px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset,
    0px 4px 14.1px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;
  position: relative;

  .popular-chat-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  .chat-title-box {
    display: flex;
    align-items: center;
    img {
      width: 31px;
      height: 31px;
      border-radius: 50%;
      margin-right: 15px;
    }
    .chat-title {
      color: #000;
      text-align: center;
      font-family: KoddiUDOnGothic-Regular;
      font-size: 18.727px;
    }
    margin-bottom: 10px;
  }

  .region {
    color: #e02525;
    font-family: KoddiUDOnGothic-Regular;
    margin-bottom: 4px;
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .category {
    color: #e02525;
    font-family: KoddiUDOnGothic-Bold;
    font-size: 24.023px;
    margin-bottom: 4px;
  }

  .due-date {
    width: auto;
    height: 36px;
    background-color: #cb3939;
    color: #fff;
    text-align: center;
    font-family: KoddiUDOnGothic-Regular;
    font-size: 15px;
    margin: 16px 0;
    justify-content: center;
    align-items: center;
    display: flex;
    border: none;
  }

  .hashtags-box {
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
  }

  .hashtags-left {
    display: flex;
    flex-wrap: wrap;
  }

  .hashtags-right {
    display: flex;
    align-items: center;
  }

  .hashtag {
    color: #000;
    font-family: KoddiUDOnGothic-Regular;
    font-size: 18.727px;
    margin-right: 10px;
  }

  .limit {
    color: #000;
    font-family: GmarketSans;
    font-weight: 300;
    font-style: normal;
    font-size: 18.727px;
  }
`;

export default CultureMeet;
