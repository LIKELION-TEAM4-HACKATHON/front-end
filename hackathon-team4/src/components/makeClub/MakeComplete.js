import styled from "styled-components";

const InputBox = styled.div`
  margin-top: 30px;
  font-family: KoddiUDOnGothic-Regular;
  font-size: 21px;
  text-align: center;

  .inputTitle {
    margin-bottom: 11px;
    font-size: 21px;
  }
`;

const MakeComplete = () => {
  return (
    <InputBox>
      <div className="inputTitle">모임 생성 완료!</div>
      <div className="inputTitle">
        생성된 모임은 나의 모임에서 확인하실 수 있어요.
      </div>
    </InputBox>
  );
};

export default MakeComplete;
