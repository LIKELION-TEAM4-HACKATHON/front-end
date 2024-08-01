import React from "react";
import styled from "styled-components";
import CultureCard from "./CultureCard";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const CultureList = ({ cultures }) => {
  return (
    <List>
      {cultures.map((culture) => (
        <CultureCard key={culture.cultureId} culture={culture} />
      ))}
    </List>
  );
};

export default CultureList;
