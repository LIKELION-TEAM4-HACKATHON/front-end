import { useState } from "react";
import axios from "axios";
import JoinInput1 from "./JoinInput1";
import JoinInput2 from "./JoinInput2";
import JoinInput3 from "./JoinInput3";
import JoinInput4 from "./JoinInput4";
import JoinComplete from "./JoinComplete";
import styled from "styled-components";

const api = axios.create({
  baseURL: "/api",
});

const NextButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const NextButton = styled.button`
  width: 228px;
  height: 41px;
  margin-top: 18px;
  background-color: #e02525;
  color: #fff;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: KoddiUDOnGothic-Bold;
  font-size: 24px;
  border: none;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.7);
  padding: 4px 20px;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background-color: #fff;
    color: #e02525;
    cursor: default;
  }
`;
const PrevButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const PrevButton = styled.button`
  background: none;
  border: none;
  color: #000;
  text-align: center;
  display: flex;
  align-items: center;
  font-family: GmarketSans;
  font-size: 22.929px;
  font-weight: 300;
  cursor: pointer;

  img {
    margin-right: 10px;
  }
`;

const JoinModal = ({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  name,
  setName,
  nickname,
  setNickname,
  instagram,
  setInstagram,
  facebook,
  setFacebook,
  selectedGender,
  setSelectedGender,
  selectedAge,
  setSelectedAge,
  selectedHashtags,
  setSelectedHashtags,
}) => {
  const [step, setStep] = useState(1);
  const [isStep1Valid, setIsStep1Valid] = useState(false);
  const [isStep2Valid, setIsStep2Valid] = useState(false);
  const [isStep3Valid, setIsStep3Valid] = useState(false);
  const [isSignupComplete, setIsSignupComplete] = useState(false);

  const handleNext = () => {
    if (step === 1 && isStep1Valid) {
      setStep(2);
    } else if (step === 2 && isStep2Valid) {
      setStep(3);
    } else if (step === 3 && isStep3Valid) {
      setStep(4);
    } else if (step === 4) {
      handleSignup();
    }
  };

  const handlePrevious = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    } else if (step === 4) {
      setStep(3);
    }
  };

  const handleSignup = async () => {
    const data = {
      email,
      password,
      realname: name,
      username: nickname,
      gender: selectedGender,
      age: selectedAge,
      instagramId: instagram,
      facebookId: facebook,
      selfIntroductions: selectedHashtags.map((hashtag) => {
        switch (hashtag) {
          case "나 찾기":
            return 1;
          case "자기 계발":
            return 2;
          case "야외 활동":
            return 3;
          case "힐링":
            return 4;
          case "예술":
            return 5;
          default:
            return 0;
        }
      }),
    };

    console.log("Sending data:", data);

    try {
      const response = await api.post("/auth/signup", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response:", response);

      if (response.status === 200) {
        setIsSignupComplete(true);
      } else {
        console.error("Signup failed with status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred during signup:", error);
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  if (isSignupComplete) {
    return <JoinComplete />;
  }

  return (
    <div>
      {step === 1 && (
        <>
          <JoinInput1
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            onValidityChange={setIsStep1Valid}
          />
          <NextButtonContainer>
            <NextButton onClick={handleNext} disabled={!isStep1Valid}>
              다음
            </NextButton>
          </NextButtonContainer>
        </>
      )}
      {step === 2 && (
        <>
          <PrevButtonContainer>
            <PrevButton onClick={handlePrevious}>
              <img src="images/back-button.png" alt="back-button" />
              뒤로가기
            </PrevButton>
          </PrevButtonContainer>
          <JoinInput2
            name={name}
            setName={setName}
            nickname={nickname}
            setNickname={setNickname}
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
            selectedAge={selectedAge}
            setSelectedAge={setSelectedAge}
            onValidityChange={setIsStep2Valid}
          />
          <NextButtonContainer>
            <NextButton onClick={handleNext} disabled={!isStep2Valid}>
              다음
            </NextButton>
          </NextButtonContainer>
        </>
      )}
      {step === 3 && (
        <>
          <PrevButtonContainer>
            <PrevButton onClick={handlePrevious}>
              <img src="images/back-button.png" alt="back-button" />
              뒤로가기
            </PrevButton>
          </PrevButtonContainer>
          <JoinInput3
            selectedHashtags={selectedHashtags}
            setSelectedHashtags={setSelectedHashtags}
            onValidityChange={setIsStep3Valid}
          />
          <NextButtonContainer>
            <NextButton onClick={handleNext} disabled={!isStep3Valid}>
              다음
            </NextButton>
          </NextButtonContainer>
        </>
      )}
      {step === 4 && (
        <>
          <PrevButtonContainer>
            <PrevButton onClick={handlePrevious}>
              <img src="images/back-button.png" alt="back-button" />
              뒤로가기
            </PrevButton>
          </PrevButtonContainer>
          <JoinInput4
            instagram={instagram}
            setInstagram={setInstagram}
            facebook={facebook}
            setFacebook={setFacebook}
          />
          <NextButtonContainer>
            <NextButton onClick={handleNext}>회원가입</NextButton>
          </NextButtonContainer>
        </>
      )}
    </div>
  );
};

export default JoinModal;
