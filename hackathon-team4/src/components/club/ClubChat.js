import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const ClubChatSection = styled.section`
  width: 100%;
  height: 200px;
  margin: 47px 72px;
  font-family: KoddiUDOnGothic-Regular;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ClubChat = () => {
  return <ClubChatSection></ClubChatSection>;
};

export default ClubChat;
