import styled from "@emotion/styled";

export const MaterialEdit = styled.div``;

export const MaterialEditForm = styled.form``;

export const MaterialEditTitle = styled.h3``;

export const MaterialEditInput = styled.input`
  width: 450px;
  height: 30px;
  padding: 10px 10px 10px 15px;
  border-radius: 5px 0 0 5px;
  border: 1px solid #848484;
  background-color: #f2f2f2;
  font-size: 16px;

  &::placeholder {
    vertical-align: middle;
  }
`;

export const MaterialEditButton = styled.button`
  width: 60px;
  height: 52px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 0 5px 5px 0;
  border: 1px solid #848484;
  background-color: #f8aa45;

  cursor: pointer;

  &:hover {
    background-color: #c68837;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;
