import { useState, useEffect } from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-right: 10px;
  border-radius: 4px;
  border: none;
  text-align: center;
  font-family: KoddiUDOnGothic-Bold;
  font-size: 18px;
  cursor: pointer;
  background-color: ${(props) =>
    props.disabled ? "#ccc" : props.selected ? "#DF2525" : "#EE90B7"};
  color: ${(props) => (props.disabled ? "#777" : "#fff")};
`;

const NotSelectBtn = styled(Button)`
  width: 87px;
  height: 60px;
  background: ${(props) => (props.selected ? "#DF2525" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#7c7c7c")};
  border: none;
  border-radius: 8px;
  box-shadow: 0px 2px 14.7px 0px rgba(0, 0, 0, 0.1) inset;
  padding: 10px;
  box-sizing: border-box;
  font-size: 21px;
  font-family: KoddiUDOnGothic-Regular;
  cursor: pointer;
`;

const InputBox = styled.div`
  margin-top: 30px;
  font-family: KoddiUDOnGothic-Regular;
  font-size: 21px;

  input {
    color: #7c7c7c;
    width: 80%;
    height: 60px;
    background: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 2px 14.7px 0px rgba(0, 0, 0, 0.1) inset;
    display: block;
    padding: 10px;
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
    &:disabled {
      background: #f5f5f5;
    }
  }

  .inputTitle {
    margin-bottom: 28px;
    font-size: 21px;
    font-family: KoddiUDOnGothic-Bold;
  }

  .smallTitle {
    margin-bottom: 11px;
    font-size: 21px;
    font-family: KoddiUDOnGothic-Bold;
  }

  .inputContainer {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

const MakeInput2 = ({ onValidityChange }) => {
  const [date, setDate] = useState("");
  const [maxPeople, setMaxPeople] = useState("");
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [isMaxPeopleSelected, setIsMaxPeopleSelected] = useState(false);

  useEffect(() => {
    const isValid =
      (date || isDateSelected) && (maxPeople || isMaxPeopleSelected);
    onValidityChange(isValid);
  }, [date, maxPeople, isDateSelected, isMaxPeopleSelected, onValidityChange]);

  const toggleDateSelection = () => {
    setIsDateSelected(!isDateSelected);
    if (isDateSelected) setDate("");
  };

  const toggleMaxPeopleSelection = () => {
    setIsMaxPeopleSelected(!isMaxPeopleSelected);
    if (isMaxPeopleSelected) setMaxPeople("");
  };

  return (
    <InputBox>
      <div className="inputTitle">모임 날짜와 최대 인원을 설정해 주세요.</div>
      <div className="smallTitle">모임 날짜</div>
      <span className="inputContainer">
        <input
          type="date"
          className="date"
          placeholder="선택"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            setIsDateSelected(false);
          }}
          disabled={isDateSelected}
        />
        <NotSelectBtn selected={isDateSelected} onClick={toggleDateSelection}>
          미정
        </NotSelectBtn>
      </span>
      <div className="smallTitle">최대 인원</div>
      <span className="inputContainer">
        <input
          type="number"
          className="number"
          placeholder="선택"
          value={maxPeople}
          onChange={(e) => {
            setMaxPeople(e.target.value);
            setIsMaxPeopleSelected(false);
          }}
          disabled={isMaxPeopleSelected}
        />
        <NotSelectBtn
          selected={isMaxPeopleSelected}
          onClick={toggleMaxPeopleSelection}
        >
          미정
        </NotSelectBtn>
      </span>
    </InputBox>
  );
};

export default MakeInput2;
