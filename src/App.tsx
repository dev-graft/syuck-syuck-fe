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
  display: flex;
  justify-content: center;
  background-color: #fbfbfb;
  border: 1px solid #d4d4d4;
  border-radius: 20px;
  width: 626px;
  height: 600px;
`;

const LoginContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 360px;
  height: 100%;
  width: 100%;
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

const CheckboxLabelWrappwer = styled.span`
  display: flex;
  margin-bottom: 10px;
`
const Checkbox = styled.input`
  height: 24px;
  width: 24px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <AppWrapper>
      <LoginWrapper>
        <LoginContent>
          <LoginTitle>Syuck-Syuck</LoginTitle>
          <Input placeholder="아이디" />
          <Input placeholder="비밀번호" />
          <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', width: '100%'}}>
            <CheckboxLabelWrappwer>
              <Checkbox id="saveID" name="saveID" type="checkbox" />
              <CheckboxLabel htmlFor='saveID'>아이디 저장</CheckboxLabel>
            </CheckboxLabelWrappwer>
            <span>회원가입</span>
          </div>
          <Button>Login</Button>
          <Divider />
          <GoogleLogin />
        </LoginContent>
      </LoginWrapper>
    </AppWrapper>
  );
};
export default App;
