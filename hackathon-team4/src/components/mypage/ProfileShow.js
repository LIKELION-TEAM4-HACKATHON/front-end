import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

const ProfilShowSection = styled.section`
  width: 100%;
  height: auto;
  margin: 47px 72px;
  font-family: KoddiUDOnGothic-Regular;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopSection = styled.div`
  display: flex;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const ProfileImage = styled.img`
  width: 157px;
  height: 157px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserInfo = styled.div`
  display: flex;
  margin-left: 20px;
`;

const Nickname = styled.div`
  font-size: 23px;
  display: flex;
  width: auto;
  height: 37px;
  padding: 2px 15px;
  border-radius: 6px;
  background-color: #cb5959;
  justify-content: center;
  color: #fff;
  text-align: center;
  align-items: center;
  margin-right: 10px;
`;

const Gender = styled.div`
  font-size: 23px;
  display: flex;
  width: auto;
  height: 37px;
  padding: 2px 15px;
  border-radius: 6px;
  background-color: #ff7575;
  justify-content: center;
  color: #fff;
  text-align: center;
  align-items: center;
`;

const Age = styled.div`
  font-size: 23px;
  margin-left: auto;
`;

const MannerScore = styled.div`
  font-size: 23px;
  span {
    color: #e02525;
    margin-left: 23px;
  }
`;

const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
`;

const Categories = styled.div`
  font-size: 26px;
  margin-bottom: 5px;
`;

const SocialID = styled.div`
  font-size: 23px;
  opacity: 0.54;
`;

const ProfileShow = () => {
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
    <ProfilShowSection>
      <TopSection>
        <ProfileImage
          src={profileData.profileImageUrl || "images/arrow-right.svg"}
          alt="Profile"
        />
        <UserInfo>
          <Nickname>{profileData.username}</Nickname>
          <Gender>{profileData.gender}</Gender>
        </UserInfo>
        <Age>{profileData.age}</Age>
      </TopSection>
      <BottomSection>
        <MannerScore>
          매너 점수
          <span>{profileData.averageMannersScore}점</span>
        </MannerScore>
        <AdditionalInfo>
          <Categories>{categoriesWithHash}</Categories>
          {profileData.instagramId && (
            <SocialID>
              인스타그램 아이디:&nbsp;{profileData.instagramId}
            </SocialID>
          )}
          {profileData.facebookId && (
            <SocialID>페이스북 아이디:&nbsp;{profileData.facebookId}</SocialID>
          )}
        </AdditionalInfo>
      </BottomSection>
    </ProfilShowSection>
  );
};

export default ProfileShow;
