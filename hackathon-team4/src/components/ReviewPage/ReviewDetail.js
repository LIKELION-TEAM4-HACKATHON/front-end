import React, { useState } from "react";
import styled from "styled-components";

const ReviewPage = () => {
  return (
    <ReviewDetail>
      <div className="review-detail-feed-box">
        <div className="review-detail-item-box">
          <div className="review-detail-item-top">
            <div className="review-detail-title">{"탕후루 만들기 후기"}</div>
            <div className="review-detail-type-nickname">
              <div className="review-detail-type">{"탕후루 만들기"}</div>
              <div className="review-detail-nickname">{"박신우"} 님</div>
            </div>
          </div>
          <div className="review-detail-item-middle">
            <img
              className="review-detail-item-image"
              src="images/popular-doing.png"
              alt={"탕후루리뷰사진"}
            />
          </div>
          <div className="review-detail-item-bottom">
            <div className="review-detail-date">작성일 {"2024.07.02"}</div>
            <div className="review-detail-likes-comments">
              <div className="review-detail-likes">좋아요 {"10"}</div>
              <div className="review-detail-comments">댓글 {"3"}</div>
            </div>
          </div>
        </div>
        <div className="review-detail-comment-box">
          <div className="review-comment-top">
            <button className="review-comment-like-btn">좋아요 버튼</button>
          </div>
          <div className="review-comment-middle">
            <div className="review-comment-middle-box">
              <img
                className="review-comment-profile-image"
                src="images/Ellipse 2.png"
                alt="프로필 이미지"
              ></img>
              <div className="review-comment-profile-nickname">박신우 님</div>
            </div>
            <div className="review-comment">댓글 내용</div>

            {/* 추가적인 댓글 목록을 여기에 추가 */}
          </div>
          <div className="review-comment-middle">
            <div className="review-comment-middle-box">
              <img
                className="review-comment-profile-image"
                src="images/Ellipse 2.png"
                alt="프로필 이미지"
              ></img>
              <div className="review-comment-profile-nickname">박신우 님</div>
            </div>
            <div className="review-comment">댓글 내용</div>

            {/* 추가적인 댓글 목록을 여기에 추가 */}
          </div>
          <div className="review-comment-bottom">
            <textarea
              className="review-comment-write-form"
              placeholder="댓글 작성 요망"
            ></textarea>
            <button className="review-comment-write-upload">댓글 게시</button>
          </div>
        </div>
      </div>
    </ReviewDetail>
  );
};

const ReviewDetail = styled.div`
  width: 100%;
  background: #fceeec;
  padding: 20px;
  font-family: "KoddiUDOnGothic-Regular";

  .review-detail-feed-box {
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
  }

  .review-detail-item-box {
    width: 1004.092px;
    height: 989.055px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    padding: 2px;
  }

  .review-detail-item-top {
    padding: 15px 0px 0px 70px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: right;
    margin-bottom: 20px;
    width: 800;

    .review-detail-title {
      font-size: 75.113px;
      font-weight: 700;
      color: #e02525;
      margin-top: 20px;
    }
    .review-detail-type-nickname {
      display: flex;
      gap: 10px;
      margin-top: 10px;
    }

    .review-detail-type {
      color: #7c7c7c;
      font-size: 36.318px;
      margin-bottom: 10px;
    }

    .review-detail-nickname {
      color: #000;
      text-align: center;
      font-size: 36.506px;
      margin-left: 40px;
    }
  }

  .review-detail-item-middle {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    .review-detail-item-image {
      width: 862px;
      height: 678px;
      border-radius: 15px;
    }
  }

  .review-detail-item-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: #7c7c7c;
    padding: 15px 70px 0px 70px;
    margin-bottom: 20px;
    width: 800;

    .review-detail-date {
      font-size: 24px;
      color: #7c7c7c;
    }
    .review-detail-likes-comments {
      display: flex;
      gap: 10px;

      .review-detail-likes {
        font-size: 24px;
        color: #e02525;
        background-color: #df2525;
        border-radius: 4px;
        color: #fff;
      }

      .review-detail-comments {
        font-size: 24px;
        border-width: 0.766px;
        background-color: #fff;
        border-radius: 4px;
        border-color: #df2525;
        border-style: solid;
        color: #df2525;
      }
    }
  }

  //여기부터 댓글 스타일 부분

  .review-detail-comment-box {
    width: 1004.092px;
    background: #fceeec;
    padding: 20px;
    border-radius: 15px;
  }

  .review-comment-top {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;

    .review-comment-like-btn {
      padding: 10px 20px;
      background-color: #e02525;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 24.537px;
      cursor: pointer;
    }
  }

  //댓글 보기 창
  .review-comment-middle {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
  }

  .review-comment-middle-box {
    display: flex;
    align-items: center;
    gap: 10px;

    .review-comment-profile-image {
      width: 61px;
      height: 59.129px;
      border-radius: 50%;
    }

    .review-comment-profile-nickname {
      font-weight: bold;
      margin-right: 10px;
      font-size: 27.331px;
    }
  }
  .review-comment {
    display: block;
    font-size: 24px;
    background: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 910px;
    height: 87px;
    padding: 20px 40px 20px 40px;
  }

  //댓글 작성하기
  .review-comment-bottom {
    display: flex;
    gap: 10px;

    .review-comment-write-form {
      flex: 1;
      padding: 20px;
      border-radius: 20px;
      border: 1px solid #ccc;
      resize: none;
      height: 50px;
      font-size: 24px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .review-comment-write-upload {
      padding: 20px;
      background-color: #e02525;
      color: white;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      font-size: 24px;
    }
  }
`;

export default ReviewPage;
