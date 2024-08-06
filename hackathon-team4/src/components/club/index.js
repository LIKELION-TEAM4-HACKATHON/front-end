import styled from "styled-components";
import { useState, useEffect, useCallback, useMemo } from "react";
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
  const hashtags = useMemo(
    () => ["전체", "'나' 찾기", "예술과 교양", "야외활동", "실내활동", "배움"],
    []
  );

  const regions = useMemo(
    () => [
      "전체",
      "동작 관악 금천",
      "강서 양천 영등포 구로",
      "은평 서대문 마포",
      "도봉 강북 성북 노원",
      "중랑 동대문 성동 광진",
      "송파 강동",
      "서초 강남",
      "종로 중구 용산",
    ],
    []
  );

  const [selectedHashtags, setSelectedHashtags] = useState(["전체"]);
  const [selectedRegions, setSelectedRegions] = useState(["전체"]);
  const [clubs, setClubs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sort] = useState("createdDate");

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const toggleSelection = (item, setSelectedItems, items) => {
    setSelectedItems((prev) => {
      let updatedSelection;

      if (item === "전체") {
        updatedSelection = prev.includes("전체") ? [] : ["전체"];
      } else {
        if (prev.includes(item)) {
          updatedSelection = prev.filter((i) => i !== item);
        } else {
          updatedSelection = [...prev.filter((i) => i !== "전체"), item];
        }
        if (updatedSelection.length === items.length) {
          updatedSelection = ["전체"];
        }
      }
      return updatedSelection.length === 0 ? ["전체"] : updatedSelection;
    });
  };

  const fetchClubs = useCallback(async () => {
    try {
      const selectedCategoryIds = selectedHashtags.includes("전체")
        ? [0]
        : selectedHashtags.map((hashtag) => hashtags.indexOf(hashtag));

      const selectedRegionIds = selectedRegions.includes("전체")
        ? [0]
        : selectedRegions.map((region) => regions.indexOf(region));

      const promises = selectedCategoryIds.flatMap((categoryId) =>
        selectedRegionIds.map((regionId) =>
          axios.get("http://3.37.154.200:8080/api/clubs/list", {
            params: {
              page: page - 1,
              sort: sort,
              cultureCategoryId: categoryId,
              regionId: regionId,
            },
          })
        )
      );

      const responses = await Promise.all(promises);
      const allClubs = responses.flatMap((response) => response.data.content);
      const uniqueClubs = Array.from(
        new Set(allClubs.map((club) => club.clubId))
      ).map((id) => allClubs.find((club) => club.clubId === id));

      setClubs(uniqueClubs);
      setTotalPages(responses[0].data.totalPages);
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
