import React, { NextPage } from "next";
import { Layout, Slick } from "../components";

import * as S from "./styled";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <S.SlickContainer style={{ marginTop: "40px" }}>
        <Slick title="갓 작성된 따끈따끈한 레시피" titleInfo="가장 최근에 작성된 레시피들이에요">
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
      </S.SlickContainer>
    </Layout>
  );
};

export default HomePage;
