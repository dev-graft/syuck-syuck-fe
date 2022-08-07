import React from 'react';
// eslint-disable-next-line import/no-unresolved
import GoogleLogin from './features/auth/GoogleLogin';
import styled from '@emotion/styled';
// import GoogleLogout from './features/auth/GoogleLogout';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const LoginWrapper = styled.div`
  background-color: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 626px;
  height: 600px;
  border: 1px solid #d4d4d4;
  border-radius: 20px;
`;

const LoginTitle = styled.span`
  width: 297px;
  height: 68px;
  top: 250px;
  font-weight: 700;
  font-size: 45px;
  color: #003550;
  border-radius: 8px;
`;

const Input = styled.input`
  height: 35px;
  width: 328px;
  padding: 12px 16px;
  margin-bottom: 20px;
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: #eaeaea;
  border: none;
  border-radius: 8px;
`;

const Button = styled.button`
  height: 50px;
  width: 360px;
  padding: 12px 20px;
  line-height: 19px;
  font-size: 16px;
  text-align: center;
  color: #ffff;
  background-color: #269ad4;
  border: none;
  border-radius: 8px;
`;

const Divider = styled.hr`
  width: 320.5px;
  height: 0px;
  margin: 20px;
  background-color: rgba(134, 134, 134, 0.5);
`;

const App = () => {
  return (
    <AppWrapper>
      <LoginWrapper>
        <LoginTitle>Syuck-Syuck</LoginTitle>
        <Input placeholder="아이디" />
        <Input placeholder="비밀번호" />
        <Button>Login</Button>
        <Divider />
        <GoogleLogin />
      </LoginWrapper>
    </AppWrapper>
  );
};
export default App;
