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
  .categories,
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
    margin-bottom: 30px;
    box-sizing: border-box;
  }

  .nickname {
    width: 50%;
  }

  .categories {
    width: 100%;
  }

  .socialContainer {
    display: flex;
    width: 100%;
  }

  .socialItem {
    display: flex;
    width: 50%;
    flex-direction: column;
    margin-right: 50px;
    box-sizing: border-box;
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

const ProfileEdit = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          throw new Error("No token found");
        }

        console.log("Token found:", token);

        const response = await api.get("/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Profile data fetched:", response.data);

        setProfileData(response.data);
      } catch (error) {
        console.error("Failed to fetch profile data", error);
      }
    };

    fetchProfileData();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  const categoriesWithHash = profileData.selfIntroductions
    .map((category) => `#${category.name}`)
    .join(" ");

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
          <div className="nickname">{profileData.username}</div>
          <div className="infoTitle">자기소개</div>
          <div className="categories">{categoriesWithHash}</div>
          <div className="socialContainer">
            <div className="socialItem">
              <div className="infoTitle">인스타그램 아이디</div>
              <div className="insta">{profileData.instagramId}</div>
            </div>
            <div className="socialItem">
              <div className="infoTitle">페이스북 아이디</div>
              <div className="facebook">{profileData.facebookId}</div>
            </div>
          </div>
        </RightSection>
      </ContentWrapper>
      <Btn>프로필 수정하기</Btn>
    </ProfileEditSection>
  );
};

export default ProfileEdit;
