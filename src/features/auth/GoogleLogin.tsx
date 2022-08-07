import { GoogleLogin } from 'react-google-login';

const clientid: string = process.env.REACT_APP_GOOGLE_CLIENTID || '';

const GoogleAuth = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSuccessGoogle = (response: any) => {
    alert('로그인 되었습니다');
    console.log('response = ', response);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFailureGoogle = (error: any) => {
    console.log(error);
  };

  return (
    <GoogleLogin
      clientId={clientid}
      buttonText={'구글 로그인'}
      onSuccess={onSuccessGoogle}
      onFailure={onFailureGoogle}
    />
  );
};

export default GoogleAuth;
