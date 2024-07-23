import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderSection = styled.header`
  width: 100%;
  height: 130px;
  font-family: GmarketSans;

  .top-border {
    width: 100%;
    height: 16px;
    background: linear-gradient(
      90deg,
      #e02525 0%,
      #7a1414 25%,
      #e02525 50%,
      #ff9494 75%,
      #e02525 100%
    );
  }

  .navItems {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }

  .logo {
    display: flex;
    margin-left: 150px;
    img {
      width: 132px;
      height: 95px;
    }
  }

  .category {
    display: grid;
    grid-template-rows: auto auto;
    justify-items: end;
    margin-right: 150px;

    .upper,
    .lower {
      display: grid;
      grid-auto-flow: column;
    }

    .upper {
      font-size: 15.151px;
      gap: 20px;

      a {
        background: linear-gradient(
          90deg,
          #e02525 0%,
          #7a1414 25%,
          #e02525 50%,
          #ff9494 75%,
          #e02525 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
      }
    }

    .lower {
      font-size: 22.569px;
      font-style: normal;
      font-weight: 400;
      gap: 50px;
      justify-content: center;
      align-items: center;
    }

    .myChat {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 2px;
      width: 190px;
      height: 45px;
      color: white;
      border-radius: 6.529px;
      background-image: linear-gradient(94deg, #e02525 -14.69%, #7a1414 99.86%);
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  height: 40px;
`;

const Header = () => {
  return (
    <HeaderSection>
      <div className="top-border"></div>
      <div className="navItems">
        <div className="logo">
          <StyledLink to="/">
            <img src="/images/main-logo.png" alt="main-logo" />
          </StyledLink>
        </div>
        <div className="category">
          <div className="upper">
            <StyledLink to="/">로그인</StyledLink>
            <StyledLink to="/">|</StyledLink>
            <StyledLink to="/">회원가입</StyledLink>
          </div>
          <div className="lower">
            <div className="myChat">
              <StyledLink to="/">나의 모임</StyledLink>
            </div>
            <StyledLink to="/">요즘 뭐햐</StyledLink>
            <StyledLink to="/">모임 찾기</StyledLink>
            <StyledLink to="/">후기</StyledLink>
          </div>
        </div>
      </div>
    </HeaderSection>
  );
};

export default Header;
