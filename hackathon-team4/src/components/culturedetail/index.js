import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../api";
import CultureInfo from "./CultureInfo";
import CultureMeet from "./CultureMeet";
import CultureReview from "./CultureReview";
import { useParams } from "react-router-dom";
import Make from "../makeClub/Make";

const CultureDetail = () => {
  const { cultureId } = useParams();
  const [activeTab, setActiveTab] = useState("info");
  const [cultureData, setCultureData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCultureDetail = async () => {
      try {
        const response = await api.get("/cultures/" + cultureId);
        console.log("Response:", response.data);
        setCultureData(response.data);
      } catch (error) {
        console.error("Failed to fetch culture detail", error);
      }
    };
    fetchCultureDetail();
  }, [cultureId]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCreateMeetClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateReviewClick = () => {};

  if (!cultureData) {
    return <div>Loading...</div>;
  }

  return (
    <CultureDetailSection>
      <div className="container">
        <div className="culture-top-container">
          <div className="culture-top-left">
            <div className="culture-title">{cultureData.name}</div>
            <img
              className="culture-image"
              src={cultureData.cultureImageUrl}
              alt="문화 이미지"
            />
          </div>

          <div className="culture-top-right">
            <div className="location">{cultureData.regionName}</div>
            <div className="challenge">{cultureData.summary}</div>
            <div className="member">
              추천인원: {cultureData.recommendedMember}
            </div>
            <span className="likes-num">
              관심 수 {cultureData.interestCount}
            </span>
            <button className="likes-btn">관심</button>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="tabContainer">
          <div className="tabBox">
            <div
              className={`tab ${activeTab === "info" ? "active" : ""}`}
              onClick={() => handleTabClick("info")}
            >
              소개
            </div>
            <div
              className={`tab ${activeTab === "meet" ? "active" : ""}`}
              onClick={() => handleTabClick("meet")}
            >
              모임 찾기
            </div>
            <div
              className={`tab ${activeTab === "review" ? "active" : ""}`}
              onClick={() => handleTabClick("review")}
            >
              후기
            </div>
          </div>
          {activeTab === "meet" && (
            <CreateButton onClick={handleCreateMeetClick}>
              모임 만들기
            </CreateButton>
          )}
          {activeTab === "review" && (
            <CreateButton onClick={handleCreateReviewClick}>
              후기 작성
            </CreateButton>
          )}
        </div>

        <div className="culture-detail-bottom">
          {activeTab === "info" && <CultureInfo cultureData={cultureData} />}
          {activeTab === "meet" && <CultureMeet clubs={cultureData.clubs} />}
          {activeTab === "review" && (
            <CultureReview reviews={cultureData.reviews} />
          )}
        </div>
      </div>
      {isModalOpen && (
        <Make
          showMakeModal={isModalOpen}
          closeMakeModal={handleCloseModal}
          cultureId={cultureId}
        />
      )}
    </CultureDetailSection>
  );
};

const CultureDetailSection = styled.section`
  width: 100%;
  height: auto;
  padding: 20px;

  .container {
    margin: 0;
    background-color: #fff;
  }

  .culture-top-container {
    width: 1000px;
    height: 421.681px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 80px auto;
    border-radius: 25.218px;
    background: #fff;
    box-shadow: 2.522px 5.044px 17.905px 0px rgba(0, 0, 0, 0.14);
    font-family: KoddiUDOnGothic-Regular;
  }
  .culture-top-left {
    width: 420px;
  }
  .culture-top-right {
    padding-right: 30px;
    text-align: right;
    width: 500px;
  }
  .culture-title {
    font-size: 40px;
    font-weight: bold;
    color: #e02525;
    margin: 20px 40px;
  }
  .culture-image {
    width: 400.646px;
    height: 288.683px;
    border-radius: 15.519px;
    margin: 7px 20px;
  }
  .location {
    font-size: 20.407px;
    color: #7c7c7c;
    font-weight: 400;
  }
  .challenge {
    margin-top: 20px;
    color: #7c7c7c;
    font-size: 31.407px;
    font-weight: 400;
  }
  .member {
    margin-top: 70px;
    margin-bottom: 70px;
    color: #000;
    text-align: right;
    font-size: 31.407px;
    font-weight: 400;
  }
  .likes-num {
    padding: 7px 16px;
    background-color: #e74c3c;
    margin-right: 20px;
    color: #fff;
    border-radius: 10px;
    font-size: 27.711px;
  }
  .likes-btn {
    padding: 7px 20px;
    border: 2px solid #e74c3c;
    border-radius: 10px;
    background-color: #fff;
    color: #e74c3c;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    font-size: 27.711px;

    &:hover {
      background-color: #e74c3c;
      color: #fff;
    }
  }
  .container2 {
    background: #fceeec;
    margin: 0;
  }
  .tabContainer {
    height: auto;
    border-bottom: 3px solid #df2525;
    margin-bottom: 20px;
    position: relative;
  }

  .tabBox {
    display: flex;
    justify-content: space-around;
    font-family: GmarketSans;
    font-size: 41.684px;
  }
  .tab {
    padding: 10px 20px;
    cursor: pointer;
  }
  .tab.active {
    font-weight: bold;
  }
  .culture-detail-bottom {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
`;
const CreateButton = styled.button`
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(130%);
  padding: 10px 20px;
  border: none;
  color: #fff;
  cursor: pointer;

  width: 164px;
  height: 49px;
  border-radius: 6.529px;
  background: linear-gradient(94deg, #e02525 -14.69%, #7a1414 99.86%);
  font-family: GmarketSans;
  font-size: 22.57px;
`;
export default CultureDetail;
