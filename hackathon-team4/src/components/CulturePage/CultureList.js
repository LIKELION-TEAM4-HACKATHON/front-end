import React from "react";
import styled from "styled-components";
import CultureCard from "./CultureCard";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const CultureList = ({ cultures }) => {
  if (!cultures || cultures.length === 0) {
    return <div>이용 가능한 문화가 없습니다</div>;
  }

  return (
    <List>
      {cultures.map((cultures) => (
        <CultureCard key={cultures.cultureId} cultures={cultures} />
      ))}
    </List>
  );
};

export default CultureList;
