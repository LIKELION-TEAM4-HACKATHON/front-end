import { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileEdit from "./ProfileEdit";
import ProfileShow from "./ProfileShow";
import MyReviews from "./MyReviews";
import axios from "axios";

const ProfileSection = styled.section`
  width: 100%;
  height: auto;
  .profileTitle {
    color: #000;
    font-family: GmarketSans;
    font-size: 41.684px;
    font-weight: 700;
    margin: 78px 0 78px 200px;
  }

  .container {
    display: flex;
    align-items: flex-start;
  }

  .tabContainer {
    margin-left: 24px;
  }

  .tabBox {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    width: 161px;
    height: 196px;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25) inset;
    text-align: center;
    font-family: KoddiUDOnGothic-Bold;
    font-size: 21px;
    justify-content: center;
  }

  .tab {
    width: 125.297px;
    height: 42.251px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #7c7c7c;
    background-color: #fff;
    border-radius: 5px;
  }

  .active {
    background-color: #cb3939;
    color: #fff;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.7);
  }

  .profileContainerWrapper {
    width: 100%;
    margin: 0 100px;
  }

  .profileContainer {
    height: auto;
    margin-bottom: 70px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    border-radius: 13px;
    background: #fff;
    box-shadow: 0px 6.787px 23.923px 0px rgba(0, 0, 0, 0.25);
  }
  
  .reviewContainer {

    background-color: #fceeec;
    width: 100%;
  }

  .reviewTitle {
    font-family: GmarketSans;
    font-size: 30px;
    margin-bottom: 20px;
    margin-left: 200px;
  }

`;

const Profile = () => {
  const [reviews, setReviews] = useState([]);
  const [memberInfo, setMemberInfo] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
          const token = localStorage.getItem("accessToken");
          if (!token) {
            throw new Error("No token found");
          }
  
          console.log("Token found:", token);
  
          const response = await axios.get(
            "http://3.37.154.200:8080/api/users/me",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
  
          console.log("Profile data fetched:", response.data);

          setMemberInfo(response.data);
      
          setReviews(response.data.reviews);
        } catch (error) {
          console.error("Failed to fetch profile data", error);
        }
    };
    fetchReviews();
  }, []);

  const [activeTab, setActiveTab] = useState("show");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <ProfileSection>
      <div className="profileTitle">프로필</div>
      <div className="container">
        <div className="tabContainer">
          <div className="tabBox">
            <div
              className={`tab ${activeTab === "show" ? "active" : ""}`}
              onClick={() => handleTabClick("show")}
            >
              프로필
            </div>
            <div
              className={`tab ${activeTab === "edit" ? "active" : ""}`}
              onClick={() => handleTabClick("edit")}
            >
              정보수정
            </div>
          </div>
        </div>
               <div className="profileContainerWrapper">
          <div className="profileContainer">
            {activeTab === "show" && <ProfileShow />}
            {activeTab === "edit" && <ProfileEdit />}
          </div>
        </div>
      </div>
      <div className="reviewTitle">{memberInfo.username} 님이 쓴 후기</div>
      {activeTab === "show" && 
        <div className="reviewContainer">
            <MyReviews reviews={reviews}/>
        </div> 
        }
    </ProfileSection>
  );
};

export default Profile;
