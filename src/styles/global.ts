import { css } from "@emotion/react";
import { reset } from "./reset";

export const globalStyles = css`
  ${reset}
  :root {
    --color-primary: #4cb050;
    --color-primary-darker: #39933d;
    --color-border: #e2e3eb;
    --color-brand: rgba(144, 188, 85);
    --color-background: #f4f4f4;
    --color-text-primary: #1d1c24;
    --color-text-secondary: #848894;
    --color-text-description: #6a6a6a;
    --color-text-flex: var(--color-background);
    --color-flex: var(--price-level-5);
  }
  * {
    box-sizing: border-box;
    font-family: "Pretendard";
  }
  html {
    color: #fff;
    height: 100%;
    font-size: 10px;
  }
  body {
    font-size: 1.6rem;
    font-weight: 700;
    font-family: "Pretendard";
    letter-spacing: -0.05rem;
    color: var(--color-text-primary);
    background-color: var(--color-background);
  }
  .outer {
    height: 100vh;
    overflow-y: auto;
  }
  .outer::-webkit-scrollbar {
    display: none;
  }
  .inner {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }
  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
`;
