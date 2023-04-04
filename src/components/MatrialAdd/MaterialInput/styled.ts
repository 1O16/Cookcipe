import styled from "@emotion/styled";

export const MaterialForm = styled.form`
  width: 590px;
  display: flex;
`;

export const MaterialInput = styled.input`
  width: 450px;
  height: 30px;
  padding: 10px 10px 6px 15px;
  border-radius: 5px 0 0 5px;
  border: 1px solid #848484;
  background-color: #f2f2f2;
  font-size: 16px;

  &::placeholder {
    vertical-align: middle;
  }
`;

export const MaterialAddButton = styled.button`
  width: 60px;
  height: 47px;
  border-radius: 0 5px 5px 0;
  border: 1px solid #848484;
`;
