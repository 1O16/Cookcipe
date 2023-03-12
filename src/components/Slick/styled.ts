import styled from "@emotion/styled";
import Slider from "react-slick";

export const SlickSlider = styled(Slider)`
  .slick-list {
    width: 1100px;
    margin: 0 auto;
  }

  .slick-slide div {
    height: 120px;
    cursor: pointer;
    background-color: #f4f0ef;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

export const DivPre = styled.div`
  position: absolute;
  top: 30px;
  left: -50px;
  z-index: 1;
`;

export const DivNex = styled.div`
  position: absolute;
  top: 30px;
  right: -60px;
  z-index: 1;
`;

export const SlickTitle = styled.h1`
  text-align: center;

  font-family: "HSBombaram21-Regular";
  font-size: 25px;

  @font-face {
    font-family: "HSBombaram21-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/HSBombaram21-Regular.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
`;

export const TitleInfo = styled.div`
  text-align: center;
  padding-bottom: 25px;

  font-family: "TheJamsil5Bold";
  font-size: 15px;

  @font-face {
    font-family: "TheJamsil5Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2")
      format("woff2");
    font-weight: 700;
    font-style: normal;
  }
`;

export const MoreInfo = styled.div`
  text-align: end;
  margin: 0 -20px 4px 0;
  color: #c68837;

  font-family: "TheJamsil5Bold";
  font-size: 15px;

  background: none;
  border: none;
  cursor: pointer;
`;
