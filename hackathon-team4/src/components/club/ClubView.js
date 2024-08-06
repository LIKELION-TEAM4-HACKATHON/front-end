import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

const ClubViewSection = styled.section`
  width: 100%;
  height: auto;
  padding-bottom: 70px;
  background: #fceeec;
  .sort-container {
    display: flex;
    margin-left: 200px;
    margin-bottom: 20px;
    padding-top: 32px;
  }
  .sort {
    color: #df2525;
    font-family: GmarketSans;
    font-weight: 500;
    margin-right: 30px;
    cursor: pointer;
  }
  .page {
    padding-bottom: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 34.59px;
      height: 34.59px;
      cursor: pointer;
    }
  }
  .pageNumBox {
    width: 47px;
    height: 47px;
    margin: 0 36px;
    border-radius: 4px;
    background: #fff;
    color: #7c7c7c;
    text-align: center;
    font-family: GmarketSans;
    font-size: 38px;
    font-weight: 500;
    line-height: 1.4;
  }
`;

const MeetContainer = styled.div`
  margin: 0 152px 84px 152px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(478px, 1fr));
  gap: 40px;
  padding: 20px;
`;

const MeetCard = styled.div`
  width: 473px;
  height: 177px;
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
      margin-right: 10px;
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
    top: 25px;
    text-align: right;
  }

  .category {
    color: #e02525;
    font-family: KoddiUDOnGothic-Bold;
    font-size: 24.023px;
    margin-bottom: 4px;
    margin-top: 10px;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ClubView = ({ clubs, page, totalPages, onPageChange }) => {
  const [sort, setSort] = useState("fast");
  const [sortedClubs, setSortedClubs] = useState(clubs);

  useEffect(() => {
    const sorted = [...clubs].sort((a, b) => {
      if (sort === "fast") {
        return new Date(a.meetingDate) - new Date(b.meetingDate);
      } else {
        return new Date(b.registrationDate) - new Date(a.registrationDate);
      }
    });
    setSortedClubs(sorted);
  }, [sort, clubs]);

  return (
    <ClubViewSection>
      <div className="sort-container">
        <div className="sort" onClick={() => setSort("fast")}>
          • 만남일 빠른 순
        </div>
        <div className="sort" onClick={() => setSort("new")}>
          • 신규 등록 순
        </div>
      </div>
      <MeetContainer>
        {sortedClubs.map((club) => (
          <StyledLink key={club.clubId} to={`/clubs/${club.clubId}`}>
            <MeetCard>
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
                  <div className="region">
                    {club.regionName.split(" ").slice(0, 2).join(" ")}
                    {club.regionName.split(" ").length > 2 && (
                      <>
                        <br />
                        {club.regionName.split(" ").slice(2).join(" ")}
                      </>
                    )}
                  </div>
                  <div className="category">{club.title}</div>
                  <div className="due-date">
                    {new Date(club.meetingDate).toLocaleDateString()} 모임
                  </div>
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
          </StyledLink>
        ))}
      </MeetContainer>
      <div className="page">
        <img
          src="images/back-button.png"
          alt="back-button"
          onClick={() => onPageChange(page - 1)}
          style={{ cursor: page === 1 ? "not-allowed" : "pointer" }}
        />
        <div className="pageNumBox">{page}</div>
        <img
          src="images/next-button.png"
          alt="next-button"
          onClick={() => onPageChange(page + 1)}
          style={{ cursor: page === totalPages ? "not-allowed" : "pointer" }}
        />
      </div>
    </ClubViewSection>
  );
};

export default ClubView;
