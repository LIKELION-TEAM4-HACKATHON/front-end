import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSection = styled.div`
  width: 100%;
  font-family: GmarketSans;

  .banner {
    margin-top: 58px;
    position: relative;
  }

  .slide-image {
    width: 100%;
    height: auto;
  }

  .custom-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    border-radius: 50%;
    z-index: 2;
    width: 45px;
    height: 45px;
    color: white;
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .arrow-left {
    left: 20px;
  }

  .arrow-right {
    right: 20px;
  }

  .popular1 {
    margin: 84px 0 0 152px;
    padding: 20.842px 50.948px 22px 0;
    font-size: 41.684px;
    font-weight: 700;
  }

  .doing {
    margin: 0 152px 84px 152px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(486.682px, 1fr));
    gap: 20px;
  }

  .review {
    height: 450px;
    background-color: #fceeec;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 152px;

    .popular2 {
      margin: 0 0 0 0;
      padding: 0 50.948px 22px 0;
      font-size: 41.684px;
      font-weight: 700;
    }
    .review-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .review-text-box {
      flex: 1;
    }

    .review-api-box {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .review-text1 {
      margin-bottom: 21px;
      font-family: GmarketSans;
      font-size: 28px;
      font-weight: 500;
      background: linear-gradient(
        90deg,
        #e02525 0%,
        #7a1414 25%,
        #e02525 50%,
        #ff9494 75%,
        #e02525 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
    }

    .review-text2 {
      margin-bottom: 33px;
      color: #363030;
      font-family: GmarketSans;
      font-size: 28px;
      font-weight: 700;
    }

    .review-text3 {
      color: #000;
      font-family: GmarketSans;
      font-size: 20px;
      font-weight: 500;
    }
  }

  .like-count {
    width: 65px;
    height: 24px;
    background-color: #e02525;
    color: white;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 17px;
    padding: 4px;
  }

  .chat-count {
    width: 65px;
    height: 24px;
    background-color: #fff;
    color: #e02525;
    border: 1px solid #e02525;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 17px;
    padding: 4px;
  }

  .chat {
    margin: 0 152px 84px 152px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(478px, 1fr));
    gap: 80px;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 417px;
`;

const PopularDoing = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 486.682px;
  height: 247.374px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  position: relative;

  img {
    width: 250px;
    max-width: 250px;
    height: 200px;
    max-height: 200px;
    border-radius: 20px;
  }

  .doing-text-content {
    flex: 1;
    margin-left: 20px;
  }

  .popular-doing-title {
    color: #e02525;
    font-family: KoddiUDOnGothic-Bold;
    font-size: 28px;
    margin-bottom: 8px;
  }

  .popular-doing-contents {
    color: #7c7c7c;
    font-family: KoddiUDOnGothic-Regular;
    font-size: 18.727px;
    margin-top: 10px;
  }

  .count {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
  }
`;

const PopularReview = styled.div`
  display: flex;
  justify-content: space-between;
  width: 580px;
  height: 270px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 40px;
  position: relative;

  .review-text-content {
    flex: 1;
    margin-right: 20px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    .writer {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 20px;
      }
      .nickname {
        color: #000;
        text-align: center;
        font-family: KoddiUDOnGothic-Regular;
        font-size: 22.831px;
      }
    }
  }

  .popular-review-title {
    color: #e02525;
    font-family: KoddiUDOnGothic-Bold;
    font-size: 35px;
    margin-top: 21px;
    margin-bottom: 8px;
  }

  .popular-review-contents {
    color: #7c7c7c;
    font-family: KoddiUDOnGothic-Regular;
    font-size: 18.727px;
    margin-top: 10px;
  }

  .review-image-box {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 270px;
      max-width: 270px;
      height: 220px;
      max-height: 220px;
      border-radius: 20px;
    }
    .date {
      font-family: KoddiUDOnGothic-Regular;
      margin-top: 15px;
      font-size: 23px;
      color: #7c7c7c;
    }
  }

  .count {
    position: absolute;
    bottom: 30px;
    left: 30px;
    display: flex;
    align-items: center;
  }
