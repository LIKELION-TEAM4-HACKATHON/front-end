import styled from "styled-components";

const MyClubInfoSection = styled.section`
  width: 100%;
  height: auto;
  margin: 47px 72px;
  font-family: KoddiUDOnGothic-Regular;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .bottomBox {
    width: 100%;
    height: auto;
    padding: 54px;
    background: #fceeec;
  }
`;

const InfoCard = styled.section`
  width: 881px;
  height: 361px;
  border-radius: 25.218px;
  background: #fff;
  box-shadow: 2.522px 5.044px 17.905px 0px rgba(0, 0, 0, 0.14);

  .culture-title {
    color: #e02525;
    font-family: KoddiUDOnGothic-Bold;
  }

  .club-title {
    color: #7c7c7c;
    font-family: KoddiUDOnGothic-Regular;
    font-size: 31.407px;
  }

  .club-img {
    width: 355.646px;
    height: 288.683px;
    border-radius: 15.519px;
  }

  .participants {
    color: #000;
    font-family: KoddiUDOnGothic-Regular;
    font-size: 26.031px;
  }

  .hashtags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    color: #7c7c7c;
    font-family: KoddiUDOnGothic-Regular;
    font-size: 26.031px;
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
  }

  .joinBtn {
    width: 881px;
    height: 67px;
    background-color: #fff;
    color: #cb3939;
    text-align: center;
    font-family: KoddiUDOnGothic-Bold;
    font-size: 32px;
    padding-top: 11px;
    padding-bottom: 11px;
  }
`;

const LeaderCard = styled.section`
  width: 811px;
  height: 242px;
  border-radius: 13px;
  background: #fff;
  box-shadow: 0px 6.787px 23.923px 0px rgba(0, 0, 0, 0.25);
`;

const ContentCard = styled.section`
  .content-title {
    color: #000;
    text-align: center;
    font-family: KoddiUDOnGothic-Bold;
    font-size: 43.621px;
  }
  .content {
    width: 959px;
    height: auto;
    padding: 35px 105px;
    color: #000;
    font-family: KoddiUDOnGothic-Regular;
    font-size: 27.65px;
  }
`;

const MyClubInfo = ({ club }) => {
  return (
    <MyClubInfoSection>
      <InfoCard>
        <div className="culture-title">{club.cultureName}</div>
        <div className="club-title">{club.title}</div>
        <img
          className="club-img"
          src={club.cultureImageUrl}
          alt="요즘 머햐 사진"
        />
        <div className="participants">
          {club.currentParticipant}/{club.maxParticipant}
        </div>
        <div className="hashtags">
          <div className="hashtag">#{club.genderRestriction}</div>
          <div className="hashtag">#{club.ageRestriction}</div>
        </div>
        <div className="due-date">
          {new Date(club.meetingDate).toLocaleDateString()} 모임
        </div>
        <div className="joinBtn">신청하기</div>
      </InfoCard>
      <div className="bottomBox">
        <LeaderCard>
          <img
            className="profile-img"
            src={club.leader[0].profileImageUrl}
            alt="프로필 이미지"
          />
          <div className="leader-name">리더: {club.leader[0].username}</div>
          <div className="leader-introductions">
            소개:{" "}
            {club.leader[0].selfIntroductions
              .map((intro) => intro.name)
              .join(", ")}
          </div>
        </LeaderCard>
        <ContentCard>
          <div className="content-title">모임 설명</div>
          <div className="content">내용: {club.content}</div>
        </ContentCard>
      </div>
    </MyClubInfoSection>
  );
};

export default MyClubInfo;
