import styled from "styled-components";
import { useState } from "react";

const InputBox = styled.div`
  margin-top: 30px;
  font-family: KoddiUDOnGothic-Regular;
  font-size: 21px;

  input {
    color: #7c7c7c;
    width: 100%;
    height: 60px;
    background: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 2px 14.7px 0px rgba(0, 0, 0, 0.1) inset;
    display: block;
    padding: 10px 0 10px 10px;
    box-sizing: border-box;
    font-size: 21px;
    font-family: KoddiUDOnGothic-Regular;
    &::placeholder {
      font-size: 21px;
      font-family: KoddiUDOnGothic-Regular;
    }
    &:focus {
      outline: none;
      border: 1px solid gray;
    }
  }

  .inputTitle {
    margin-bottom: 11px;
    font-size: 21px;
  }
  .rule {
    text-align: right;
    font-size: 15px;
    margin-bottom: 11px;
    color: #7c7c7c;
  }
  .inputContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .insta,
  .facebook {
    margin-bottom: 15px;
  }
`;

const JoinInput4 = ({ instagram, setInstagram, facebook, setFacebook }) => {
  const handleInstagramChange = (e) => setInstagram(e.target.value);
  const handleFacebookChange = (e) => setFacebook(e.target.value);

  return (
    <InputBox>
      <div className="inputContainer">
        <span className="inputTitle">
          자신을 소개할 수 있는 SNS가 있으신가요?
        </span>
        <span className="rule">(선택사항)</span>
      </div>
      <input
        type="text"
        className="insta"
        placeholder="인스타그램 아이디를 작성해 주세요."
        onChange={handleInstagramChange}
        value={instagram}
      />
      <input
        type="text"
        className="facebook"
        placeholder="페이스북 아이디를 작성해 주세요."
        onChange={handleFacebookChange}
        value={facebook}
      />
    </InputBox>
  );
};

export default JoinInput4;
