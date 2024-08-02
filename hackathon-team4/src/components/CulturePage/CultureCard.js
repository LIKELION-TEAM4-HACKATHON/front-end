import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CultureCard = ({ cultures }) => {
  return (
    <Link
      to={`/cultures/${cultures.cultureId}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card>
        <img src={cultures.cultureImageUrl} alt={cultures.name} />
        <h3 className="title">{cultures.name}</h3>
        <p className="summary">{cultures.summary}</p>
        <p className="region">{cultures.regionName}</p>
        <div className="culture-card-footer">
          <span className="likes">관심 {cultures.interestCount}</span>
          <span className="chat">모임 {cultures.clubCount}</span>
        </div>
      </Card>
    </Link>
  );
};

const Card = styled.div`
  background-color: #fff;
  overflow: hidden;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 2px 4px 14.2px 0px rgba(0, 0, 0, 0.14);
  width: 303px;
  height: 410px;
  margin-left: 45px;
  margin-bottom: 45px;
  text-align: center;
  cursor: pointer;

  img {
    width: 275px;
    height: 223.222px;
    border-radius: 12px;
  }

  .title {
    margin: 20px 0;
    color: #e02525;
    text-align: center;
    font-family: "KoddiUDOnGothic-Bold";
    font-size: 28px;
  }

  .summary {
    color: #7c7c7c;
    font-family: "KoddiUDOnGothic-Regular";
    font-size: 18.727px;
    margin: 10px 0;
  }

  .region {
    color: #7c7c7c;
    font-family: "KoddiUDOnGothic-Regular";
    font-size: 16px;
    margin: 10px 0;
  }

  .culture-card-footer {
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
    font-family: "KoddiUDOnGothic-Regular";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    .likes {
      color: #fff;
      background-color: #df2525;
      border-radius: 5px;
      padding: 5px 10px;
      margin-left: auto;
    }
    .chat {
      color: #e02525;
      background-color: #fff;
      border-radius: 5px;
      padding: 5px 10px;
      margin-left: 20px;
      border-width: 2px;
      border-color: #e02525;
      border-style: solid;
    }
  }
`;

export default CultureCard;
