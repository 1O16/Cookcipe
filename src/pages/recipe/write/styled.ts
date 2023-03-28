import styled from "@emotion/styled";

export const WriteHeader = styled.div`
  width: 97%;
  height: 60px;
  display: flex;
  font-size: 30px;
  font-weight: 600;
  padding: 0 18.5px;
  border-bottom: 1px solid #848484;
`;

export const WriteBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: orange;
  padding: 20px 0;
  width: 100%;
`;

export const ForImageContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  background-color: gray;
`;

export const RecipeFormContainer = styled.div`
  width: 75%;
`;

export const PropsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f5f5f5;
  padding: 5px 0;
`;

export const PropsTitle = styled.p`
  font-size: 20px;
  width: 15%;
`;

export const WriteRecipeTitle = styled.input`
  width: 450px;
  height: 40px;
  padding: 6px 10px 6px 15px;
  font-size: 20px;
  background-color: #e2e2e2;
  border: 1px solid #848484;
  border-radius: 5px;

  &::placeholder {
    font-size: 16px;
    vertical-align: middle;
  }
`;

export const RecipeImage = styled.input`
  width: 200px;
  height: 200px;
  background-color: #f2f2f2;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;

export const CategorySelector = styled.select`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
`;
