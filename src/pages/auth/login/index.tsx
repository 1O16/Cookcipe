import react from "next";
import Link from "next/link";
import Input from "../../../components/Input";

import * as S from "./styled";

const Login = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }}
      >
        <path
          fill="#F7B348"
          fill-opacity="0.7"
          d="M0,256L34.3,218.7C68.6,181,137,107,206,106.7C274.3,107,343,181,411,213.3C480,245,549,235,617,202.7C685.7,171,754,117,823,122.7C891.4,128,960,192,1029,197.3C1097.1,203,1166,149,1234,160C1302.9,171,1371,245,1406,282.7L1440,320L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <S.AuthLayout>
        <S.AuthContainer>
          <Link href="/">
            <S.Logo src="/img/logo.png" alt="Logo" />
          </Link>
          <S.GoogleLoginButton>
            <img
              src="/img/google.png"
              alt="Google Logo"
              style={{ marginRight: "20px", width: "50px" }}
            />
            Google 로그인
          </S.GoogleLoginButton>
          <S.InputContainer>
            <Input placeholder="아이디" />
            <Input placeholder="비밀번호" />
          </S.InputContainer>
        </S.AuthContainer>
      </S.AuthLayout>
    </>
  );
};

export default Login;
