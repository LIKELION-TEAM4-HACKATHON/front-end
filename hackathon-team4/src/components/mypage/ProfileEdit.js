import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

const ProfileEditSection = styled.section`
  width: 100%;
  height: auto;
  margin: 47px 72px;
  font-family: KoddiUDOnGothic-Regular;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  gap: 50px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 157px;
  height: 157px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ImgEdit = styled.div`
  font-size: 15px;
  color: #007bff;
  cursor: pointer;
  margin-bottom: 20px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .infoTitle {
    color: #7c7c7c;
    font-family: KoddiUDOnGothic-Bold;
    font-size: 15px;
    margin-bottom: 10px;
    margin-left: 10px;
  }

  .nickname,
  .insta,
  .facebook {
    border-radius: 13px;
    background: #fff;
    box-shadow: 0px 2px 14.7px 0px rgba(0, 0, 0, 0.1) inset;
    height: 55px;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    font-size: 23px;
    box-sizing: border-box;
  }

  .nickname input,
  .categories input,
  .insta input,
  .facebook input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 23px;
    background: transparent;
  }

  .nickname {
    width: 50%;
    margin-bottom: 30px;
  }

  .categories {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border-radius: 13px;
    background: #fff;
    box-shadow: 0px 2px 14.7px 0px rgba(0, 0, 0, 0.1) inset;
    height: 55px;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    font-size: 23px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  .socialContainer {
    display: flex;
    width: 100%;
    margin-top: 30px;
  }

  .socialItem {
    display: flex;
    width: 50%;
    flex-direction: column;
    margin-right: 50px;
    box-sizing: border-box;
  }

  .socialItem:last-child {
    margin-right: 0;
  }

  input {
    font-family: KoddiUDOnGothic-Regular;
  }
`;

const Btn = styled.button`
  width: 100%;
  height: 60px;
  background-color: #cb3939;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.5) inset;
  text-align: center;
  font-family: KoddiUDOnGothic-Bold;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  margin-top: auto;
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
  width: 30%;
  height: 35px;
  background-color: ${(props) => (props.$isSelected ? "#EEA790" : "#fff")};
  color: ${(props) => (props.$isSelected ? "#fff" : "#EEA790")};
  box-shadow: ${(props) =>
    props.$isSelected ? "none" : "0px -1px 3px 0px rgba(0, 0, 0, 0.3) inset"};
  display: block;
  padding: 0 10px;
`;

const HashtagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const hashtagToId = {
  "'나' 찾기": 1,
  "예술과 교양": 2,
  야외활동: 3,
  실내활동: 4,
  배움: 5,
};

const idToHashtag = {
  1: "'나' 찾기",
  2: "예술과 교양",
  3: "야외활동",
  4: "실내활동",
  5: "배움",
};

const ProfileEdit = () => {
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [selectedHashtags, setSelectedHashtags] = useState([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await api.get("/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Fetched data:", response.data);

        setProfileData(response.data);

        const initialCategories = response.data.selfIntroductions.map(
          (item) => idToHashtag[item.cultureCategoryId] || ""
        );

        setFormData({
          username: response.data.username,
          categories: initialCategories.join(" "),
          instagramId: response.data.instagramId,
          facebookId: response.data.facebookId,
        });
        setSelectedHashtags(initialCategories);
      } catch (error) {
        console.error("Failed to fetch profile data", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSaveChanges = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        throw new Error("No token found");
      }

      const requestData = {
        username: formData.username,
        selfIntroductions: selectedHashtags.map(
          (hashtag) => hashtagToId[hashtag]
        ),
        instagramId: formData.instagramId,
        facebookId: formData.facebookId,
      };

      console.log("Sending data:", requestData);

      await api.put("/users/me", requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProfileData({
        ...profileData,
        ...formData,
        selfIntroductions: selectedHashtags.map(
          (hashtag) => hashtagToId[hashtag]
        ),
      });
      setIsEditing(false);
    } catch (error) {
      console.error(
        "Failed to update profile data",
        error.response?.data || error.message
      );
    }
  };

  const handleHashtagButtonClick = (hashtag) => {
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

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileEditSection>
      <ContentWrapper>
        <LeftSection>
          <div className="profileImage">
            <ProfileImage src="images/arrow-right.svg" alt="Profile" />
          </div>
          <ImgEdit>프로필 이미지 수정</ImgEdit>
        </LeftSection>
        <RightSection>
          <div className="infoTitle">닉네임</div>
          <div className="nickname">
            {isEditing ? (
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            ) : (
              formData.username
            )}
          </div>
          <div className="infoTitle">자기소개</div>
          <div className="categories">
            {isEditing ? (
              <div className="hashtagBox">
                {selectedHashtags.map((hashtag) => `#${hashtag}`).join(" ")}
              </div>
            ) : (
              selectedHashtags.map((hashtag) => (
                <span key={hashtag}>#{hashtag}&nbsp;</span>
              ))
            )}
          </div>
          {isEditing ? (
            <HashtagContainer>
              {Object.keys(hashtagToId).map((hashtag) => (
                <HashtagButton
                  key={hashtag}
                  $isSelected={selectedHashtags.includes(hashtag)}
                  onClick={() => handleHashtagButtonClick(hashtag)}
                >
                  #{hashtag}
                </HashtagButton>
              ))}
            </HashtagContainer>
          ) : null}
          <div className="socialContainer">
            <div className="socialItem">
              <div className="infoTitle">인스타그램 아이디</div>
              <div className="insta">
                {isEditing ? (
                  <input
                    type="text"
                    name="instagramId"
                    value={formData.instagramId}
                    onChange={handleInputChange}
                  />
                ) : (
                  formData.instagramId
                )}
              </div>
            </div>
            <div className="socialItem">
              <div className="infoTitle">페이스북 아이디</div>
              <div className="facebook">
                {isEditing ? (
                  <input
                    type="text"
                    name="facebookId"
                    value={formData.facebookId}
                    onChange={handleInputChange}
                  />
                ) : (
                  formData.facebookId
                )}
              </div>
            </div>
          </div>
        </RightSection>
      </ContentWrapper>
      <Btn onClick={isEditing ? handleSaveChanges : () => setIsEditing(true)}>
        {isEditing ? "저장" : "프로필 수정하기"}
      </Btn>
    </ProfileEditSection>
  );
};

export default ProfileEdit;
