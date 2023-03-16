import styled from "@emotion/styled";

export const AuthLayout = styled.div`
  width: 100%;
  height: 95vh;
  margin: auto;
  max-width: 750px;
`;

export const AuthContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 120px;
  height: 120px;

  position: relative;
  bottom: 30px;
`;

export const GoogleLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 4rem;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 3px 3px #d8d8d8;
  background-color: white;

  cursor: pointer;
`;

export const InputContainer = styled.div`
  display: flex;
  padding-top: 7rem;
  padding-bottom: 0.4rem;
`;

export const LinkRegister = styled.span`
  color: #a4a4a4;
  text-decoration: underline;
  margin-left: 27.3rem;

  cursor: pointer;

  &:hover {
    color: gray;
    transition: all 0.1s ease-in-out;
  }
`;

export const LoginButton = styled.button`
  width: 12rem;
  height: 3.5rem;
  border-radius: 28px;
  box-shadow: 3px 3px #d8d8d8;
  border: 1px solid black;
  background-color: #f6c679;
  font-size: 1.3rem;
  margin-top: 2.5rem;
  cursor: pointer;

  &:hover {
    background-color: #fe9a2e;
    transition: all 0.3s ease-in-out;
  }
`;
