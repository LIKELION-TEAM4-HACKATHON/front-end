import React from "react";
import styled from "styled-components";
import axios from "axios";

const ClubInfoSection = styled.section`
  width: 100%;
  height: auto;
  font-family: KoddiUDOnGothic-Regular;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 107px;

  .joinBtn {
    width: 881px;
    height: auto;
    flex-shrink: 0;
    color: #fff;
    background-color: #cb3939;
    text-align: center;
    font-family: KoddiUDOnGothic-Bold;
    font-size: 32px;
    padding-top: 11px;
    padding-bottom: 11px;
    cursor: pointer;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 2.522px 5.044px 10px 0px inset rgba(0, 0, 0, 0.44);
  }
  .bottomBox {
    width: 100%;
    height: auto;
    padding: 54px;
    background: #fceeec;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const InfoCard = styled.section`
  width: 100%;
  max-width: 881px;
  height: auto;
  border-radius: 25.218px;
  background: #fff;
  box-shadow: 2.522px 5.044px 17.905px 0px rgba(0, 0, 0, 0.14);
  margin: 0 auto;
  padding: 20px;
  display: flex;
  box-sizing: border-box;

  .club-img {
    width: 355.646px;
    height: 288.683px;
    flex-shrink: 0;
    border-radius: 15.519px;
    object-fit: cover;
  }

  .info-content {
    width: 50%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .culture-title,
  .club-title,
  .participants,
  .hashtags,
  .due-date {
    margin: 10px 0;
  }

  .culture-title {
    color: #e02525;
    font-family: KoddiUDOnGothic-Bold;
    font-size: 24px;
  }

  .club-title {
    color: #7c7c7c;
    font-family: KoddiUDOnGothic-Regular;
    font-size: 20px;
    margin-bottom: 30px;
  }

  .participants {
    color: #000;
    font-family: KoddiUDOnGothic-Regular;
    font-size: 18px;
  }

  .hashtags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    color: #7c7c7c;
    font-family: KoddiUDOnGothic-Regular;
    font-size: 18px;
  }

  .hashtag {
    background-color: #eee;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 14px;
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
    border-radius: 5px;
    box-shadow: 2.522px 5.044px 5px 0px inset rgba(0, 0, 0, 0.24);
  }
`;

const LeaderCard = styled.section`
  width: 811px;
  height: 242px;
  border-radius: 13px;
  background: #fff;
  box-shadow: 0px 6.787px 23.923px 0px rgba(0, 0, 0, 0.25);
  margin: 20px auto; /* 가운데 정렬 및 상하 여백 추가 */
  padding: 20px; /* 패딩 추가 */

  .profile-img {
    width: 157px;
    height: 157px;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
  }

  .leader-name {
    text-align: center;
    margin: 10px 0;
    color: #000;
    font-family: KoddiUDOnGothic-Bold;
    font-size: 29.353px;
  }

  .leader-introductions {
    text-align: center;
    margin: 10px 0;
    color: #7c7c7c;
    font-family: KoddiUDOnGothic-Bold;
    font-size: 25.353px;
  }
`;

const ContentCard = styled.section`
  width: 959px;
  height: auto;
  padding: 35px 105px;
  color: #000;
  font-family: KoddiUDOnGothic-Regular;
  font-size: 27.65px;
  margin: 40px 0;
  background-color: #fff;
  border-radius: 13px;
  box-sizing: border-box;

  .content-title {
    color: #000;
    font-family: KoddiUDOnGothic-Bold;
    font-size: 43.621px;
    margin-bottom: 40px;
  }

  .content {
    width: auto;
  }
`;

const ClubInfo = ({ club }) => {
  const handleJoinClick = async () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      alert("로그인이 필요합니다.");
      return;
    }

    try {
      const response = await axios.post(
        `http://3.37.154.200:8080/api/clubs/${club.clubId}/join`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert(response.data.message);
    } catch (error) {
      alert(
        `Error: ${
          error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : "An error occurred while joining the club."
        }`
      );
    }
  };

  if (!club) {
    return <div>Loading...</div>;
  }

  return (
    <ClubInfoSection>
      <InfoCard>
        <img
          className="club-img"
          src={club.cultureImageUrl}
          alt="요즘 머햐 사진"
        />
        <div className="info-content">
          <div className="culture-title">{club.cultureName}</div>
          <div className="club-title">{club.title}</div>
          <div className="participants">
            인원:&emsp;
            {club.currentParticipant}/{club.maxParticipant}
          </div>
          <div className="hashtags">
            <div className="hashtag">#{club.genderRestriction}</div>
            <div className="hashtag">#{club.ageRestriction}</div>
          </div>
          <div className="due-date">
            {new Date(club.meetingDate).toLocaleDateString()} 모임
          </div>
        </div>
      </InfoCard>
      <div className="joinBtn" onClick={handleJoinClick}>
        신청하기
      </div>
      <div className="bottomBox">
        <LeaderCard>
          <img
            className="profile-img"
            src={club.leader[0].profileImageUrl}
            alt="프로필 이미지"
          />
          <div className="leader-name">모임장: {club.leader[0].username}</div>
          <div className="leader-introductions">
            관심사:{" "}
            {club.leader[0].selfIntroductions
              .map((intro) => intro.name)
              .join(", ")}
          </div>
        </LeaderCard>
        <ContentCard>
          <div className="content-title">모임 설명</div>
          <div className="content">{club.content}</div>
        </ContentCard>
      </div>
    </ClubInfoSection>
  );
};

export default ClubInfo;
