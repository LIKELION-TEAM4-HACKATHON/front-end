import React from "react";
import styled from "styled-components";

const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 20px 0;
  flex-direction: column;

  li {
    margin: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    color: #7c7c7c;

    font-family: "KoddiUDOnGothic-Bold";
    font-size: 21px;

    &:hover {
      background-color: #cb3939;
      color: #fff;
    }
  }
`;

const hashtags = [
  "전체",
  "'나' 찾기",
  "예술과 교양",
  "야외활동",
  "실내활동",
  "배움",
];

const CategoryMenu = ({ onCategoryChange, selectedCategory }) => {
  return (
    <Menu>
      {hashtags.map((category, index) => (
        <li
          key={index}
          onClick={() => onCategoryChange(category)}
          className={selectedCategory === category ? "active" : ""}
        >
          {category}
        </li>
      ))}
    </Menu>
  );
};

export default CategoryMenu;
