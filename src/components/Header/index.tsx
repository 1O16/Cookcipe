import React from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { authService } from "../../services/fbase";

import { MdAccountCircle, MdLogout, MdModeEditOutline } from "react-icons/md";
import * as S from "./styled";

const Header = () => {
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const router = useRouter();
  if (router.pathname === "/auth/login" || router.pathname === "/auth/register") return null;

  const onLogoutClick = () => {
    authService.signOut();
    !isLoggedIn;

    router.push("/");
  };

  const onWriteClick = () => {
    if (isLoggedIn === false) {
      alert("로그인이 필요한 컨텐츠입니다");
      router.push("/auth/login");
    } else {
      router.push("/recipe/write");
    }
  };

  return (
    <>
      <S.HeaderContainer>
        <Link href="/">
          <S.Logo src="/img/logo.png" alt={"Logo"} />
        </Link>
        <S.SearchContainer>
          <S.SearchInput type="text" />
          <S.SearchButton type="submit">검색</S.SearchButton>
          {isLoggedIn ? (
            <S.WriteRecipeButton
              onClick={onLogoutClick}
              style={{ marginLeft: "6rem", backgroundColor: "#F8AA45" }}
            >
              <S.RecipeTooltip>
                <S.TooltipText>로그아웃</S.TooltipText>
                <MdLogout size="20" />
              </S.RecipeTooltip>
            </S.WriteRecipeButton>
          ) : (
            <Link href="/auth/login">
              <S.WriteRecipeButton style={{ marginLeft: "6rem", backgroundColor: "#F8AA45" }}>
                <S.RecipeTooltip>
                  <S.TooltipText>계정</S.TooltipText>
                  <MdAccountCircle size="20" />
                </S.RecipeTooltip>
              </S.WriteRecipeButton>
            </Link>
          )}
          <S.WriteRecipeButton
            onClick={onWriteClick}
            style={{ backgroundColor: "#161B21", color: "white" }}
          >
            <S.RecipeTooltip>
              <S.TooltipText>글 작성</S.TooltipText>
              <MdModeEditOutline size="20" />
            </S.RecipeTooltip>
          </S.WriteRecipeButton>
        </S.SearchContainer>
        <S.CategoryContainer></S.CategoryContainer>
      </S.HeaderContainer>
    </>
  );
};

export default Header;
