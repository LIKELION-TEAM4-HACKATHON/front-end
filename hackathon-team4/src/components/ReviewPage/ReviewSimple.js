import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../api";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, [page, searchTerm]);

  const fetchReviews = async () => {
    try {
      const response = await api.get(
        `/api/reviews?keyword=${searchTerm}&page=${page}`
      );
      setReviews(response.data.reviews);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const filteredReviews = reviews
    ? reviews.filter((review) => review.title.includes(searchTerm))
    : [];

  return (
    <ReviewsPage>
      <SearchContainer>
        <input
          type="text"
          placeholder="후기를 검색해보세요!"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </SearchContainer>

      <ReviewsContainer>
        {filteredReviews.map((review) => (
          <ReviewListItem key={review.reviewId}>
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
                <div>{new Date(review.createdDate).toLocaleDateString()}</div>
              </div>
              <div
                className="review-list-image"
                style={{ backgroundImage: `url(${review.reviewImageUrl})` }}
              ></div>
            </div>
          </ReviewListItem>
        ))}
      </ReviewsContainer>

      <Pagination>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 0}
        >
          &lt;
        </button>
        <span>{page + 1}</span>
        <button onClick={() => handlePageChange(page + 1)}>&gt;</button>
      </Pagination>
    </ReviewsPage>
  );
};

const ReviewsPage = styled.div`
  width: 100%;
  background: #fceeec;
  padding: 20px;
  font-family: "KoddiUDOnGothic-Regular";
`;

const SearchContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;

  input {
    padding: 10px 0px 10px 20px;
    width: 738px;
    height: 43px;
    border: 0px solid #ccc;
    font-size: 22.929px;
    border-radius: 8px;
    background: #fff;
    font-weight: 400;
    line-height: normal;
    box-shadow: 0px 2px 14.7px 0px rgba(0, 0, 0, 0.1) inset;
    color: #7c7c7c;
  }
`;

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    padding: 10px;
    margin: 0 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;
    border-radius: 4px;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  span {
    padding: 10px;
  }
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

export default ReviewPage;
