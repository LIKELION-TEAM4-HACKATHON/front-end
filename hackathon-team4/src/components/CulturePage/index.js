import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import CategoryMenu from "./CategoryMenu";
import CultureList from "./CultureList";

const api = axios.create({
  baseURL: "/api",
});

const CulturePage = () => {
  const [allCultures, setAllCultures] = useState([]);
  const [cultures, setCultures] = useState([]);
  const [interestCultures, setInterestCultures] = useState([]);
  const [category, setCategory] = useState("전체");
  const [pageNum, setPageNum] = useState(1);
  const [showInterest, setShowInterest] = useState(false);

  useEffect(() => {
    fetchCultures();
  }, [category, pageNum]);

  useEffect(() => {
    fetchMyInterestCultures();
  }, []);

  const fetchCultures = async () => {
    try {
      const params = {
        page: pageNum - 1,
      };
      if (category !== "전체") {
        params.category = category;
      }

      const response = await api.get("/api/cultures", { params });
      setAllCultures(response.data.content);
      setCultures(response.data.content);
    } catch (error) {
      console.error("Failed to fetch cultures", error);
    }
  };

  // 나의 관심 문화
  const fetchMyInterestCultures = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await api.get("/api/cultures/interest", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          category: category !== "전체" ? category : undefined,
          page: pageNum - 1,
        },
      });
      setInterestCultures(response.data.content);
    } catch (error) {
      console.error("Failed to fetch interest cultures", error);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPageNum(1);
  };

  const handlePageChange = (direction) => {
    const newPageNum = pageNum + direction;
    if (newPageNum > 0) {
      setPageNum(newPageNum);
    }
  };

  const toggleShowInterest = () => {
    setShowInterest(!showInterest);
  };

  return (
    <CulturePageContainer>
      <div className="culture-top">
        <div className="culture-top-title">요즘 뭐해?</div>
        <div className="culture-top-subtitle">
          항상 새롭고 신기한 추억을 쌓을 수 있는 문화 컨텐츠를 볼 수 있습니다.
        </div>
      </div>
      <div className="my-interest-culture">
        <button onClick={toggleShowInterest}>
          {showInterest ? "전체 문화 보기" : "나의 관심 보기"}
        </button>
      </div>
      {showInterest ? (
        <InterestSection>
          <CultureList cultures={interestCultures} />{" "}
          {/* 나의 관심 문화 리스트 표시 */}
        </InterestSection>
      ) : (
        <CategorySection>
          <div className="culture-category-box">
            <CategoryMenu
              onCategoryChange={handleCategoryChange}
              selectedCategory={category}
            />
          </div>
          <div className="culture-list-box">
            <CultureList cultures={cultures} />
          </div>
        </CategorySection>
      )}
      <div className="page">
        <img
          src="images/back-button.png"
          alt="back-button"
          onClick={() => handlePageChange(-1)}
        />
        <div className="pageNumBox">{pageNum}</div>
        <img
          src="images/next-button.png"
          alt="next-button"
          onClick={() => handlePageChange(1)}
        />
      </div>
    </CulturePageContainer>
  );
};

const CulturePageContainer = styled.div`
  background-color: #f8f9fa;

  .culture-top {
    background: #fceeec;
    font-family: "GmarketSans";
    padding: 53px 216px;
  }
  .culture-top-title {
    color: #000;
    font-size: 41.684px;
    margin-bottom: 20px;
  }
  .culture-top-subtitle {
    color: #000;
    font-family: "KoddiUDOnGothic-Regular";
    font-size: 22.929px;
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
    background: #f8f9fa;
    color: #7c7c7c;
    text-align: center;
    font-family: GmarketSans;
    font-size: 38px;
    font-weight: 500;
    line-height: 1.4;
  }

  .my-interest-culture {
    font-size: 24px;
    font-weight: bold;
    margin: 20px 20%;
    display: flex;
    justify-content: flex-end;

    button {
      padding: 10px 20px;
      background-color: #f8f9fa;
      border: none;
      cursor: pointer;
      color: #df2525;
      font-size: 22.929px;
    }
  }
`;

const CategorySection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 30px;

  .culture-category-box {
    width: 170px;
    height: 430px;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25) inset;
  }
  .culture-list-box {
    padding: 0px 100px;
  }
`;

const InterestSection = styled.div`
  margin: 40px 30px;

  .interest-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export default CulturePage;
