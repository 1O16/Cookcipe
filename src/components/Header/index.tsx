import React from "next";
import Link from "next/link";

import * as S from "./styled";

const Header = () => {
  return (
    <>
      <S.HeaderContainer>
        <Link href="/">
          <S.Logo src="/img/logo.png" alt={"Logo"} />
        </Link>
        <S.SearchContainer>
          <S.SearchInput type="text" />
          <S.SearchButton type="submit">검색</S.SearchButton>
          <Link href="/auth/login">
            <S.WriteRecipeButton style={{ marginLeft: "6rem", backgroundColor: "#F8AA45" }}>
              <S.RecipeTooltip>
                <S.TooltipText>계정</S.TooltipText>A
              </S.RecipeTooltip>
            </S.WriteRecipeButton>
          </Link>
          <Link href="/recipe/write">
            <S.WriteRecipeButton style={{ backgroundColor: "#ACC7B4" }}>
              <S.RecipeTooltip>
                <S.TooltipText>글 작성</S.TooltipText>R
              </S.RecipeTooltip>
            </S.WriteRecipeButton>
          </Link>
        </S.SearchContainer>
      </S.HeaderContainer>
      <S.CategoryContainer>
        <S.Category href="/recipe/entire">전체</S.Category>
        <S.Category href="/recipe/ranking">랭킹</S.Category>
        <S.Category href="/recipe/category">분류</S.Category>
        <S.Category href="/recipe/review">후기</S.Category>
      </S.CategoryContainer>
    </>
  );
};

export default Header;
