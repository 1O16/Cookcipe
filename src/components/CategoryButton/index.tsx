import React from "react";

import * as S from "./styled";

interface CategoryButtonProps {
  filter: any;
  filterStatus: any;
}

export const CategoryButton = ({ filter, filterStatus }: CategoryButtonProps) => {
  return (
    <div>
      {filterStatus.includes("KoreanFood") ? (
        <S.SelectedButton onClick={() => filter("KoreanFood")}>한식</S.SelectedButton>
      ) : (
        <S.CategoryButton onClick={() => filter("KoreanFood")}>한식</S.CategoryButton>
      )}
      {filterStatus.includes("JapaneseFood") ? (
        <S.SelectedButton onClick={() => filter("JapaneseFood")}>일식</S.SelectedButton>
      ) : (
        <S.CategoryButton onClick={() => filter("JapaneseFood")}>일식</S.CategoryButton>
      )}
      {filterStatus.includes("ChineseFood") ? (
        <S.SelectedButton onClick={() => filter("ChineseFood")}>중식</S.SelectedButton>
      ) : (
        <S.CategoryButton onClick={() => filter("ChineseFood")}>중식</S.CategoryButton>
      )}
      {filterStatus.includes("WesternFood") ? (
        <S.SelectedButton onClick={() => filter("WesternFood")}>양식</S.SelectedButton>
      ) : (
        <S.CategoryButton onClick={() => filter("WesternFood")}>양식</S.CategoryButton>
      )}
      {filterStatus.includes("Simple") ? (
        <S.SelectedButton onClick={() => filter("Simple")}>자취음식</S.SelectedButton>
      ) : (
        <S.CategoryButton onClick={() => filter("Simple")}>자취음식</S.CategoryButton>
      )}
      {filterStatus.includes("Dessert") ? (
        <S.SelectedButton onClick={() => filter("Dessert")}>디저트</S.SelectedButton>
      ) : (
        <S.CategoryButton onClick={() => filter("Dessert")}>디저트</S.CategoryButton>
      )}
      {filterStatus.includes("Salad") ? (
        <S.SelectedButton onClick={() => filter("Salad")}>샐러드</S.SelectedButton>
      ) : (
        <S.CategoryButton onClick={() => filter("Salad")}>샐러드</S.CategoryButton>
      )}
    </div>
  );
};
