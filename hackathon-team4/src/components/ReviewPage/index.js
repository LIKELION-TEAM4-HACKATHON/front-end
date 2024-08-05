import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

const ReviewPage = () => {
  const { reviewId } = useParams();
  const [reviewDetail, setReviewDetail] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [newComment, setNewComment] = useState(""); // 새 댓글 입력 값 상태 추가

  useEffect(() => {
    const fetchReviewDetail = async () => {
      try {
        const response = await axios.get(
          `http://3.37.154.200:8080/api/reviews/${reviewId}`
        );
        console.log("Review detail fetched:", response.data);
        setReviewDetail(response.data);
        setIsLiked(response.data.isLiked); // 서버로부터 좋아요 상태를 받아옴
      } catch (error) {
        console.error("Failed to fetch review detail", error);
      }
    };

    fetchReviewDetail();
  }, [reviewId]);

  const handleLikeToggle = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.put(
        `http://3.37.154.200:8080/api/reviews/${reviewId}/likes`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.message === "후기 좋아요 추가 성공") {
        setReviewDetail((prevDetail) => ({
          ...prevDetail,
          likeCount: prevDetail.likeCount + 1,
        }));
        setIsLiked(true);
      } else if (response.data.message === "후기 좋아요 삭제 성공") {
        setReviewDetail((prevDetail) => ({
          ...prevDetail,
          likeCount: prevDetail.likeCount - 1,
        }));
        setIsLiked(false);
      }
    } catch (error) {
      console.error("Failed to toggle like", error.response || error.message);
    }
  };

  const handleCommentSubmit = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.post(
        `http://3.37.154.200:8080/api/reviews/${reviewId}/comments`,
        {
          content: newComment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setReviewDetail((prevDetail) => ({
        ...prevDetail,
        comments: [...prevDetail.comments, response.data],
      }));
      setNewComment(""); // 댓글 작성 후 입력란 초기화
    } catch (error) {
      console.error(
        "Failed to submit comment",
        error.response || error.message
      );
    }
  };

  if (!reviewDetail) {
    return <div>Loading...</div>;
  }

  return (
    <ReviewDetail>
      <div className="review-detail-feed-box">
        <div className="review-detail-item-box">
          <div className="review-detail-item-top">
            <div className="review-detail-title">{reviewDetail.title}</div>
            <div className="review-detail-type-nickname">
              <div className="review-detail-type">
                {reviewDetail.culture.name}
              </div>
              <div className="review-detail-nickname">
                {reviewDetail.reviewer.username} 님
              </div>
            </div>
          </div>
          <div className="review-detail-item-middle">
            <img
              className="review-detail-item-image"
              src={reviewDetail.reviewImageUrl1}
              alt="리뷰 이미지"
            />
          </div>
          <div className="review-detail-content">{reviewDetail.content}</div>
          <div className="review-detail-item-bottom">
            <div className="review-detail-date">
              작성일 {new Date(reviewDetail.createdDate).toLocaleDateString()}
            </div>
            <div className="review-detail-likes-comments">
              <div className="review-detail-likes">
                좋아요 {reviewDetail.likeCount}
              </div>
              <div className="review-detail-comments">
                댓글 {reviewDetail.comments.length}
              </div>
            </div>
          </div>
        </div>

        <div className="review-detail-comment-box">
          <div className="review-comment-top">
            <button
              className="review-comment-like-btn"
              onClick={handleLikeToggle}
            >
              {isLiked ? "좋아요 취소" : "후기 좋아요"}
            </button>
          </div>

          <div className="review-comment-middle">
            {reviewDetail.comments.map((comment) => (
              <div
                key={comment.commentId}
                className="review-comment-middle-box"
              >
                <img
                  className="review-comment-profile-image"
                  src={comment.commenter.profileImageUrl}
                  alt="프로필 이미지"
                />
                <div className="review-comment-profile-nickname">
                  {comment.commenter.username}
                </div>
                <div className="review-comment">{comment.content}</div>
              </div>
            ))}
          </div>

          <div className="review-comment-bottom">
            <textarea
              className="review-comment-write-form"
              placeholder="댓글 작성 요망"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button
              className="review-comment-write-upload"
              onClick={handleCommentSubmit}
            >
              댓글 게시
            </button>
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
  }

  .review-detail-item-box {
    width: 1004.092px;
    height: auto;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  .review-detail-item-top {
    padding: 15px 60px 0px 70px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: right;
    margin-bottom: 20px;
    width: 800;

    .review-detail-title {
      font-size: 50px;
      font-weight: 700;
      color: #e02525;
      margin-top: 20px;
    }
    .review-detail-type-nickname {
      display: flex;
      gap: 10px;
      margin: 30px 0px 1px 0px;
    }

    .review-detail-type {
      color: #7c7c7c;
      font-size: 40px;
      margin-bottom: 10px;
    }

    .review-detail-nickname {
      color: #000;
      text-align: right;
      font-size: 40px;
      margin-left: 150px;
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

  .review-detail-content {
    width: 862px;
    height: auto;
    padding: 0px 40px 0px 70px;
    font-size: 28px;
    margin: 20px 0px;
  }

  .review-detail-item-bottom {
    display: flex;
    justify-content: space-between;
    padding: 15px 70px 0px 70px;
    margin-bottom: 10px;
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
        color: #fff;
        background-color: #df2525;
        border-radius: 5px;
        padding: 5px 10px;
        margin-left: 10px;
        border: 1px solid #e02525;
      }

      .review-detail-comments {
        font-size: 24px;
        color: #e02525;
        background-color: #fff;
        border-radius: 5px;
        padding: 5px 10px;
        margin-left: 10px;
        border: 1.5px solid #e02525;
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
    margin: 10px;

    .review-comment-like-btn {
      font-family: GmarketSans;
      background-image: linear-gradient(94deg, #e02525 -14.69%, #7a1414 99.86%);
      padding: 10px 20px;
      border-radius: 6.529px;
      border: none;
      cursor: pointer;
      color: #fff;
      font-size: 25px;

      &:hover {
      }
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
    margin-top: 30px;

    .review-comment-profile-image {
      width: 65px;
      height: 65px;
      border-radius: 70%;
    }

    .review-comment-profile-nickname {
      font-weight: bold;
      margin-right: 10px;
      font-size: 27.331px;
      width: 60px;
    }
  }
  .review-comment {
    display: block;
    font-size: 24px;
    background: white;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 800px;
    height: auto;
    min-height: 30px;
    padding: 20px 30px;
  }

  //댓글 작성하기
  .review-comment-bottom {
    display: flex;
    gap: 10px;
    margin-top: 60px;

    .review-comment-write-form {
      flex: 1;
      padding: 10px;
      border-radius: 20px;
      border: 1px solid #ccc;
      resize: none;
      height: 50px;
      font-size: 24px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .review-comment-write-upload {
      padding: 20px;
      font-family: GmarketSans;
      background-image: linear-gradient(94deg, #e02525 -14.69%, #7a1414 99.86%);
      border-radius: 20px;
      border: none;
      cursor: pointer;
      color: #fff;
      font-size: 24px;
    }
  }
`;
export default ReviewPage;
