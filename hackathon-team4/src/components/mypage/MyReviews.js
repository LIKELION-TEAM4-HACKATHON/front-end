import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const MyReviews = ({reviews}) => {
    
    return (
  <ReviewsContainer>
  {reviews &&
    reviews.map((review) => (
      <ReviewListItem key={review.reviewId}>
        <StyledLink to={`/reviews/${review.reviewId}`}>
          <div className="review-list-item-box">
            <div className="review-list-profile">
              <div
                className="review-list-profile-image"
                style={{
                  backgroundImage: `url(${review.reviewer.profileImageUrl})`,
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
              <div>
                {new Date(review.createdDate).toLocaleDateString()}
              </div>
            </div>
            <div
              className="review-list-image"
              style={{ backgroundImage: `url(${review.reviewImageUrl})` }}
            ></div>
          </div>
        </StyledLink>
      </ReviewListItem>
    ))}
  </ReviewsContainer>
    );
}

const ReviewsContainer = styled.div`
  display: flex;
  padding-top: 50px;
  padding-bottom: 20px;
    flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #007bff;
  }
`;

const ReviewListItem = styled.div`
font-family: KoddiUDOnGothic-Regular;
background-color: #fff;
box-shadow: 0 2px 10.796px 0px rgba(0, 0, 0, 0.25);
border-radius: 8px;

  cursor: pointer;
  width: 70%;
  padding: 10px 30px;
    margin-bottom: 30px;


  .review-list-item-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
  }

  .review-list-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 30px;
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
    padding: 30px 0px;
    gap: 10px;
  }

  .review-list-title {
    color: red;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .review-list-type {
    font-size: 18px;
    color: #666;
    margin-bottom: 8px;
  }

  .review-list-counts {
    display: flex;
    gap: 10px;
  }

  .review-list-likes {
    padding: 5px 10px;
    background-color: #df2525;
    border-radius: 4px;
    font-size: 17px;
    border: 1.5px solid #df2525;
    color: #fff;
  }

  .review-list-comments {
    padding: 5px 10px;
    background-color: #fff;
    border-radius: 4px;
    border: 1.5px solid #df2525;
    font-size: 17px;
    color: #df2525;
  }

  .review-list-date {
    display: flex;
    flex-direction: column;
    text-align: right;
    font-size: 20px;
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
    margin-left: 30px;
  }
`;


export default MyReviews;
