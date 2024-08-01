import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ReviewWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("info", JSON.stringify({ title, content }));
    images.forEach((image, index) => {
      formData.append(`reviewImage${index + 1}`, image);
    });

    try {
      const response = await axios.post(
        "/api/reviews/culture/{cultureId}",
        formData,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MkB0ZXN0Lm",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Failed to submit review", error);
    }
  };

  return (
    <ReviewWriteContainer>
      <div className="review-write-box">
        <input
          type="text"
          className="review-write-title"
          placeholder="후기의 제목을 작성해주세요!"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="review-write-type">{"탕후루 만들기"}</div>
        <div className="review-write-image-upload-box">
          <img
            className="review-image-upload-logo"
            src="images/Vector.png"
            alt="사진 업로드 로고"
          />
          <input
            type="file"
            multiple
            className="review-write-image-upload-input"
            onChange={handleImageChange}
          />
        </div>
        <textarea
          className="review-write-form-box"
          placeholder="후기를 작성해주세요!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="review-write-submit-btn" onClick={handleSubmit}>
          후기 저장
        </button>
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
    position: relative;
  }

  .review-image-upload-logo {
    width: 163px;
    height: 122px;
    margin-bottom: 20px;
  }

  .review-write-image-upload-input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
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
