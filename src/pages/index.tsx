import React, { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout, CategoryButton } from "../components";

import { db } from "../services/fbase";
import { collection, getDocs } from "firebase/firestore";

import * as S from "./styled";

const HomePage: NextPage = () => {
  const readRecipe = async () => {
    const mySnapshot = await getDocs(collection(db, "recipe"));
    if (mySnapshot.empty) {
      console.log("No matching documents.");
    } else {
      const docData = mySnapshot.docs.map((doc) => doc.data());
      setRecipe(docData);
    }
  };

  const [recipe, setRecipe] = useState([]);
  const [filterdItems, setFilterdItems] = useState([readRecipe()]);
  const [filter, setFilter] = useState([
    "KoreanFood",
    "WesternFood",
    "ChineseFood",
    "JapaneseFood",
    "Dessert",
    "Salad",
    "Simple",
  ]);

  const applyFilter = () => {
    setFilterdItems(recipe.filter((item) => filter.includes(item.category)));
  };

  const filterItems = (category: string) => {
    console.log(category, ":", !filter.includes(category));
    const index = filter.indexOf(category);
    const items = filter;
    if (index >= 0) {
      items.splice(index, 1);
    } else {
      items.push(category);
    }
    setFilter(items);
    applyFilter();
    console.log(filterdItems);
    console.log(filter);
  };

  useEffect(() => {
    readRecipe();
    console.log(recipe.map((i) => i.title));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recipeTitle = recipe.map((item) => item.title);
  const recipeImg = recipe.map((item) => item.img);

  return (
    <Layout>
      <S.RecipePreviewContainer>
        <S.PropsHeader>오늘의 추천 레시피</S.PropsHeader>
        <S.PropsDesc>랜덤으로 레시피가 추천되요.</S.PropsDesc>
        <S.RandomRecipePreview>
          <S.RecipePreviewContainer>
            <S.RandomRecipePreviewImg src={recipeImg[0]} />
            <S.RandomRecipeTitle>{recipeTitle[0]}</S.RandomRecipeTitle>
          </S.RecipePreviewContainer>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <S.RecipePreviewContainer>
              <S.RandomRecipePreviewImg src={recipeImg[1]} style={{ height: "220px" }} />
              <S.RandomRecipeTitle>{recipeTitle[1]}</S.RandomRecipeTitle>
            </S.RecipePreviewContainer>
            <div style={{ display: "flex", marginTop: "15px" }}>
              <S.RecipePreviewContainer>
                <S.RandomRecipePreviewImg
                  src={recipeImg[2]}
                  style={{ width: "220px", height: "220px", marginRight: "15px" }}
                />
                <S.RandomRecipeTitle>{recipeTitle[2]}</S.RandomRecipeTitle>
              </S.RecipePreviewContainer>
              <S.RecipePreviewContainer>
                <S.RandomRecipePreviewImg
                  src={recipeImg[3]}
                  style={{ width: "220px", height: "220px" }}
                />
                <S.RandomRecipeTitle>{recipeTitle[3]}</S.RandomRecipeTitle>
              </S.RecipePreviewContainer>
            </div>
          </div>
        </S.RandomRecipePreview>
      </S.RecipePreviewContainer>
      <S.CategoryContainer>
        <S.PropsHeader>Cookcipe 레시피</S.PropsHeader>
        <S.PropsDesc>모든 레시피를 손쉽고 빠르게</S.PropsDesc>
        <S.CategoryButtonContainer>
          <CategoryButton filter={filterItems} filterStatus={filter} />
          {filterdItems.map((filteredItem) => (
            <h2 key={filteredItem.id}>
              {filteredItem.title} : {filteredItem.category}
            </h2>
          ))}
        </S.CategoryButtonContainer>
      </S.CategoryContainer>
    </Layout>
  );
};

export default HomePage;
