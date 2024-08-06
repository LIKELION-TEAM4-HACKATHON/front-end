import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import ClubView from "./ClubView";
import axios from "axios";

const ClubSection = styled.section`
  width: 100%;
  height: auto;
  .profileTitle {
    color: #000;
    font-family: GmarketSans;
    font-size: 41.684px;
    font-weight: 700;
    margin: 78px 0 38px 200px;
  }
  .filterBox {
    margin: 0 0 58px 120px;
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
    "무관",
    "동작 관악 금천",
    "강서 양천 영등포 구로",
    "은평 서대문 마포",
    "도봉 강북 성북 노원",
    "중랑 동대문 성동 광진",
    "송파 강동",
    "서초 강남",
    "종로 중구 용산",
  ];

  const [selectedHashtags, setSelectedHashtags] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sort, setSort] = useState("createdDate");

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

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

  const fetchClubs = useCallback(async () => {
    try {
      const categoryId = selectedHashtags.includes("전체")
        ? 0
        : hashtags.indexOf(selectedHashtags[0]) + 1;

      let regionId;
      if (selectedRegions.includes("전체")) {
        regionId = 0;
      } else if (selectedRegions.includes("무관")) {
        regionId = 100;
      } else {
        regionId = regions.indexOf(selectedRegions[0]) + 1;
      }

      const response = await axios.get(
        "http://3.37.154.200:8080/api/clubs/list",
        {
          params: {
            page: page - 1,
            sort: sort,
            categoryId: categoryId,
            regionId: regionId,
          },
        }
      );

      const { content, totalPages } = response.data;
      setClubs(content);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Failed to fetch clubs:", error);
    }
  }, [page, selectedHashtags, selectedRegions, sort, hashtags, regions]);

  useEffect(() => {
    fetchClubs();
  }, [fetchClubs]);

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
      <ClubView
        clubs={clubs}
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </ClubSection>
  );
};

export default Club;
