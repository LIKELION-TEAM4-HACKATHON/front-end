import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import CultureInfo from "./CultureInfo";
import CultureMeet from "./CultureMeet";
import CultureReview from "./CultureReview";
import { useParams, Link } from "react-router-dom";
import Make from "../makeClub/Make";

const CultureDetail = () => {
  const { cultureId } = useParams();
  const [activeTab, setActiveTab] = useState("info");
  const [cultureData, setCultureData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [summary, setSummary] = useState("");
  const [isInterested, setIsInterested] = useState(false);

  useEffect(() => {
    const fetchCultureDetail = async () => {
      try {
        const response = await axios.get(
          "http://3.37.154.200:8080/api/cultures/" + cultureId
        );
        console.log("Response:", response.data);
        setCultureData(response.data);
      } catch (error) {
        console.error("Failed to fetch culture detail", error);
      }
    };
    fetchCultureDetail();
  }, [cultureId]);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get(
          "http://3.37.154.200:8080/api/cultures"
        );
        const culture = response.data.content.find(
          (culture) => culture.cultureId === parseInt(cultureId)
        );
        if (culture) {
          setSummary(culture.summary);
        }
      } catch (error) {
        console.error("Failed to fetch summary", error);
      }
    };
    fetchSummary();
  }, [cultureId]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsUserLoggedIn(!!token);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCreateMeetClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInterestToggle = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.put(
        `/api/cultures/${cultureId}/interests`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.message === "관심 문화 추가 성공") {
        setCultureData((prevData) => ({
          ...prevData,
          interestCount: prevData.interestCount + 1,
        }));
        setIsInterested(true);
      } else if (response.data.message === "관심 문화 삭제 성공") {
        setCultureData((prevData) => ({
          ...prevData,
          interestCount: prevData.interestCount - 1,
        }));
        setIsInterested(false);
      }
    } catch (error) {
      console.error(
        "Failed to toggle interest",
        error.response || error.message
      );
    }
  };
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
            <div className="challenge">{summary}</div>
            <div className="member">
              추천인원: {cultureData.recommendedMember}
            </div>
            <span className="likes-num">
              관심 수 {cultureData.interestCount}
            </span>
            <button className="likes-btn" onClick={handleInterestToggle}>
              {isInterested ? "관심 취소" : "관심"}
            </button>
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
          {activeTab === "meet" && isUserLoggedIn && (
            <CreateButton onClick={handleCreateMeetClick}>
              모임 만들기
            </CreateButton>
          )}
          {activeTab === "review" && isUserLoggedIn && (
            <Link to={`/reviewWrite/${cultureId}`}>
              <CreateButton>후기 작성</CreateButton>
            </Link>
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

  .container {
    margin: 0;
    background-color: #fff;
  }

  .culture-top-container {
    width: 1100px;
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
    width: 440px;
  }

  .culture-top-right {
    padding-right: 30px;
    text-align: right;
    width: 560px;
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
    margin-top: 37px;
    margin-bottom: 70px;
    color: #000;
    text-align: right;
    font-size: 31.407px;
    font-weight: 400;
  }

  .likes-num {
    font-size: 27.711px;
    color: #fff;
    background-color: #df2525;
    border-radius: 5px;
    padding: 5px 10px;
    margin-left: 10px;
    border: 1px solid #e02525;
  }

  .likes-btn {
    font-size: 27.711px;
    color: #e02525;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
    margin-left: 10px;
    border: 1.5px solid #e02525;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #e02525;
      color: #fff;
    }
  }

  .container2 {
    background: #fceeec;
    margin: 0;
  }

  .tabContainer {
    height: 80px;
    padding-top: 6px;
    border-bottom: 3px solid #df2525;
    position: relative;
  }

  .tabBox {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
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
    padding: 57px 0;
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
  padding-bottom: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  width: 164px;
  height: 49px;
  border-radius: 6.529px;
  background: linear-gradient(94deg, #e02525 -14.69%, #7a1414 99.86%);
  font-family: GmarketSans;
  font-size: 22.57px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default CultureDetail;
