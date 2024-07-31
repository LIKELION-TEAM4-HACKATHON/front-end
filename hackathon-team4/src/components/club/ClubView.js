import styled from "styled-components";

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
  }

  .chat {
    margin: 0 200px 84px 200px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(478px, 1fr));
    gap: 40px;
  }

  .page {
    padding-bottom: 36px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 34.59px;
      height: 34.59px;
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

const PopularChat = styled.div`
  width: calc(100% / 2) - 20px;
  height: 167px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset,
    0px 4px 14.1px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;
  margin: 20px 0;
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

const ClubView = () => {
  return (
    <ClubViewSection>
      <div className="sort-container">
        <div className="sort">• 만남일 빠른 순</div>
        <div className="sort">• 신규 등록 순</div>
      </div>
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
      <div className="page">
        <img src="images/back-button.png" alt="back-button" />
        <div className="pageNumBox">1</div>
        <img src="images/next-button.png" alt="next-button" />
      </div>
    </ClubViewSection>
  );
};

export default ClubView;