`;

const PopularChat = styled.div`
  width: 478px;
  height: 167px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
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
      margin-right: 15px;
    }
    .chat-title {
      color: #000;
      text-align: center;
      font-family: KoddiUDOnGothic-Regular;
      font-size: 18.727px;
    }
    margin-bottom: 4px;
  }

  .region {
    color: #e02525;
    font-family: KoddiUDOnGothic-Regular;
    margin-bottom: 4px;
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .category {
    color: #e02525;
    font-family: KoddiUDOnGothic-Bold;
    font-size: 24.023px;
    margin-bottom: 4px;
  }

  .due-date {
    width: auto;
    height: 36px;
    background-color: #cb3939;
    color: #fff;
    text-align: center;
    font-family: KoddiUDOnGothic-Regular;
    font-size: 15px;
    margin: 6px;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .hashtags-box {
    display: flex;
    flex-wrap: wrap;
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
    margin-top: 10px;
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
`;

const Arrow = ({ onClick, direction, src }) => (
  <div
    className={`custom-arrow ${
      direction === "left" ? "arrow-left" : "arrow-right"
    }`}
    onClick={onClick}
  >
    <img src={src} alt={`${direction} arrow`} />
  </div>
);

const Main = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="right" src="images/arrow-right.svg" />,
    prevArrow: <Arrow direction="left" src="images/arrow-left.svg" />,
  };

  return (
    <MainSection>
      <div className="banner">
        <Slider {...settings}>
          <div>
            <SlideImage src="images/tmp.png" alt="Slide Image" />
          </div>
          <div>
            <SlideImage src="images/tmp.png" alt="Slide Image" />
          </div>
          <div>
            <SlideImage src="images/tmp.png" alt="Slide Image" />
          </div>
        </Slider>
      </div>
      <div className="popular1">인기 뭐햐</div>
      <div className="doing">
        <PopularDoing>
          <img src="images/popular-doing.png" alt="Popular Doing" />
          <div className="doing-text-content">
            <div className="popular-doing-title">
              탕후루 만들기 {/*db 연동 예정*/}
            </div>
            <div className="popular-doing-contents">
              집에서 만드는 홈메이드 탕후루 도전하기!
            </div>
          </div>
          <div className="count">
            <div className="like-count">관심 {/*db 연동 예정*/}</div>
            <div className="chat-count">모임 {/*db 연동 예정*/}</div>
          </div>
        </PopularDoing>
        <PopularDoing>
          <img src="images/popular-doing.png" alt="Popular Doing" />
          <div className="doing-text-content">
            <div className="popular-doing-title">
              탕후루 만들기 {/*db 연동 예정*/}
            </div>
            <div className="popular-doing-contents">
              집에서 만드는 홈메이드 탕후루 도전하기!
            </div>
          </div>
          <div className="count">
            <div className="like-count">관심 {/*db 연동 예정*/}</div>
            <div className="chat-count">모임 {/*db 연동 예정*/}</div>
          </div>
        </PopularDoing>
        <PopularDoing>
          <img src="images/popular-doing.png" alt="Popular Doing" />
          <div className="doing-text-content">
            <div className="popular-doing-title">
              탕후루 만들기 {/*db 연동 예정*/}
            </div>
            <div className="popular-doing-contents">
              집에서 만드는 홈메이드 탕후루 도전하기!
            </div>
          </div>
          <div className="count">
            <div className="like-count">관심 {/*db 연동 예정*/}</div>
            <div className="chat-count">모임 {/*db 연동 예정*/}</div>
          </div>
        </PopularDoing>
        <PopularDoing>
          <img src="images/popular-doing.png" alt="Popular Doing" />
          <div className="doing-text-content">
            <div className="popular-doing-title">
              탕후루 만들기 {/*db 연동 예정*/}
            </div>
            <div className="popular-doing-contents">
              집에서 만드는 홈메이드 탕후루 도전하기!
            </div>
          </div>
          <div className="count">
            <div className="like-count">관심 {/*db 연동 예정*/}</div>
            <div className="chat-count">모임 {/*db 연동 예정*/}</div>
          </div>
        </PopularDoing>
      </div>
      <div className="review">
        <div className="review-text-box">
          <div className="popular2">인기 후기</div>
          <div className="review-text1">오늘 뭐햐?</div>
          <div className="review-text2">
            추천으로
            <br />
            놀아봐!
          </div>
          <div className="review-text3">유경험자의 추천!</div>
        </div>
        <div className="review-api-box">
          <PopularReview>
            <div className="review-text-content">
              <div className="writer">
                <img src="images/popular-doing.png" alt="Popular Review" />
                <div className="nickname">김도연 님</div>
              </div>
              <div className="popular-review-title">
                탕후루 도전기 {/*db 연동 예정*/}
              </div>
              <div className="popular-review-contents">
                탕후루를 만들어 봤어요.
              </div>
            </div>
            <div className="review-image-box">
              <img src="images/popular-doing.png" alt="Popular Review" />
              <div className="date">작성일: 2024.07.26</div>
            </div>
            <div className="count">
              <div className="like-count">좋아요 {/*db 연동 예정*/}</div>
              <div className="chat-count">댓글 {/*db 연동 예정*/}</div>
            </div>
          </PopularReview>
        </div>
      </div>
      <div className="popular1">인기 모임</div>
      <div className="chat">
        <PopularChat>
          <div className="popular-chat-content">
            <div className="chat-title-box">
              <img src="images/popular-doing.png" alt="Popular Review" />
              <div className="chat-title">멋쟁이사자처럼 모임</div>
            </div>
            <div className="region">노원</div>
            <div className="category">클라이밍</div>
            <div className="due-date">2024년 7월 31일 예정</div>
            <div className="hashtags-box">
              <span className="hashtag">#남자</span>
              <span className="hashtag">#5학년</span>
            </div>
            <div className="limit">현재인원/최대인원</div>
          </div>
        </PopularChat>
        <PopularChat>
          <div className="popular-chat-content">
            <div className="chat-title-box">
              <img src="images/popular-doing.png" alt="Popular Review" />
              <div className="chat-title">멋쟁이사자처럼 모임</div>
            </div>
            <div className="region">노원</div>
            <div className="category">클라이밍</div>
            <div className="due-date">2024년 7월 31일 예정</div>
            <div className="hashtags-box">
              <span className="hashtag">#남자</span>
              <span className="hashtag">#5학년</span>
            </div>
            <div className="limit">5/6</div>
          </div>
        </PopularChat>
      </div>
    </MainSection>
  );
};

export default Main;
