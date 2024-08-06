import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  width: 70%;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: KoddiUDOnGothic-Regular;
`;

const Content = styled.div`
  padding: 20px;

  .culture-title {
    color: #df2525;
    width: auto;
    font-size: 33px;
    margin-top: 10px;
    margin-bottom: 30px;
    margin-left: 0px;
    font-weight: bold;
  }

  .culture-content {
    font-size: 20px;
    font-weight: bold;
    line-height: 26px;
  }
`;

const CultureInfo = ({ cultureData }) => {
  return (
    <InfoContainer>
      <Content dangerouslySetInnerHTML={{ __html: cultureData.content }} />
    </InfoContainer>
  );
};

export default CultureInfo;
