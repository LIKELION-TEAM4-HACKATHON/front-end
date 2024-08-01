import { useState, useEffect } from "react";
import styled from "styled-components";

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

  textarea {
    color: #7c7c7c;
    width: 100%;
    height: 194px;
    background: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 2px 14.7px 0px rgba(0, 0, 0, 0.1) inset;
    display: block;
    padding: 10px 0 10px 10px;
    box-sizing: border-box;
    font-size: 21px;
    font-family: KoddiUDOnGothic-Regular;
    resize: none;
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
`;

const MakeInput1 = ({ onValidityChange }) => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const isValid = text.trim() !== "" && description.trim() !== "";
    onValidityChange(isValid);
  }, [text, description, onValidityChange]);

  return (
    <InputBox>
      <div className="inputTitle">어떤 모임인지 알려주세요.</div>
      <input
        type="text"
        className="club"
        placeholder="모임 이름"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <textarea
        className="info"
        placeholder="모임에 대한 설명, 모임원에게 바라는 점 등을 알려주세요."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </InputBox>
  );
};

export default MakeInput1;
