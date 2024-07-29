import styled from "styled-components";
import { useEffect } from "react";

const Button = styled.button`
  margin-right: 10px;
  border-radius: 4px;
  border: none;
  text-align: center;
  font-family: KoddiUDOnGothic-Bold;
  font-size: 18px;
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#EE90B7")};
  color: ${(props) => (props.disabled ? "#777" : "#fff")};
`;

const GenderButton = styled(Button)`
  width: 63px;
  height: 33px;
  background-color: ${(props) => (props.isSelected ? "#EEA790" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#EEA790")};
  box-shadow: ${(props) =>
    props.isSelected ? "none" : "0px -1px 3px 0px rgba(0, 0, 0, 0.3) inset"};
`;

const AgeButton = styled(Button)`
  width: 71px;
  height: 33px;
  background-color: ${(props) => (props.isSelected ? "#EE90B7" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#EE90B7")};
  box-shadow: ${(props) =>
    props.isSelected ? "none" : "0px -1px 3px 0px rgba(0, 0, 0, 0.3) inset"};
`;

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
  .name {
    margin-bottom: 15px;
  }
  .nickname {
    margin-bottom: 15px;
  }
  .buttonGroup {
    margin-top: 20px;
  }
  .row {
    margin-bottom: 10px;
  }
`;

const JoinInput2 = ({
  name,
  setName,
  nickname,
  setNickname,
  selectedGender,
  setSelectedGender,
  selectedAge,
  setSelectedAge,
  onValidityChange,
}) => {
  useEffect(() => {
    const isNameValid = name.trim() !== "";
    const isNicknameValid = nickname.trim() !== "";
    const isGenderValid = selectedGender !== null;
    const isAgeValid = selectedAge !== null;

    onValidityChange(
      isNameValid && isNicknameValid && isGenderValid && isAgeValid
    );
  }, [name, nickname, selectedGender, selectedAge, onValidityChange]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleAgeSelect = (age) => {
    setSelectedAge(age);
  };

  return (
    <InputBox>
      <div className="inputTitle">이름을 입력해 주세요.</div>
      <input
        type="text"
        className="name"
        placeholder="이름 입력"
        onChange={handleNameChange}
        value={name}
      />
      <div className="inputTitle">닉네임을 입력해 주세요.</div>
      <input
        type="text"
        className="nickname"
        placeholder="닉네임 입력"
        onChange={handleNicknameChange}
        value={nickname}
      />
      <div className="inputTitle">나이와 성별을 선택해 주세요.</div>
      <div className="buttonGroup">
        <div className="row">
          <GenderButton
            isSelected={selectedGender === "남자"}
            onClick={() =>
              handleGenderSelect(selectedGender === "남자" ? null : "남자")
            }
          >
            남자
          </GenderButton>
          <GenderButton
            isSelected={selectedGender === "여자"}
            onClick={() =>
              handleGenderSelect(selectedGender === "여자" ? null : "여자")
            }
          >
            여자
          </GenderButton>
        </div>
        <div className="row">
          <AgeButton
            isSelected={selectedAge === "4학년"}
            onClick={() =>
              handleAgeSelect(selectedAge === "4학년" ? null : "4학년")
            }
          >
            4학년
          </AgeButton>
          <AgeButton
            isSelected={selectedAge === "5학년"}
            onClick={() =>
              handleAgeSelect(selectedAge === "5학년" ? null : "5학년")
            }
          >
            5학년
          </AgeButton>
          <AgeButton
            isSelected={selectedAge === "6학년"}
            onClick={() =>
              handleAgeSelect(selectedAge === "6학년" ? null : "6학년")
            }
          >
            6학년
          </AgeButton>
        </div>
      </div>
    </InputBox>
  );
};

export default JoinInput2;
