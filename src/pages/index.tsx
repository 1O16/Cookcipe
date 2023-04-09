import React, { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout, Slick } from "../components";

import { db } from "../services/fbase";
import { collection, getDocs, query, where } from "firebase/firestore";

import * as S from "./styled";

const HomePage: NextPage = () => {
  const [recipe, setRecipe] = useState([]);
  const readRecipe = async () => {
    const mySnapshot = await getDocs(collection(db, "recipe"));
    if (mySnapshot.empty) {
      console.log("No matching documents.");
    } else {
      const docData = mySnapshot.docs.map((doc) => doc.data());
      console.log(`${JSON.stringify(docData)})}`);
      setRecipe(docData);
    }
  };

  useEffect(() => {
    readRecipe();
    console.log(recipe.map((i) => i.title));
  }, []);

  const recipeTitle = recipe.map((item) => item.title);
  const recipeImg = recipe.map((item) => item.img);

  return (
    <Layout>
      <S.RecipePreviewContainer>
        <S.RandomRecipeTitle>오늘의 추천 레시피</S.RandomRecipeTitle>
        <S.RandomRecipeDesc>랜덤으로 레시피가 추천되요.</S.RandomRecipeDesc>
        <S.RandomRecipePreview>
          <S.RandomRecipePreviewImg src={recipeImg[0]} />
          <p>{recipeTitle[0]}</p>
          <S.RandomRecipePreviewImg src={recipeImg[1]} />
          <p>{recipeTitle[1]}</p>
        </S.RandomRecipePreview>
      </S.RecipePreviewContainer>
    </Layout>
  );
};

export default HomePage;

{
  /* <S.SlickContainer style={{ marginTop: "40px" }}>
<Slick title="갓 작성된 따끈따끈한 레시피" titleInfo="가장 최근에 작성된 레시피들이에요">
  <S.SlickItem>
    <h3>{recipeTitle[0]} 11</h3>
  </S.SlickItem>
  <S.SlickItem>
    <h3>{recipeTitle[1]}</h3>
  </S.SlickItem>
  <S.SlickItem>
    <h3>{recipeTitle[2]}</h3>
  </S.SlickItem>
  <S.SlickItem>
    <h3>{recipeTitle[3]}</h3>
  </S.SlickItem>
  <S.SlickItem>
    <h3>{recipeTitle[4]}</h3>
  </S.SlickItem>
</Slick>
</S.SlickContainer>
<S.SlickContainer style={{ marginTop: "150px" }}>
<Slick
  title="가장 많은 분들이 본 레시피"
  titleInfo="가장 조회수가 높은 레시피들이에요"
  moreinfo="더 많은 레시피 보러가기"
>
  <S.SlickItem>
    <h3>1</h3>
  </S.SlickItem>
  <S.SlickItem>
    <h3>2</h3>
  </S.SlickItem>
  <S.SlickItem>
    <h3>3</h3>
  </S.SlickItem>
  <S.SlickItem>
    <h3>4</h3>
  </S.SlickItem>
  <S.SlickItem>
    <h3>5</h3>
  </S.SlickItem>
</Slick>
</S.SlickContainer>
<S.SlickContainer style={{ marginTop: "150px" }}>
<Slick
  title="가장 평가가 좋은 레시피"
  titleInfo="가장 평점이 높은 레시피들이에요"
  moreinfo="더 많은 레시피 보러가기"
>
  <S.SlickItem>
    <h3>1</h3>
  </S.SlickItem>
  <S.SlickItem>
    <h3>2</h3>
  </S.SlickItem>
  <S.SlickItem>
    <h3>3</h3>
  </S.SlickItem>
  <S.SlickItem>
    <h3>4</h3>
  </S.SlickItem>
  <S.SlickItem>
    <h3>5</h3>
  </S.SlickItem>
</Slick>
</S.SlickContainer> */
}
