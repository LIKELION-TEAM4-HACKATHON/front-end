import styled from "styled-components";
import { useState, useEffect } from "react";

const Button = styled.button`
  border-radius: 4px;
  border: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: KoddiUDOnGothic-Bold;
  font-size: 17px;
  cursor: pointer;
  width: auto;
  height: 77px;
  box-shadow: 0px -1px 3px 0px rgba(0, 0, 0, 0.3) inset;
`;

const RegionButton = styled(Button)`
  background-color: ${(props) => (props.isSelected ? "#eea790" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#eea790")};
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

  .btnContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 columns */
    gap: 30px;
  }
`;

const MakeInput4 = ({ onValidityChange }) => {
  const regions = [
    "동작 관악 금천",
    "중랑 동대문 성동 광진",
    "강서 양천 영등포 구로",
    "송파 강동",
    "은평 서대문 마포",
    "서초 강남",
    "도봉 강북 성북 노원",
    "종로 중구 용산",
  ];

  const [selectedRegion, setSelectedRegion] = useState(null);

  useEffect(() => {
    // Notify parent component about validity
    onValidityChange(selectedRegion !== null);
  }, [selectedRegion, onValidityChange]);

  const toggleSelection = (item) => {
    setSelectedRegion((prev) => (prev === item ? null : item));
  };

  return (
    <InputBox>
      <div className="inputTitle">지역을 선택해 주세요.</div>
      <div className="btnContainer">
        {regions.map((region) => (
          <RegionButton
            key={region}
            isSelected={selectedRegion === region}
            onClick={() => toggleSelection(region)}
          >
            {region.split(" ").slice(0, 2).join(" ")}
            {region.split(" ").length > 2 && (
              <>
                <br />
                {region.split(" ").slice(2).join(" ")}
              </>
            )}
          </RegionButton>
        ))}
      </div>
    </InputBox>
  );
};

export default MakeInput4;
