import React from "next";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./styled";
import Link from "next/link";

interface SlickProps {
  children: React.ReactNode;
  title: string;
  titleInfo?: string;
  moreinfo?: string;
}

export const Slick = ({ children, title, titleInfo, moreinfo }: SlickProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slideToScroll: 1,
    nextArrow: (
      <S.DivNex>
        <img src="/img/next.png" />
      </S.DivNex>
    ),
    prevArrow: (
      <S.DivPre>
        <img src="/img/prev.png" />
      </S.DivPre>
    ),
  };
  return (
    <>
      <S.SlickTitle>{title}</S.SlickTitle>
      <S.TitleInfo>{titleInfo}</S.TitleInfo>
      <Link href="/recipe/ranking" style={{ textDecoration: "none" }}>
        <S.MoreInfo>{moreinfo}</S.MoreInfo>
      </Link>
      <S.SlickSlider {...settings}>{children}</S.SlickSlider>
    </>
  );
};
