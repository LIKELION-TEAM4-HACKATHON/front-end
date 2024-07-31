import React, { useState } from "react";
import styled from "styled-components";
import CultureInfo from "./CultureInfo";
import CultureMeet from "./CultureMeet";
import CultureReview from "./CultureReview";

const CultureDetail = () => {
  const [activeTab, setActiveTab] = useState("info");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleCreateMeetClick = () => {
    // 모임 만들기 URL
  };
  const handleCreateReviewClick = () => {
    // 리뷰 작성 URL
  };

  return (
    <CultureDetailSection>
      <div className="container">
        <div className="culture-top-container">
          <div className="culture-top-left">
            <div className="culture-title">{"탕후루 만들기"}</div>
            <img
              className="culture-image"
              src="images/popular-doing.png"
              alt="문화 이미지"
            />
            <img />
          </div>

          <div className="culture-top-right">
            <div className="location">{"동작 마포 잠실"}</div>
            <div className="challenge">{"홈메이드 탕후루 도전하기!"}</div>
            <div className="member">추천인원: {"4~5"}명</div>
            <span className="likes-num">관심 수 {"10"}</span>
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
          {activeTab === "info" && <CultureInfo />}
          {activeTab === "meet" && <CultureMeet />}
          {activeTab === "review" && <CultureReview />}
        </div>
      </div>
    </CultureDetailSection>
  );
};

//스타일
const CultureDetailSection = styled.section`
  width: 100%;
  height: auto;
  padding: 20px;

  //문화 상세 페이지 top부분
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