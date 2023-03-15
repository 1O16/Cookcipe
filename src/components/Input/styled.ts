import styled from "@emotion/styled";

export const InputElements = styled.input`
  width: 20rem;
  height: 50px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background: none;
  font-size: 20px;
  &:focus {
    border-color: #f68430;
    outline: none;
  }
  &:hover {
    border-color: #f68430;
    transition: all 0.3s ease-in-out;
  }
  &::placeholder {
    color: gray;
  }
`;
