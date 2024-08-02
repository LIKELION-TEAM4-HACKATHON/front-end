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
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
`;

const regions = [
  { id: 1, name: "동작 관악 금천" },
  { id: 2, name: "중랑 동대문 성동 광진" },
  { id: 3, name: "강서 양천 영등포 구로" },
  { id: 4, name: "송파 강동" },
  { id: 5, name: "은평 서대문 마포" },
  { id: 6, name: "서초 강남" },
  { id: 7, name: "도봉 강북 성북 노원" },
  { id: 8, name: "종로 중구 용산" },
];
const MakeInput4 = ({ onValidityChange, onDataChange, initialData }) => {
  const [selectedRegionId, setSelectedRegionId] = useState(
    initialData && initialData.region ? initialData.region : null
  );

  useEffect(() => {
    onValidityChange(selectedRegionId !== null);
    onDataChange({ regionId: selectedRegionId });
  }, [selectedRegionId, onValidityChange, onDataChange]);

  const toggleSelection = (id) => {
    setSelectedRegionId((prev) => (prev === id ? null : id));
  };

  return (
    <InputBox>
      <div className="inputTitle">지역을 선택해 주세요.</div>
      <div className="btnContainer">
        {regions.map((region) => {
          const parts = region.name.split(" ");
          return (
            <RegionButton
              key={region.id}
              isSelected={selectedRegionId === region.id}
              onClick={() => toggleSelection(region.id)}
            >
              {parts.slice(0, 2).join(" ")}
              {parts.length > 2 && (
                <>
                  <br />
                  {parts.slice(2).join(" ")}
                </>
              )}
            </RegionButton>
          );
        })}
      </div>
    </InputBox>
  );
};

export default MakeInput4;
