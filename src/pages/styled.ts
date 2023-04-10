import styled from "@emotion/styled";

export const RecipePreviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PropsHeader = styled.h1``;

export const PropsDesc = styled.span`
  font-size: 17px;
  color: #fac37c;
`;

export const RandomRecipePreview = styled.div`
  display: flex;
  align-items: center;
  width: 78.5%;
  margin-top: 60px;
`;

export const RandomRecipeContainer = styled.div``;

export const RandomRecipePreviewImg = styled.img`
  width: 455px;
  height: 455px;

  cursor: pointer;

  &:hover {
    opacity: 70%;
    transition: all 0.3s;
  }
`;

export const RandomRecipeTitle = styled.p`
  position: absolute;
  color: white;
  font-size: 20px;
  margin-top: 10px;
`;

export const CategoryContainer = styled.div`
  margin-top: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryButtonContainer = styled.div`
  margin-top: 60px;
  display: flex;
  width: 70%;
  background-color: skyblue;
`;
