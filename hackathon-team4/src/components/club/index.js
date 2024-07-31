import styled from "styled-components";
import { useState, useEffect } from "react";
import ClubView from "./ClubView";

const ClubSection = styled.section`
  width: 100%;
  height: auto;
  margin-bottom: 70px;

  .profileTitle {
    color: #000;
    font-family: GmarketSans;
    font-size: 41.684px;
    font-weight: 700;
    margin: 78px 0 38px 200px;
  }

  .filterBox {
    margin: 0 0 58px 200px;
  }

  .btnContainer {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const Button = styled.button`
  border-radius: 4px;
  border: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: KoddiUDOnGothic-Bold;
  font-size: 16px;
  cursor: pointer;
  width: 110px;
  height: 62px;
  box-shadow: 0px -1px 3px 0px rgba(0, 0, 0, 0.3) inset;
`;

const HashtagButton = styled(Button)`
  background-color: ${(props) => (props.isSelected ? "#df2525" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#df2525")};
`;

const RegionButton = styled(Button)`
  background-color: ${(props) => (props.isSelected ? "#eea790" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#eea790")};
`;

const Club = () => {
  const hashtags = [
    "전체",
    "'나' 찾기",
    "예술과 교양",
    "야외활동",
    "실내활동",
    "배움",
  ];
  const regions = [
    "전체",
    "동작 관악 금천",
    "중랑 동대문 성동 광진",
    "강서 양천 영등포 구로",
    "송파 강동",
    "은평 서대문 마포",
    "서초 강남",
    "도봉 강북 성북 노원",
    "종로 중구 용산",
  ];

  const [selectedHashtags, setSelectedHashtags] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);

  const toggleSelection = (item, setSelectedItems, items) => {
    setSelectedItems((prev) => {
      if (item === "전체") {
        if (prev.includes("전체")) {
          return [];
        }
        return ["전체", ...items.filter((i) => i !== "전체")];
      } else {
        const updatedSelection = prev.includes(item)
          ? prev.filter((i) => i !== item)
          : [...prev.filter((i) => i !== "전체"), item];

        if (prev.includes("전체")) {
          return updatedSelection;
        }
        if (updatedSelection.length === items.length - 1) {
          return ["전체", ...updatedSelection];
        }
        return updatedSelection;
      }
    });
  };

  useEffect(() => {
    const handleChange = () => {
      setSelectedHashtags((prev) => {
        if (
          prev.includes("전체") &&
          !hashtags.every((item) => prev.includes(item))
        ) {
          return prev.filter((item) => item !== "전체");
        }
        return prev;
      });

      setSelectedRegions((prev) => {
        if (
          prev.includes("전체") &&
          !regions.every((item) => prev.includes(item))
        ) {
          return prev.filter((item) => item !== "전체");
        }
        return prev;
      });
    };

    handleChange();
  }, [selectedHashtags, selectedRegions]);

  return (
    <ClubSection>
      <div className="profileTitle">모임 찾기</div>
      <div className="filterBox">
        <div className="btnContainer">
          {hashtags.map((hashtag) => (
            <HashtagButton
              key={hashtag}
              isSelected={selectedHashtags.includes(hashtag)}
              onClick={() =>
                toggleSelection(hashtag, setSelectedHashtags, hashtags)
              }
            >
              {hashtag}
            </HashtagButton>
          ))}
        </div>
        <div className="btnContainer">
          {regions.map((region) => (
            <RegionButton
              key={region}
              isSelected={selectedRegions.includes(region)}
              onClick={() =>
                toggleSelection(region, setSelectedRegions, regions)
              }
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
      </div>
      <ClubView />
    </ClubSection>
  );
};

export default Club;
