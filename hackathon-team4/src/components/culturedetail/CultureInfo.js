import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CultureInfo = () => {
  return (
    <InfoContainer>
      <h3>사용 설명서???</h3>
      <p>여기에 문화에 대한 상세 설명이 들어갑니다.</p>
    </InfoContainer>
  );
};

export default CultureInfo;
