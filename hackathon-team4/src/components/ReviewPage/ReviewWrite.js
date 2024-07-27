import React, { useState } from "react";
import styled from "styled-components";

const ReviewWrite = () => {
  return (
    <ReviewWriteContainer>
      <div className="review-write-box">
        <button className="review-write-submit-btn">후기 저장</button>
        <input
          type="text"
          className="review-write-title"
          placeholder="후기의 제목을 작성해주세요!"
        ></input>
        <div className="review-write-type">{"탕후루 만들기"}</div>
        <div className="review-write-image-upload-box">
          <img
            className="review-image-upload-logo"
            src="images/Vector.png"
            alt="사진 업로드 로고"
          ></img>
          <button className="review-write-image-upload-btn">사진 추가</button>
        </div>
        <textarea
          className="review-write-form-box"
          placeholder="후기를 작성해주세요!"
        ></textarea>
      </div>
    </ReviewWriteContainer>
  );
};

const ReviewWriteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #fceeec;
  font-family: "KoddiUDOnGothic-Regular";

  .review-write-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 1000px;
    gap: 20px;
  }

  .review-write-submit-btn {
    width: 164px;
    height: 49px;
    font-family: "GmarketSans";
    background: linear-gradient(90deg, #e02525 0%, #7a1414 100%);
    color: white;
    border: none;
    border-radius: 6.529px;
    padding: 5px 20px;
    cursor: pointer;
    align-self: flex-end;
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 30px;
  }
  .review-write-title {
    width: 100%;
    height: 82px;
    padding: 10px;
    border: none;
    border-radius: 8.119px;
    background: #fff;
    box-shadow: 0px 1.624px 5.724px 0px rgba(0, 0, 0, 0.25);
    color: black;
    text-align: center;
    font-size: 36.318px;
  }
  .review-write-type {
    width: 100%;
    height: 45px;
    padding: 10px;
    border-radius: 8.119px;
    background: #fff;
    box-shadow: 0px 1.624px 5.724px 0px rgba(0, 0, 0, 0.25);
    font-size: 36.318px;
    text-align: center;
    margin-top: 20px;
    font-family: "GmarketSans";
  }
  .review-write-image-upload-box {
    width: 957px;
    height: 384px;
    background: #c6c6c6;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
  }
  .review-image-upload-logo {
    width: 163px;
    height: 122px;
    margin-bottom: 20px;
  }
  .review-write-image-upload-btn {
    width: 164px;
    height: 49px;
    border-radius: 6.529px;
    border: none;
    background: linear-gradient(90deg, #e02525 0%, #7a1414 100%);
    color: #fff;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: "GmarketSans";
    font-size: 22.57px;
  }
  .review-write-form-box {
    width: 100%;
    height: 339px;
    border-radius: 8.119px;
    border: none;
    background: #fff;
    box-shadow: 0px 1.624px 5.724px 0px rgba(0, 0, 0, 0.25);
    color: #7c7c7c;
    font-size: 24px;
    padding: 30px 30px 0 30px;
    margin-top: 30px;
  }
`;
export default ReviewWrite;
