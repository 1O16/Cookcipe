import styled from "@emotion/styled";

export const InputElements = styled.input`
  width: 17rem;
  height: 50px;
  border: none;
  border-bottom: 1px solid #848484;
  background: none;
  font-size: 20px;
  &:focus {
    border-color: #f68430;
    outline: none;
    &::placeholder {
      color: #f68430;
    }
  }
  &:hover {
    border-color: #f68430;
    transition: all 0.3s ease-in-out;
    &::placeholder {
      color: #f68430;
    }
  }
  &::placeholder {
    color: gray;
  }
`;
