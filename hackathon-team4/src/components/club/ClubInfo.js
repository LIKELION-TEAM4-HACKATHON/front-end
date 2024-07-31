import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const ClubInfoSection = styled.section`
  width: 100%;
  height: 200px;
  margin: 47px 72px;
  font-family: KoddiUDOnGothic-Regular;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ClubInfo = () => {
  return <ClubInfoSection></ClubInfoSection>;
};

export default ClubInfo;
