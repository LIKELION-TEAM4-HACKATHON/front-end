import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CultureInfo = ({ cultureData }) => {
  return (
    <InfoContainer>
      <h2>{cultureData.name}</h2>
      <p>{cultureData.content}</p>
    </InfoContainer>
  );
};

export default CultureInfo;
