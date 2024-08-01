import React, { Component } from "react";
import styled from "styled-components";
import CategoryMenu from "./CategoryMenu";
import CultureList from "./CultureList";

class CulturePage extends Component {
  constructor() {
    super();
    this.state = {
      cultures: [
        {
          cultureId: 1,
          name: "인생네컷 찍기",
          summary: "추억을 남기는 MZ의 문화",
          cultureImageUrl: "https://via.placeholder.com/150",
          cultureCategoryName: "야외활동",
          regionName: "동작 관악 금천",
          interestCount: 3,
          clubCount: 6,
        },
        {
          cultureId: 2,
          name: "퍼스널컬러",
          summary: "나의 퍼스널 컬러를 알아보아요",
          cultureImageUrl: "https://via.placeholder.com/150",
          cultureCategoryName: "미술과 예술",
          regionName: "동작 관악 금천",
          interestCount: 3,
          clubCount: 6,
        },
        {
          cultureId: 3,
          name: "퍼스널컬러",
          summary: "나의 퍼스널 컬러를 알아보아요",
          cultureImageUrl: "https://via.placeholder.com/150",
          cultureCategoryName: "미술과 예술",
          regionName: "동작 관악 금천",
          interestCount: 3,
          clubCount: 6,
        },
        {
          cultureId: 4,
          name: "퍼스널컬러",
          summary: "나의 퍼스널 컬러를 알아보아요",
          cultureImageUrl: "https://via.placeholder.com/150",
          cultureCategoryName: "미술과 예술",
          regionName: "동작 관악 금천",
          interestCount: 3,
          clubCount: 6,
        },
        {
          cultureId: 5,
          name: "퍼스널컬러",
          summary: "나의 퍼스널 컬러를 알아보아요",
          cultureImageUrl: "https://via.placeholder.com/150",
          cultureCategoryName: "미술과 예술",
          regionName: "동작 관악 금천",
          interestCount: 3,
          clubCount: 6,
        },
      ],
      category: "",
    };
  }

  handleCategoryChange = (category) => {
    this.setState({ category });
    // Fetch or filter data based on the selected category
  };

  render() {
    const { cultures } = this.state;

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
