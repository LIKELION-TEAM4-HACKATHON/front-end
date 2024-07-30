import React from "react";
import styled from "styled-components";

const CultureReview = () => {
  const reviews = [
    {
      reviewId: 1,
      reviewer: {
        userId: 2,
        username: "도연",
        profileImage: "http://example.com/profile1.jpg",
      },
      title: "퍼스널컬러 후기~",
      reviewImageUrl: "http://example.com/review1.jpg",
      cultureName: "야외활동",
      createdDate: "2024-07-22T12:34:56Z",
      likeCount: 3,
      commentCount: 5,
    },
    {
      reviewId: 2,
      reviewer: {
        userId: 10,
        username: "신우",
        profileImageUrl: "http://example.com/profile1.jpg",
      },
      title: "퍼스널컬러를 갔다왔어요~",
      reviewImage: "http://example.com/review2.jpg",
      cultureName: "미술과 예술",
      createdDate: "2024-07-25T12:34:56Z",
      likeCount: 13,
      commentCount: 65,
    },
  ];

  return (
    <ReviewContainer>
      {reviews.map((review) => (
        <ReviewListItem key={review.reviewId}>
          <div className="review-list-item-box">
            <div className="review-list-profile">
              <div
                className="review-list-profile-image"
                style={{
                  backgroundImage: `url(${review.reviewer.profileImage})`,
                }}
              ></div>
              <div className="review-list-profile-nickname">
                {review.reviewer.username}
              </div>
            </div>
            <div className="review-list-content">
              <div className="review-list-title">{review.title}</div>
              <div className="review-list-type">{review.cultureName}</div>
              <div className="review-list-counts">
                <div className="review-list-likes">
                  좋아요 {review.likeCount}
                </div>
                <div className="review-list-comments">
                  댓글 {review.commentCount}
                </div>
              </div>
            </div>
            <div className="review-list-date">
              <div>작성일</div>
              <div>{new Date(review.createdDate).toLocaleDateString()}</div>
            </div>
            <div
              className="review-list-image"
              style={{ backgroundImage: `url(${review.reviewImageUrl})` }}
            ></div>
          </div>
        </ReviewListItem>
      ))}
    </ReviewContainer>
  );
};
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 70px;
`;

const ReviewListItem = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-radius: 15.314px;
  box-shadow: 0 2px 10.796px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  margin-bottom: 20px;
  width: 90%;

  .review-list-item-box {
    display: flex;
    align-items: center;
    width: 1553px;
    height: 183.204px;
  }

  .review-list-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 16px;
    width: 457px;
    height: 143.462px;
  }

  .review-list-profile-image {
    width: 102px;
    height: 98.872px;
    border-radius: 50%;
    background-color: #eee;
    background-size: cover;
    background-position: center;
  }

  .review-list-profile-nickname {
    margin-top: 8px;
    font-size: 17.506px;
    color: #000;
    text-align: center;
    font-weight: 400;
    line-height: normal;
  }

  .review-list-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 30px 100px;
    gap: 10px;
  }

  .review-list-title {
    color: red;
    font-size: 35.159px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .review-list-type {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }

  .review-list-counts {
    display: flex;
    gap: 10px;
  }

  .review-list-likes {
    padding: 2px 5px 2px 10px;
    background-color: #df2525;
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
  }

  .review-list-comments {
    padding: 2px 10px 2px 5px;
    background-color: #fff;
    border-radius: 4px;
    border-width: 0.766px;
    border-style: solid;
    border-color: #df2525;
    font-size: 12px;
    color: #df2525;
  }

  .review-list-date {
    display: flex;
    flex-direction: column;
    text-align: right;
    font-size: 12px;
    color: #999;
    gap: 0px;
  }

  .review-list-image {
    width: 203.607px;
    height: 160.203px;
    border-radius: 8px;
    background-size: cover;
    background-position: center;
    flex-direction: column;
  }
`;

export default CultureReview;
