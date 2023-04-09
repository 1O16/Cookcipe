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
  padding: 25px 0;
  width: 100%;
`;

export const ForImageContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

export const RecipeFormContainer = styled.div`
  width: 75%;
`;

export const PropsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 0;
`;

export const PropsTitle = styled.p`
  font-size: 20px;
  width: 15%;
`;

export const WriteRecipeTitle = styled.input`
  width: 450px;
  height: 40px;
  padding: 6px 10px 6px 15px;
  font-size: 16px;
  background-color: #f2f2f2;
  border: 1px solid #848484;
  border-radius: 5px;

  &::placeholder {
    vertical-align: middle;
  }
`;

export const WriteRecipeDesc = styled.textarea`
  width: 450px;
  height: 80px;
  padding: 10px 10px 6px 15px;
  font-size: 16px;
  background-color: #f2f2f2;
  border: 1px solid #848484;
  border-radius: 5px;

  &::placeholder {
    vertical-align: middle;
  }
`;

export const CategorySelector = styled.select`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;

  cursor: pointer;
`;

export const RecipeImage = styled.input`
  width: 200px;
  height: 195px;
  background-color: #e6e6e6;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  z-index: 1;
  cursor: pointer;

  &::file-selector-button {
    display: none;
  }
  &:hover {
    opacity: 50%;
  }
`;

export const PreviewImage = styled.img`
  position: absolute;
  z-index: 2;
  width: 200px;
  height: 200px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;

export const ImageDeleteBtn = styled.button`
  position: absolute;
  margin-left: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  color: white;
  background-color: black;
  opacity: 65%;
  cursor: pointer;
  z-index: 4;

  &:hover {
    opacity: 100%;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const MaterialTemplate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  wideth: 100%;
`;

export const RecipeSubmitButton = styled.button`
  position: absolute;

  width: 220px;
  height: 50px;
  background-color: #f8aa45;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid black;
  border-radius: 3px;
  margin-top: 250px;

  cursor: pointer;

  &:hover {
    background-color: #ec971f;
  }
`;
