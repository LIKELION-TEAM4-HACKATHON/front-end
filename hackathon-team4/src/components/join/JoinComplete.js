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

const JoinComplete = () => {
  return (
    <InputBox>
      <div className="inputTitle">정상적으로 회원가입 되었습니다!</div>
    </InputBox>
  );
};

export default JoinComplete;
