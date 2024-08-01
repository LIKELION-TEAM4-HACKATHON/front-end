import { useState } from "react";
import MakeInput1 from "./MakeInput1";
import MakeInput2 from "./MakeInput2";
import MakeInput3 from "./MakeInput3";
import MakeInput4 from "./MakeInput4";
import MakeComplete from "./MakeComplete";
import styled from "styled-components";
import api from "../../api";

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

const MakeModal = () => {
  const [step, setStep] = useState(1);
  const [isStep1Valid, setIsStep1Valid] = useState(false);
  const [isStep2Valid, setIsStep2Valid] = useState(false);
  const [isStep3Valid, setIsStep3Valid] = useState(false);
  const [isStep4Valid, setIsStep4Valid] = useState(false);
  const [isMakeComplete, setIsMakeComplete] = useState(false);

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

  //수정해야됨
  const handleMaking = async () => {};

  return (
    <div>
      {step === 1 && (
        <>
          <MakeInput1 onValidityChange={setIsStep1Valid} />
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
          <MakeInput2 onValidityChange={setIsStep2Valid} />
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
          <MakeInput3 onValidityChange={setIsStep3Valid} />
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
          <MakeInput4 onValidityChange={setIsStep4Valid} />
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
