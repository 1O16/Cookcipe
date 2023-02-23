import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../styles/global";

const MyApp = ({ Component, pageProps }: AppProps) => {
  <Global styles={globalStyles} />;
  return <Component {...pageProps} />;
};

export default MyApp;
