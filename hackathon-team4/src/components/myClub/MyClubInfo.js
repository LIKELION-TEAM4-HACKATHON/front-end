import styled from "styled-components";

const MyClubInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoCard = styled.section`
  padding: 30px;
  width: 881px;
  height: 361px;
  border-radius: 25.218px;
  background: #fff;
  box-shadow: 2.522px 5.044px 17.905px 0px rgba(0, 0, 0, 0.14);
  margin-left: 40px;

  .culture-title {
    color: #e02525;
    font-family: KoddiUDOnGothic-Bold;
  }

  .club-title {
    color: #7c7c7c;
    font-family: KoddiUDOnGothic-Regular;
    font-size: 31.407px;
  }

  .participants {
    color: #000;
    font-family: KoddiUDOnGothic-Regular;
    font-size: 26.031px;
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
`;

const MyClubInfo = ({ club }) => {
  if (!club) {
    return null;
  }

  return (
    <MyClubInfoSection>
      <InfoCard>
        <div className="culture-title">{club.cultureName}</div>
        <div className="club-title">{club.title}</div>
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
      </InfoCard>
    </MyClubInfoSection>
  );
};

export default MyClubInfo;
