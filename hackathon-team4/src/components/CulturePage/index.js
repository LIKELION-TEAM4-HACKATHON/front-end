import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import CategoryMenu from "./CategoryMenu";
import CultureList from "./CultureList";
const api = axios.create({
  baseURL: "/api",
});

class CulturePage extends Component {
  constructor() {
    super();
    this.state = {
      cultures: [],
      category: "",
      pageNum: 1,
    };
  }

  componentDidMount() {
    this.fetchCultures();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.category !== this.state.category ||
      prevState.pageNum !== this.state.pageNum
    ) {
      this.fetchCultures();
    }
  }

  fetchCultures = async () => {
    const { category, pageNum } = this.state;
    try {
      const response = await api.get("/cultures", {
        params: {
          category,
          page: pageNum - 1,
        },
      });
      console.log(response.data.content);
      this.setState({ cultures: response.data.content });
    } catch (error) {
      console.error("Failed to fetch cultures", error);
    }
  };

  handleCategoryChange = (category) => {
    this.setState({ category });
  };

  handlePageChange = (direction) => {
    this.setState((prevState) => ({
      pageNum: prevState.pageNum + direction,
    }));
  };

  render() {
    const { cultures, pageNum } = this.state;

    return (
      <CulturePageContainer>
        <div className="culture-top">
          <div className="culture-top-title">요즘 뭐햐</div>
          <div className="culture-top-subtitle">
            항상 새롭고 신기한 추억을 쌓을 수 있는 문화 컨텐츠를 볼 수 있습니다.
          </div>
        </div>
        <CategorySection>
          <div className="culture-category-box">
            <CategoryMenu onCategoryChange={this.handleCategoryChange} />
          </div>
          <div className="culture-list-box">
            <CultureList cultures={cultures} />
          </div>
        </CategorySection>
        <div className="page">
          <img
            src="images/back-button.png"
            alt="back-button"
            onClick={() => this.handlePageChange(-1)}
          />
          <div className="pageNumBox">{pageNum}</div>
          <img
            src="images/next-button.png"
            alt="next-button"
            onClick={() => this.handlePageChange(1)}
          />
        </div>
      </CulturePageContainer>
    );
  }
}

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
    background: #fff;
    color: #7c7c7c;
    text-align: center;
    font-family: GmarketSans;
    font-size: 38px;
    font-weight: 500;
    line-height: 1.4;
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

export default CulturePage;
