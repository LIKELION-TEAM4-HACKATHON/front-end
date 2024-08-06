import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ClubChat from "./MyClubChat";
import ClubInfo from "./MyClubInfo";

const MyClubDetailSection = styled.section`
  width: 100%;
  height: auto;

  .clubDetailTitle {
    color: #000;
    font-family: GmarketSans;
    font-size: 41.684px;
    font-weight: 700;
    margin: 78px 0 78px 200px;
  }

  .container {
    display: flex;
    align-items: flex-start;
  }

  .tabContainer {
    margin-left: 24px;
  }

  .tabBox {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    width: 161px;
    height: 196px;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25) inset;
    text-align: center;
    font-family: KoddiUDOnGothic-Bold;
    font-size: 21px;
    justify-content: center;
  }

  .tab {
    width: 125.297px;
    height: 42.251px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #7c7c7c;
    background-color: #fff;
    border-radius: 5px;
  }

  .active {
    background-color: #cb3939;
    color: #fff;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.7);
  }

  .toReview {
    margin-top: 25px;
    display: flex;
    width: 161px;
    height: 42px;
    padding-top: 4px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: linear-gradient(
      90deg,
      #e02525 0%,
      #7a1414 25%,
      #e02525 50%,
      #ff9494 75%,
      #e02525 100%
    );
    border: none;
    border-radius: 5px;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.7);
    color: #fff;
    font-family: GmarketSans;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
  }

  .clubDetailContainerWrapper {
    width: 100%;
    margin: 0 130px;
  }

  .clubDetailContainer {
    width: 850px;
    height: auto;
    margin-bottom: 130px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    border-radius: 13px;
    background: #fff;
    box-shadow: 0px 6.787px 23.923px 0px rgba(0, 0, 0, 0.25);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
`;

const MyClubDetail = () => {
  const { clubId } = useParams();
  const [club, setClub] = useState(null);
  const [activeTab, setActiveTab] = useState("chat");

  useEffect(() => {
    const fetchClubDetail = async () => {
      try {
        const response = await axios.get(
          `http://3.37.154.200:8080/api/clubs/${clubId}`
        );
        setClub(response.data);
      } catch (error) {
        console.error("Failed to fetch club details:", error);
      }
    };

    fetchClubDetail();
  }, [clubId]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (!club) return <div>Loading...</div>;

  return (
    <MyClubDetailSection>
      <div className="clubDetailTitle">{club.title}</div>
      <div className="container">
        <div className="tabContainer">
          <div className="tabBox">
            <div
              className={`tab ${activeTab === "chat" ? "active" : ""}`}
              onClick={() => handleTabClick("chat")}
            >
              모임 채팅
            </div>
            <div
              className={`tab ${activeTab === "info" ? "active" : ""}`}
              onClick={() => handleTabClick("info")}
            >
              모임 상세
            </div>
          </div>
          <StyledLink to="/reviewWrite">
            <div className="toReview">후기 쓰러가기</div>
          </StyledLink>
        </div>
        <div className="clubDetailContainerWrapper">
          <div className="clubDetailContainer">
            {activeTab === "chat" && <ClubChat />}
            {activeTab === "info" && <ClubInfo club={club} />}
          </div>
        </div>
      </div>
    </MyClubDetailSection>
  );
};

export default MyClubDetail;
