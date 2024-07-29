import styled from "styled-components";

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

const Insta = styled.div`
  font-size: 23px;
  opacity: 0.54;
`;

const Facebook = styled.div`
  font-size: 23px;
  opacity: 0.54;
`;

const ProfileShow = () => {
  return (
    <ProfilShowSection>
      <TopSection>
        <ProfileImage src="images/arrow-right.svg" alt="Profile" />
        <UserInfo>
          <Nickname>닉네임</Nickname>
          <Gender>남</Gender>
        </UserInfo>
        <Age>나이</Age>
      </TopSection>
      <BottomSection>
        <MannerScore>매너 점수</MannerScore>
        <AdditionalInfo>
          <Categories>관심 카테고리</Categories>
          <Insta>인스타그램:</Insta>
          <Facebook>페이스북:</Facebook>
        </AdditionalInfo>
      </BottomSection>
    </ProfilShowSection>
  );
};

export default ProfileShow;
