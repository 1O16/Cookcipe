import { css } from "@emotion/react";

export const global = css`
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
