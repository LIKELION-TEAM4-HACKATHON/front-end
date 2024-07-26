import React, { useState } from "react";
import styled from "styled-components";

const ReviewPage = () => {
  //api연동 전 리뷰
  const reviews = [
    {
      id: 1,
      nickname: "박신우",
      title: "탕후루 만들기 후기",
      type: "탕후루 만들기",
      likes: 10,
      comments: 3,
      date: "2024.07.02",
      profileImageUrl: "",
      reviewImageUrl: "images/popular-doing.png",
    },
    {
      id: 2,
      nickname: "박신우",
      title: "탕후루 만들기 후기",
      type: "탕후루 만들기",
      likes: 10,
      comments: 3,
      date: "2024.07.02",
      profileImageUrl: "",
      reviewImageUrl: "images/popular-doing.png",
    },
    {
      id: 3,
      nickname: "박신우",
      title: "탕후루 만들기 후기",
      type: "탕후루 만들기",
      likes: 10,
      comments: 3,
      date: "2024.07.02",
      profileImageUrl: "",
      reviewImageUrl: "images/popular-doing.png",
    },
    {
      id: 4,
      nickname: "박신우",
      title: "탕후루 만들기 후기",
      type: "탕후루 만들기",
      likes: 10,
      comments: 3,
      date: "2024.07.02",
      profileImageUrl: "",
      reviewImageUrl: "images/popular-doing.png",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredReviews = reviews.filter((review) =>
    review.title.includes(searchTerm)
  );

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
          <ReviewList
            key={review.id}
            nickname={review.nickname}
            title={review.title}
            type={review.type}
            likes={review.likes}
            comments={review.comments}
            date={review.date}
            profileImageUrl={review.profileImageUrl}
            reviewImageUrl={review.reviewImageUrl}
          />
        ))}
      </ReviewsContainer>

      <Pagination>
        <button>&lt;</button>
        <span>1</span>
        <button>&gt;</button>
      </Pagination>
    </ReviewsPage>
  );
};

const ReviewList = ({
  nickname,
  title,
  type,
  likes,
  comments,
  date,
  profileImageUrl,
  reviewImageUrl,
}) => {
  return (
    <ReviewListItem>
      <ReviewListItemBox>
        <ReviewListProfile>
          <ReviewListProfileImage
            style={{ backgroundImage: `url(${profileImageUrl})` }}
          ></ReviewListProfileImage>
          <ReviewListProfileNickname>{nickname}</ReviewListProfileNickname>
        </ReviewListProfile>
        <ReviewListContent>
          <ReviewListTitle>{title}</ReviewListTitle>
          <ReviewListType>{type}</ReviewListType>
          <ReviewListCounts>
            <ReviewListLikes>좋아요 {likes}</ReviewListLikes>
            <ReviewListComments>댓글 {comments}</ReviewListComments>
          </ReviewListCounts>
        </ReviewListContent>
        <ReviewListDate>
          <p>작성일</p>
          <p>{date}</p>
        </ReviewListDate>
        <ReviewListImage
          style={{ backgroundImage: `url(${reviewImageUrl})` }}
        ></ReviewListImage>
      </ReviewListItemBox>
    </ReviewListItem>
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
`;

const ReviewListItemBox = styled.div`
  display: flex;
  align-items: center;
  width: 1553px;
  height: 183.204px;
`;

const ReviewListProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
  width: 457px;
  height: 143.462px;
`;

const ReviewListProfileImage = styled.div`
  width: 102px;
  height: 98.872px;
  border-radius: 50%;
  background-color: #eee;
  background-size: cover;
  background-position: center;
`;

const ReviewListProfileNickname = styled.div`
  margin-top: 8px;
  font-size: 17.506px;
  color: #000;
  text-align: center;
  font-weight: 400;
  line-height: normal;
`;

const ReviewListContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px 100px;
  gap: 10px;
`;

const ReviewListTitle = styled.div`
  color: red;
  font-size: 35.159px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ReviewListType = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

const ReviewListCounts = styled.div`
  display: flex;
  gap: 10px;
`;

const ReviewListLikes = styled.span`
  padding: 2px 5px 2px 10px;
  background-color: #df2525;
  border-radius: 4px;
  font-size: 12px;
  color: #fff;
`;

const ReviewListComments = styled.span`
  padding: 2px 10px 2px 5px;
  background-color: #fff;
  border-radius: 4px;
  border-width: 0.766px;
  border-style: solid;
  border-color: #df2525;
  font-size: 12px;
  color: #df2525;
`;

const ReviewListDate = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  font-size: 12px;
  color: #999;
  gap: 0px;
`;

const ReviewListImage = styled.div`
  width: 203.607px;
  height: 160.203px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  flex-direction: column;
`;

export default ReviewPage;
