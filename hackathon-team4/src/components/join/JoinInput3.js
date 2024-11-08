import styled from "styled-components";
import { useEffect } from "react";

const InputBox = styled.div`
  margin-top: 30px;
  font-family: KoddiUDOnGothic-Regular;
  font-size: 21px;
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
  .hashtagBox {
    color: #7c7c7c;
    width: 100%;
    height: 60px;
    background: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 2px 14.7px 0px rgba(0, 0, 0, 0.1) inset;
    display: block;
    box-sizing: border-box;
    font-size: 21px;
    font-family: KoddiUDOnGothic-Regular;
    margin-bottom: 10px;
    padding: 10px;
    align-content: center;
  }
`;

const Button = styled.button`
  margin: 0 5px;
  border-radius: 4px;
  border: none;
  text-align: center;
  font-family: KoddiUDOnGothic-Bold;
  font-size: 18px;
  cursor: pointer;
`;

const HashtagButton = styled(Button)`
  width: calc(100% / 5 - 10px);
  height: 35px;
  background-color: ${(props) => (props.isSelected ? "#EEA790" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#EEA790")};
  box-shadow: 0px -1px 3px 0px rgba(0, 0, 0, 0.3) inset;
  margin-bottom: 10px;
`;

const hashtags = ["'나' 찾기", "예술과 교양", "야외활동", "실내활동", "배움"];

const JoinInput3 = ({
  selectedHashtags,
  setSelectedHashtags,
  onValidityChange,
}) => {
  const handleButtonClick = (hashtag) => {
    setSelectedHashtags((prev) => {
      if (prev.includes(hashtag)) {
        return prev.filter((item) => item !== hashtag);
      } else if (prev.length < 3) {
        return [...prev, hashtag];
      } else {
        return prev;
      }
    });
  };

  useEffect(() => {
    onValidityChange(selectedHashtags.length > 0);
  }, [selectedHashtags, onValidityChange]);

  return (
    <InputBox>
      <div className="inputContainer">
        <span className="inputTitle">무엇에 관심이 있으신가요?</span>
        <span className="rule">최대 3개 선택</span>
      </div>
      <div className="hashtagBox">
        {selectedHashtags.map((hashtag) => `#${hashtag}`).join(" ")}
      </div>
      {hashtags.map((hashtag) => (
        <HashtagButton
          key={hashtag}
          isSelected={selectedHashtags.includes(hashtag)}
          onClick={() => handleButtonClick(hashtag)}
        >
          #{hashtag}
        </HashtagButton>
      ))}
    </InputBox>
  );
};

export default JoinInput3;
