import React from "react";
import styled from "styled-components";

const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  flex-direction: column;

  li {
    margin: 5px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    color: #7c7c7c;

    font-family: "KoddiUDOnGothic-Bold";
    font-size: 21px;

    &:hover,
    &.active {
      background-color: #cb3939;
      color: #fff;
    }
  }
`;

const hashtags = [
  { id: 0, name: "전체" },
  { id: 1, name: "'나' 찾기" },
  { id: 2, name: "예술과 교양" },
  { id: 3, name: "야외활동" },
  { id: 4, name: "실내활동" },
  { id: 5, name: "배움" },
];

const interesttags = [
  { id: 0, name: "전체" },
];

const CategoryMenu = ({ onCategoryChange, selectedCategory, showInterest }) => {
  const categories = showInterest ? interesttags : hashtags;

  return (
    <Menu>
      {categories.map((category) => (
        <li
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={selectedCategory === category.id ? "active" : ""}
        >
          {category.name}
        </li>
      ))}
    </Menu>
  );
};

export default CategoryMenu;
