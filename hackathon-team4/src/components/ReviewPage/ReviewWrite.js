import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReviewWrite = () => {
  const { cultureId } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]); // 이미지 미리보기를 위한 상태 추가
  const [cultureName, setCultureName] = useState("");

  useEffect(() => {
    const fetchCultureName = async () => {
      try {
        const response = await axios.get(
          `http://3.37.154.200:8080/api/cultures/${cultureId}`
        );
        setCultureName(response.data.name);
      } catch (error) {
        console.error("Failed to fetch culture name", error);
      }
    };

    fetchCultureName();
  }, [cultureId]);

  // 이미지 변경 핸들러 수정
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);

    const fileReaders = [];
    const imagePreviews = files.map((file) => {
      const reader = new FileReader();
      fileReaders.push(reader);
      return new Promise((resolve) => {
        reader.onload = (event) => {
          resolve(event.target.result);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePreviews).then((newPreviews) => {
      setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
    });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("info", JSON.stringify({ title, content }));
    images.forEach((image, index) => {
      formData.append(`reviewImage${index + 1}`, image);
    });

    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.post(
        `http://3.37.154.200:8080/api/reviews/culture/${cultureId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
        <div className="review-write-type">{cultureName}</div>
        <div className="review-write-image-upload-box">
          <img
            className="review-image-upload-logo"
            src="/images/Vector.png"
            alt="사진 업로드 로고"
          />
          <input
            type="file"
            multiple
            className="review-write-image-upload-input"
            onChange={handleImageChange}
          />
          {previews.length > 0 && (
            <div className="image-previews">
              {previews.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`Preview ${index}`}
                  className="image-preview"
                />
              ))}
            </div>
          )}
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

  /* 이미지 미리보기 스타일 수정 */
  .image-previews {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    .image-preview {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
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
