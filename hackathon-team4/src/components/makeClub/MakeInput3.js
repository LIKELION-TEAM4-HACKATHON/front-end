import styled from "styled-components";
import { useState, useEffect } from "react";

const Button = styled.button`
  margin-right: 10px;
  border-radius: 4px;
  border: none;
  text-align: center;
  font-family: KoddiUDOnGothic-Bold;
  font-size: 18px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#DF2525" : "#EE90B7")};
  color: ${(props) => (props.selected ? "#fff" : "#fff")};
`;

const NotSelectBtn = styled(Button)`
  width: 107px;
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
    justify-content: space-between;
  }
`;

const GenderButton = styled(Button)`
  font-size: 21px;
  width: 127px;
  height: 60px;
  background-color: ${(props) => (props.isSelected ? "#EEA790" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#EEA790")};
  box-shadow: 0px -1px 3px 0px rgba(0, 0, 0, 0.3) inset;
  cursor: pointer;
`;

const AgeButton = styled(Button)`
  font-size: 21px;
  width: 154px;
  height: 60px;
  background-color: ${(props) => (props.isSelected ? "#EE90B7" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#EE90B7")};
  box-shadow: 0px -1px 3px 0px rgba(0, 0, 0, 0.3) inset;
  cursor: pointer;
`;

const MakeInput3 = ({ onValidityChange }) => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);

  useEffect(() => {
    onValidityChange(selectedGender !== null && selectedAge !== null);
  }, [selectedGender, selectedAge, onValidityChange]);

  const handleGenderSelect = (gender) => {
    if (gender === "제한없음") {
      setSelectedGender("제한없음");
    } else {
      setSelectedGender((prev) =>
        prev === gender ? null : prev === "제한없음" ? gender : gender
      );
    }
  };

  const handleAgeSelect = (age) => {
    if (age === "제한없음") {
      setSelectedAge("제한없음");
    } else {
      setSelectedAge((prev) =>
        prev === age ? null : prev === "제한없음" ? age : age
      );
    }
  };

  const toggleGenderNotSelected = () => {
    if (selectedGender === "제한없음") {
      setSelectedGender(null);
    } else {
      setSelectedGender("제한없음");
    }
  };

  const toggleAgeNotSelected = () => {
    if (selectedAge === "제한없음") {
      setSelectedAge(null);
    } else {
      setSelectedAge("제한없음");
    }
  };

  return (
    <InputBox>
      <div className="inputTitle">성별과 나이를 제한할까요?</div>
      <div className="smallTitle">성별</div>
      <span className="inputContainer">
        <div className="row">
          <GenderButton
            isSelected={
              selectedGender === "남자" || selectedGender === "제한없음"
            }
            onClick={() => handleGenderSelect("남자")}
          >
            남자
          </GenderButton>
          <GenderButton
            isSelected={
              selectedGender === "여자" || selectedGender === "제한없음"
            }
            onClick={() => handleGenderSelect("여자")}
          >
            여자
          </GenderButton>
        </div>
        <NotSelectBtn
          selected={selectedGender === "제한없음"}
          onClick={toggleGenderNotSelected}
        >
          제한없음
        </NotSelectBtn>
      </span>
      <div className="smallTitle">나이</div>
      <span className="inputContainer">
        <div className="row">
          <AgeButton
            isSelected={selectedAge === "4학년" || selectedAge === "제한없음"}
            onClick={() => handleAgeSelect("4학년")}
          >
            4학년
          </AgeButton>
          <AgeButton
            isSelected={selectedAge === "5학년" || selectedAge === "제한없음"}
            onClick={() => handleAgeSelect("5학년")}
          >
            5학년
          </AgeButton>
          <AgeButton
            isSelected={selectedAge === "6학년" || selectedAge === "제한없음"}
            onClick={() => handleAgeSelect("6학년")}
          >
            6학년
          </AgeButton>
        </div>
        <NotSelectBtn
          selected={selectedAge === "제한없음"}
          onClick={toggleAgeNotSelected}
        >
          제한없음
        </NotSelectBtn>
      </span>
    </InputBox>
  );
};

export default MakeInput3;
