import { css } from "@emotion/react";

export const global = css`
  * {
    font-family: "TheJamsil5Bold";
  }

  @font-face {
    font-family: "TheJamsil5Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2")
      format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  body {
    background-color: #f4f0ef;
  }

  h1::before,
  h1::after {
    display: inline-block;
    width: 2px;
    height: 13px;
    content: "";
    background-color: rgb(0, 0, 0);
    margin: 0 2rem;
  }
`;
