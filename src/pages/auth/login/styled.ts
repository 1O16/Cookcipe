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

  background-color: skyblue;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;

  position: relative;
  bottom: 150px;
`;

export const GoogleLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 4rem;
  font-size: 1.5rem;
  border-radius: 5px;
  border: none;
  background-color: green;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  display: flex;
`;
