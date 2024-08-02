import { useState, useEffect } from "react";
import styled from "styled-components";
import MakeInput1 from "./MakeInput1";
import MakeInput2 from "./MakeInput2";
import MakeInput3 from "./MakeInput3";
import MakeInput4 from "./MakeInput4";
import MakeComplete from "./MakeComplete";
import api from "../../api";

const NextButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NextButton = styled.button`
  width: 100%;
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

const MakeModal = ({ cultureId }) => {
  const [step, setStep] = useState(1);
  const [isStep1Valid, setIsStep1Valid] = useState(false);
  const [isStep2Valid, setIsStep2Valid] = useState(false);
  const [isStep3Valid, setIsStep3Valid] = useState(false);
  const [isStep4Valid, setIsStep4Valid] = useState(false);
  const [isMakeComplete, setIsMakeComplete] = useState(false);

  const [step1Data, setStep1Data] = useState({});
  const [step2Data, setStep2Data] = useState({});
  const [step3Data, setStep3Data] = useState({});
  const [step4Data, setStep4Data] = useState({});

  useEffect(() => {
    if (isMakeComplete) {
      console.log("모임 생성 완료");
      return <MakeComplete />;
    }
  });

  const handleNext = async () => {
    if (step === 1 && isStep1Valid) {
      setStep(2);
    } else if (step === 2 && isStep2Valid) {
      setStep(3);
    } else if (step === 3 && isStep3Valid) {
      setStep(4);
    } else if (step === 4 && isStep4Valid) {
      await handleMaking();
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

  const handleMaking = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        console.error("No access token found");
        return;
      }
      console.log("Data to Submit:", {
        cultureId,
        regionId: step4Data.regionId,
        title: step1Data.title,
        meetingDate: step2Data.meetingDate,
        maxParticipant: step2Data.maxParticipant,
        content: step1Data.content,
        genderRestriction: step3Data.genderRestriction,
        ageRestriction: step3Data.ageRestriction,
      });

      await api.post(
        "/clubs",
        {
          cultureId,
          regionId: step4Data.regionId,
          title: step1Data.title,
          meetingDate: step2Data.meetingDate,
          maxParticipant: step2Data.maxParticipant,
          content: step1Data.content,
          genderRestriction: step3Data.genderRestriction,
          ageRestriction: step3Data.ageRestriction,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Club created successfully");
      setIsMakeComplete(true);
    } catch (error) {
      console.error("모임 생성 실패", error);
    }
  };

  return (
    <div>
      {step === 1 && (
        <>
          <MakeInput1
            initialData={step1Data}
            onValidityChange={setIsStep1Valid}
            onDataChange={setStep1Data}
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
              <img src="/images/back-button.png" alt="back-button" />
              뒤로가기
            </PrevButton>
          </PrevButtonContainer>
          <MakeInput2
            initialData={step2Data}
            onValidityChange={setIsStep2Valid}
            onDataChange={setStep2Data}
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
              <img src="/images/back-button.png" alt="back-button" />
              뒤로가기
            </PrevButton>
          </PrevButtonContainer>
          <MakeInput3
            initialData={step3Data}
            onValidityChange={setIsStep3Valid}
            onDataChange={setStep3Data}
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
              <img src="/images/back-button.png" alt="back-button" />
              뒤로가기
            </PrevButton>
          </PrevButtonContainer>
          <MakeInput4
            initialData={step4Data}
            onValidityChange={setIsStep4Valid}
            onDataChange={setStep4Data}
          />
          <NextButtonContainer>
            <NextButton onClick={handleNext} disabled={!isStep4Valid}>
              모임 생성하기
            </NextButton>
          </NextButtonContainer>
        </>
      )}
      {isMakeComplete && <MakeComplete />}
    </div>
  );
};

export default MakeModal;
